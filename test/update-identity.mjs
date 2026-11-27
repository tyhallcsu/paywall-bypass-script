#!/usr/bin/env node
// Tampermonkey update-identity harness, run against the REAL scripts.
//
// Installs the archived v1.3.0 (what Greasy Fork users have), then serves a newer build at
// the SAME install URL and asks Tampermonkey to install it. Reads Tampermonkey's own storage
// to see whether the existing record was updated in place or a second script was added.
//
//   CONTROL  v1.3.0 -> v2.1.0 (commit 98a5e29: renamed @name + @namespace)  expect DUPLICATE
//   FIX      v1.3.0 -> paywall-bypass.user.js (working tree)                 expect IN_PLACE
//
// CONTROL proves the harness can see a duplicate; without it an IN_PLACE result for FIX
// would mean nothing.
//
//   TM_EXTENSION_PATH=/path/to/unpacked/tampermonkey node test/update-identity.mjs [--runs=2]
//
// Only the @updateURL/@downloadURL lines are rewritten, to point at a 127.0.0.1 server on an
// ephemeral port. Nothing touches the public web. Each case uses a throwaway Chrome profile
// that is deleted on exit. Only records served by this harness are read from storage.
//
// Scope: the navigate-to-.user.js install/update flow. Tampermonkey's periodic background
// @updateURL check is a different code path and is not exercised here.

import { chromium } from '@playwright/test';
import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const EVIDENCE = join(ROOT, 'docs/evidence/update-identity');
const EXT = process.env.TM_EXTENSION_PATH;
const RUNS = Number((process.argv.find((a) => a.startsWith('--runs=')) || '--runs=2').split('=')[1]) || 2;
const RENAMED_COMMIT = '98a5e29';

if (!EXT) {
  console.error('TM_EXTENSION_PATH is not set. Point it at an unpacked Tampermonkey directory.');
  process.exit(2);
}

const V130 = readFileSync(join(ROOT, 'archive/v1.3.0.user.js'), 'utf8');
const V210 = execFileSync('git', ['show', `${RENAMED_COMMIT}:paywall-bypass.user.js`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
const CANDIDATE = readFileSync(join(ROOT, 'paywall-bypass.user.js'), 'utf8');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const cleanups = [];
async function cleanup() {
  for (const fn of cleanups.splice(0).reverse()) {
    try { await fn(); } catch { /* best effort */ }
  }
}
for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, async () => { await cleanup(); process.exit(130); });

function meta(src, key) {
  const m = new RegExp(`^// @${key}\\s+(.*?)\\s*$`, 'm').exec(src);
  return m ? m[1] : null;
}

// Point update checks at the local server; everything else is served byte for byte.
function localise(src, url) {
  return src
    .replace(/^\/\/ @downloadURL\s+.*$/m, `// @downloadURL  ${url}`)
    .replace(/^\/\/ @updateURL\s+.*$/m, `// @updateURL    ${url}`);
}

async function startServer() {
  const routes = new Map();
  const srv = createServer((req, res) => {
    const path = new URL(req.url, 'http://127.0.0.1').pathname;
    if (!routes.has(path)) { res.writeHead(404).end('nope'); return; }
    res.writeHead(200, {
      'content-type': 'text/javascript; charset=utf-8',
      'cache-control': 'no-store',
    }).end(routes.get(path));
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${srv.address().port}`;
  const close = () => new Promise((r) => srv.close(() => r()));
  return { base, serve: (p, body) => routes.set(p, body), close };
}

// Tampermonkey 5.x keeps each script as wrapped {origin, value} records keyed
// !extdb.@meta#<uuid>. If that shape is missing, the run is INCONCLUSIVE, not guessed.
async function readScripts(sw, base) {
  return sw.evaluate(async (serverBase) => {
    const all = await chrome.storage.local.get(null);
    const unwrap = (r) => (r && typeof r === 'object' && 'value' in r ? r.value : r);
    const one = (v) => (Array.isArray(v) ? v[0] : v);
    const out = [];
    let schemaOk = false;
    for (const [key, raw] of Object.entries(all)) {
      const m = /^!extdb\.@meta#(.+)$/.exec(key);
      if (!m) continue;
      const rec = unwrap(raw);
      if (!rec || typeof rec !== 'object') continue;
      schemaOk = true;
      const dl = one(rec.downloadURL) || one(rec.fileURL) || '';
      if (typeof dl !== 'string' || !dl.startsWith(serverBase)) continue;
      out.push({ uuid: m[1], name: one(rec.name) || null, namespace: one(rec.namespace) || null, version: one(rec.version) || null });
    }
    return { schemaOk, scripts: out };
  }, base);
}

async function clickInstall(ctx, extId) {
  for (const p of ctx.pages().filter((x) => !x.isClosed())) {
    let url = '';
    try { url = p.url(); } catch { continue; }
    if (!url.startsWith(`chrome-extension://${extId}/`)) continue;
    for (const rx of [/^\s*install\s*$/i, /^\s*update\s*$/i, /^\s*reinstall\s*$/i]) {
      try {
        const btn = p.locator('button, input[type=button], input[type=submit], a').filter({ hasText: rx }).first();
        if (await btn.count()) { await btn.click({ timeout: 4000 }); return; }
      } catch { /* page closed mid-click */ }
    }
  }
}

// Tampermonkey's confirmation tab is racy; retry until storage confirms the version.
async function install(ctx, sw, extId, base, url, version) {
  let last = { schemaOk: true, scripts: [] };
  for (let attempt = 1; attempt <= 8; attempt++) {
    const p = await ctx.newPage();
    try { await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 }); } catch { /* TM swallows the nav */ }
    await sleep(2500);
    await clickInstall(ctx, extId);
    await sleep(2500);
    for (const q of ctx.pages().filter((x) => !x.isClosed())) {
      let u = '';
      try { u = q.url(); } catch { continue; }
      if (u.startsWith(`chrome-extension://${extId}/`)) await q.close().catch(() => {});
    }
    if (!p.isClosed()) await p.close().catch(() => {});
    last = await readScripts(sw, base);
    if (!last.schemaOk || last.scripts.some((s) => s.version === version)) return { attempts: attempt, ...last };
  }
  return { attempts: 8, ...last };
}

async function runCase({ id, title, next, expected }) {
  const server = await startServer();
  const profile = mkdtempSync(join(process.env.TMPDIR || tmpdir(), `tm-identity-${id}-`));
  const PATH = '/paywall.user.js';
  const url = server.base + PATH;
  const ctx = await chromium.launchPersistentContext(profile, {
    headless: false,
    args: [`--disable-extensions-except=${EXT}`, `--load-extension=${EXT}`],
  });
  cleanups.push(async () => { await ctx.close().catch(() => {}); await server.close(); rmSync(profile, { recursive: true, force: true }); });

  const sw = ctx.serviceWorkers()[0] || await ctx.waitForEvent('serviceworker', { timeout: 30000 });
  const extId = new URL(sw.url()).host;
  await sleep(3500);

  const record = { id, title, expected, next: { name: meta(next, 'name'), namespace: meta(next, 'namespace'), version: meta(next, 'version') } };

  server.serve(PATH, localise(V130, url));
  const a = await install(ctx, sw, extId, server.base, url, '1.3.0');
  if (!a.schemaOk || a.scripts.length !== 1) {
    record.observed = 'INCONCLUSIVE';
    record.reason = a.schemaOk ? `v1.3.0 left ${a.scripts.length} record(s)` : 'Tampermonkey storage schema not recognised';
    await cleanup();
    return record;
  }
  const before = a.scripts[0];

  server.serve(PATH, localise(next, url));
  const b = await install(ctx, sw, extId, server.base, url, record.next.version);
  record.before = before;
  record.after = b.scripts;
  const survivor = b.scripts.find((s) => s.uuid === before.uuid);
  record.observed = b.scripts.length === 1 && survivor && survivor.version === record.next.version ? 'IN_PLACE'
    : b.scripts.length >= 2 ? 'DUPLICATE' : 'OTHER';
  record.verdict = record.observed === expected ? 'AS_EXPECTED' : 'UNEXPECTED';
  await cleanup();
  return record;
}

const CASES = [
  { id: 'CONTROL', title: `v1.3.0 -> v2.1.0 (${RENAMED_COMMIT}, renamed)`, next: V210, expected: 'DUPLICATE' },
  { id: 'FIX', title: 'v1.3.0 -> working-tree paywall-bypass.user.js', next: CANDIDATE, expected: 'IN_PLACE' },
];

let tmVersion = 'unknown';
try { tmVersion = JSON.parse(readFileSync(join(EXT, 'manifest.json'), 'utf8')).version; } catch { /* noop */ }
const report = {
  date: new Date().toISOString().slice(0, 10),
  platform: `${process.platform} ${process.arch}`,
  node: process.version,
  tampermonkey: tmVersion,
  pathTested: 'navigate-to-.user.js install/update flow; NOT the periodic background @updateURL check',
  runs: [],
};

for (let run = 1; run <= RUNS; run++) {
  console.log(`\nRUN ${run}/${RUNS}`);
  const results = [];
  for (const c of CASES) {
    const r = await runCase(c);
    results.push(r);
    console.log(`  [${r.id}] ${r.title}\n      observed=${r.observed} expected=${r.expected} -> ${r.verdict || r.reason}`);
    for (const s of r.after || []) console.log(`      uuid=${s.uuid.slice(0, 8)}… v${s.version} "${s.name}"`);
  }
  report.runs.push({ run, results });
}

const ok = report.runs.every((r) => r.results.every((x) => x.verdict === 'AS_EXPECTED'));
report.conclusion = ok ? 'FIX_UPDATES_IN_PLACE' : 'INCONCLUSIVE_OR_FAILED';
mkdirSync(EVIDENCE, { recursive: true });
writeFileSync(join(EVIDENCE, 'result.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`\nCONCLUSION: ${report.conclusion}\nevidence: docs/evidence/update-identity/result.json`);
await cleanup();
process.exit(ok ? 0 : 1);

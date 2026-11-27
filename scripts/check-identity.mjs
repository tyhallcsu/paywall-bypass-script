#!/usr/bin/env node
// Guards the userscript identity that existing Greasy Fork installs update against.
//
// Tampermonkey treats @name (with @namespace) as a script's identity: a build with a
// different @name installs as a second script instead of updating the first. v1.3.0 is what
// Greasy Fork users have installed, so every release must keep its @name and @namespace
// byte for byte, and keep update checks on Greasy Fork. See issue #9 and
// docs/update-identity.md.
//
//   node scripts/check-identity.mjs

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE = join(ROOT, 'archive/v1.3.0.user.js');
const CANDIDATE = join(ROOT, 'paywall-bypass.user.js');
const GREASY_FORK_UPDATE = 'https://update.greasyfork.org/scripts/495817/';

function header(path) {
  const src = readFileSync(path, 'utf8');
  const block = /\/\/ ==UserScript==([\s\S]*?)\/\/ ==\/UserScript==/.exec(src);
  if (!block) throw new Error(`${path}: no ==UserScript== block`);
  const meta = {};
  for (const line of block[1].split('\n')) {
    const m = /^\/\/ @(\S+)\s+(.*?)\s*$/.exec(line);
    if (m && !(m[1] in meta)) meta[m[1]] = m[2];
  }
  return meta;
}

const base = header(BASELINE);
const cand = header(CANDIDATE);
const failures = [];

for (const key of ['name', 'namespace']) {
  if (cand[key] !== base[key]) {
    failures.push(`@${key} changed:\n    v1.3.0:    ${JSON.stringify(base[key])}\n    candidate: ${JSON.stringify(cand[key])}`);
  }
}
for (const key of ['updateURL', 'downloadURL']) {
  if (!cand[key] || !cand[key].startsWith(GREASY_FORK_UPDATE)) {
    failures.push(`@${key} must point at Greasy Fork (${GREASY_FORK_UPDATE}…), got ${JSON.stringify(cand[key])}`);
  }
}
const version = /const SCRIPT_VERSION = '([^']+)'/.exec(readFileSync(CANDIDATE, 'utf8'));
if (!version || version[1] !== cand.version) {
  failures.push(`SCRIPT_VERSION (${version && version[1]}) does not match @version (${cand.version})`);
}

if (failures.length) {
  console.error('Identity check FAILED — existing installs would not update in place:\n');
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log(`Identity OK: @name/@namespace match v1.3.0, updates from Greasy Fork, @version ${cand.version}`);

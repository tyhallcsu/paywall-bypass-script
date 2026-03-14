# Feature Strategy for Paywall Bypass Script

Research date: `2026-03-14`

This document turns the current repository state, the live Greasy Fork feedback, and the current bypass ecosystem into a prioritized feature plan. It is intentionally opinionated: the goal is not to copy every competitor, but to decide which features would make Paywall Bypass Script the most compelling paywall-bypass userscript for desktop and mobile users.

Current project baseline:

- Greasy Fork userscript with `6,600+` installs, `19` daily installs, and `12` ratings
- `232` supported `@match` patterns in the current script
- Strongest current strengths: Greasy Fork install path, mobile-friendly floating UI, multi-service routing, quick menu, local-only reliability tracking, and accessible controls
- Weakest current gap: it is still mostly a service launcher, while the strongest competitors combine service routing with client-side paywall removal, cookie resets, and custom rule systems

## Research Snapshot

### Competitor Analysis

Visible adoption numbers below reflect public repo metrics seen on `2026-03-14`. For Bypass Paywalls Clean (BPC), the official project has moved around after takedowns, so the counts below are for the most visible currently maintained public mirrors and clones.

| Competitor | Visible adoption | What it does well | Techniques used | Gaps vs. Paywall Bypass Script | What Paywall Bypass Script already does better |
| --- | --- | --- | --- | --- | --- |
| Bypass Paywalls Clean for Chrome (`csns1/bypass-paywalls-chrome-clean-magnolia1234`) | `557` stars, `89` forks | Broad site coverage, frequent rule updates, power-user configurability | Cookie clearing, Googlebot user-agent spoofing, Google/Facebook/Twitter referer spoofing, AMP redirects, paywall-script blocking, optional custom sites, excluded sites, uBlock-friendly workflow | Harder install, extension-only, not friendly on mobile, no simple public install page | Easier Greasy Fork install, cleaner mobile UI, local service reliability feedback, grouped service chooser |
| Bypass Paywalls Clean for Firefox (`bpc-clone/bypass-paywalls-firefox-clean`) | `94` stars, `16` forks | Same BPC rule model on Firefox | Same family of techniques as Chrome clone, especially cookie/script/ruleset tactics | Same extension/sideloading friction | Same advantages as above, especially simple userscript distribution |
| Bypass Paywalls Tampermonkey (`LegeBeker/bypass-paywalls-tampermonkey`) | `194` stars, `26` forks | Strong userscript-side DOM surgery for specific sites | Overlay removal, class/style unhide, AMP redirects, JSON-LD extraction, localStorage clearing, direct DOM rewrites | Less structured UI, less mobile-oriented, no multi-service fallback, less emphasis on service reliability | Better UI, service grouping, local-only success stats, better install/docs/release hygiene |
| Ladder (`everywall/ladder`) | `6,267` stars, `292` forks | Most credible open-source self-hosted general-purpose bypass proxy | Proxy fetch, ruleset YAML, `User-Agent` / `Referer` / `X-Forwarded-For` / `Cookie` overrides, API endpoint, raw HTML endpoint, CORS removal | Requires self-hosting, no zero-config consumer UX, not a Greasy Fork-style install | Simpler end-user install, safer default scope, better lightweight UX |
| 13ft (`wasi-master/13ft`) | `4,104` stars, `217` forks | Simple self-hosted 12ft replacement with bookmarklet flow | Googlebot-style fetch, self-hosted proxy, bookmarklet | Less flexible than Ladder, still self-hosted, minimal UI | Multi-service routing and local decision-making without hosting anything |
| Freedium (`Freedium-cfd/web` mirror) | `1,650` stars, `173` forks | Best focused Medium-specific parser/reader experience | Medium-specific parsing, self-hostable reading service | Narrow scope, currently not a general paywall tool, public domain stability has been unreliable | Much broader multi-site coverage and better general-purpose workflow |

### Service Landscape

Live endpoint tests were run on `2026-03-14` against a sample paywalled URL. These are practical integration notes, not permanent guarantees.

| Service | Status | Notes | Product implication |
| --- | --- | --- | --- |
| Archive.org / Wayback Machine | Solid | Returned `200`; official archive, best stable long-term fallback | Keep prominent; worth deeper lookup support |
| Archive.today / Archive.is / Archive.ph | Alive but rate-limited | Base sites respond, but direct submit tests returned `429` | Keep, but treat as bursty and avoid over-prioritizing blindly |
| RemovePaywall | Solid | Returned `200` in live redirect test | Good current public fallback |
| PaywallBuster | Solid | Returned `200` in live redirect test | Good current public fallback |
| SMRY | Solid | Returned `200`; more summary-oriented than raw article delivery | Keep, but position as summary/extraction aid, not a universal replacement |
| SimilarWeb | Analysis only | Returned `202` challenge; useful for context, not bypass | Keep only as analysis tool |
| Ladder | Active self-hosted option | Strong project health, API support, configurable ruleset | Best future custom-endpoint integration target |
| 13ft | Active self-hosted option | Healthy repo, simple self-hosted pattern | Good secondary custom-endpoint target |
| 1ft.io | Unreliable / effectively down | Returned `502` during live test | Do not depend on it as a public default |
| 12ft.io | Dead | Returned `000`; effectively gone | Keep removed |
| Freedium public domain | Unreliable | `freedium.cfd` failed to resolve in live test, though the codebase is still active elsewhere | Treat as a project to watch, not a dependable public service today |

API-based integration options are limited. The clearest current target is a user-supplied Ladder instance, because Ladder exposes both `/api/*` and `/raw/*` endpoints in addition to its browser UI.

### Paywall Technique Landscape

The current market is no longer split into just “soft” and “hard” paywalls. Several distinct patterns matter for roadmap planning:

| Paywall type | What it looks like | Can a userscript help? | Notes |
| --- | --- | --- | --- |
| Metered paywall | Article count tracked in cookies, localStorage, or first-party state | Often yes | Best solved with storage resets, cookie cleanup, or alternate entry points |
| Registration wall / regwall | Reader can continue after email or free account gate | Often yes | Often vulnerable to DOM unhide, storage resets, or alternate referral paths |
| JavaScript overlay / CSS blur | Full article is present, but blocked by modal, blur, or body lock | Often yes | Best solved with early DOM/CSS/script rules |
| AMP or alternate-render path | Publisher offers a less restricted AMP, print, or crawler-friendly path | Sometimes | Still useful on some sites, but less universal than before |
| Server-side entitlement paywall | Server decides what content to send based on subscription state or product entitlements | Usually not by userscript alone | Often requires proxy fetch, self-hosted tool, or cannot be bypassed cleanly |
| Anti-bot / challenge layer | CAPTCHA, bot mitigation, request scoring, geo checks | Rarely by userscript alone | Extension or self-hosted proxy strategies are more realistic here |
| Dynamic / AI-optimized paywall | Paywall type varies by user, behavior, location, or campaign | Partially | Requires strategy selection, not just fixed selectors |

Key market trend for `2025-2026`: modern paywall products are becoming more dynamic and entitlement-driven. Poool markets native paywall, registration-wall, and cookie-wall flows; Zephr markets soft, metered, hard, and dynamic AI-optimized paywalls; Arc XP emphasizes entitlements, rulesets, AMP handling, and identity-linked access control; Leaky Paywall continues to mix metered, hard, registration, cookie-based, and IP-based controls. That means a pure redirect-service strategy will keep getting weaker unless it is paired with local rules, site profiles, or optional proxy integrations.

## Tier 1: High Impact, Feasible Now

These features solve real user pain with userscript-safe primitives and no required backend.

### 1. Client-Side Site Rule Packs

- **Name**: Client-Side Site Rule Packs
- **Problem**: The biggest current complaint is service fragility. Users should not have to leave the page if the article is already recoverable locally.
- **Solution**: Add an optional internal rules layer for the top-value domains where client-side bypass is realistic. Each rule pack can run at `document-start` or early `document-idle` to remove overlays, unblock scroll, clear known soft-meter states, suppress paywall scripts, or redirect to an alternate page variant before the wall fully initializes.
- **Effort**: Large
- **Dependencies**: DOM APIs, `GM_addStyle`, `MutationObserver`, existing domain matching and site-routing code
- **Competitor Reference**: Bypass Paywalls Clean, Bypass Paywalls Tampermonkey

### 2. One-Click Meter Reset

- **Name**: One-Click Meter Reset
- **Problem**: Metered and registration walls often persist because first-party storage survives across visits. Public services are overused for cases that only need a local reset.
- **Solution**: Add a current-site action that clears safe first-party cookies, `localStorage`, and `sessionStorage` for the active domain, plus an optional per-site key allowlist for known meter keys. This should be exposed in the floating menu and GM menu, then optionally reload the page automatically.
- **Effort**: Small
- **Dependencies**: DOM storage APIs, cookie helpers, `GM_registerMenuCommand`, `GM_setValue`
- **Competitor Reference**: Bypass Paywalls Clean (`clear cookies`), Cookie Remover workflow documented by BPC

### 3. Custom Proxy Endpoint Support

- **Name**: Custom Proxy Endpoint Support
- **Problem**: Public services go down. Self-hosted tools like Ladder and 13ft are healthier than many public endpoints, but the current script cannot use them.
- **Solution**: Let users add one or more custom endpoint templates in settings, for example a personal Ladder or 13ft deployment. The script should support `{url}`, `{domain}`, and “raw/API” modes, then include those user-defined endpoints in the same menu, default-action logic, and reliability tracking as the built-in services.
- **Effort**: Medium
- **Dependencies**: `GM_getValue`, `GM_setValue`, existing export/import settings flow, existing service menu renderer
- **Competitor Reference**: Ladder, 13ft

### 4. Service Health Checks and Auto-Quarantine

- **Name**: Service Health Checks and Auto-Quarantine
- **Problem**: The current menu can become stale when services degrade, which directly caused recent user complaints.
- **Solution**: Probe service health with lightweight checks, cache the results locally, and automatically demote or hide services that repeatedly fail. The menu should show `up`, `degraded`, or `down` states with “last checked” timestamps, while still allowing the user to manually force a service on if they want to retry it.
- **Effort**: Medium
- **Dependencies**: `GM_setValue`, `GM_getValue`, timers, optional `GM_xmlhttpRequest` for cross-origin probes, existing reliability-tracking store
- **Competitor Reference**: Mostly unique; a strong differentiator for a service-driven userscript

### 5. Per-Site Strategy Profiles

- **Name**: Per-Site Strategy Profiles
- **Problem**: “Choose and order which services to use” was valid feedback, but ordering services alone is still too shallow because some sites need different tactics entirely.
- **Solution**: Evolve `SITE_BEST_SERVICE` into a `SITE_STRATEGY` registry that can rank multiple tactics, for example `local_rule -> meter_reset -> archive_today -> wayback -> custom_proxy`. Expose lightweight per-site overrides so advanced users can change the default behavior without editing core logic.
- **Effort**: Medium
- **Dependencies**: Existing service-order storage, current domain-matching layer, export/import settings support
- **Competitor Reference**: Bypass Paywalls Clean custom sites and option-based rule selection

### 6. Reader Rescue Mode

- **Name**: Reader Rescue Mode
- **Problem**: On many modern sites, the article body exists in JSON-LD or hydration payloads even when the visible DOM is gated. Opening external services is unnecessary if the script can recover the content directly.
- **Solution**: Before or during paywall initialization, inspect common structured-data sources and embedded state blobs, then render a clean local reader view when enough article content is recoverable. This should be explicit, site-scoped, and fallback-oriented so it never replaces the normal page unless it has something useful to show.
- **Effort**: Large
- **Dependencies**: DOM parsing, structured-data extraction, existing floating UI, local storage for user preference
- **Competitor Reference**: Bypass Paywalls Tampermonkey and BPC both do site-specific extraction; Freedium proves the reader-focused version can be very compelling

## Tier 2: Medium Impact, Medium Effort

These features would make the project meaningfully more differentiated, but they either need broader architecture work or should wait until Tier 1 is stable.

### 1. Native Browser Extension Port

- **Name**: Native Browser Extension Port
- **Problem**: Some of the best techniques in the ecosystem need extension permissions, not just userscript APIs.
- **Solution**: Port the current strategy engine and UI to a Chrome/Firefox extension while keeping the userscript as the easiest install path. The extension version can add native context menus, optional host permissions, and permission-gated tactics that are not possible from a normal userscript.
- **Effort**: Large
- **Dependencies**: WebExtension APIs, storage sync, context menus, optional `declarativeNetRequest` / `webRequest`
- **Competitor Reference**: Bypass Paywalls Clean Chrome and Firefox

### 2. Community Service Registry and Remote Rule Feed

- **Name**: Community Service Registry and Remote Rule Feed
- **Problem**: Public services and site tactics change faster than code releases.
- **Solution**: Load a versioned JSON registry from GitHub for service definitions, site strategies, and quarantine flags, with a strict schema and local last-known-good cache. Keep the userscript safe by validating structure before applying it and by letting users pin the bundled list if they prefer stability over freshness.
- **Effort**: Medium
- **Dependencies**: `GM_xmlhttpRequest` or `fetch`, `GM_setValue`, schema validation, documentation
- **Competitor Reference**: Ladder’s external ruleset model, BPC’s regular site-rule updates

### 3. Universal Paywall Detection Mode

- **Name**: Universal Paywall Detection Mode
- **Problem**: Static `@match` lists are accurate but always lag new site requests.
- **Solution**: Offer an opt-in “run on all sites” build or extension mode that only activates when paywall heuristics fire. Instead of maintaining massive static coverage, the script can detect likely paywalls on unlisted domains, then offer the best generic strategy or let the user save the domain locally.
- **Effort**: Medium
- **Dependencies**: Broader match/host permissions, stronger heuristics, settings UI, performance guardrails
- **Competitor Reference**: Mostly unique in this exact UI-first userscript niche

### 4. Local Insights Dashboard

- **Name**: Local Insights Dashboard
- **Problem**: Reliability badges are useful, but they do not help users understand patterns over time.
- **Solution**: Add a local-only dashboard page or modal that shows which services work best by domain, which domains repeatedly fail, and which tactics the user should promote or demote. This turns local stats into understandable decisions instead of background telemetry.
- **Effort**: Medium
- **Dependencies**: Existing local stats store, a simple dashboard UI, export/import compatibility
- **Competitor Reference**: Mostly unique

### 5. Community Signature Exchange

- **Name**: Community Signature Exchange
- **Problem**: A solo maintainer will eventually bottleneck on paywall signature updates.
- **Solution**: Standardize issue/discussion templates for submitting new site signatures, meter keys, DOM markers, and service behavior notes, then convert accepted contributions into importable JSON snippets. This starts manual and curated, but it lays the groundwork for a cleaner community maintenance model.
- **Effort**: Medium
- **Dependencies**: GitHub Issues/Discussions, JSON schema, curation docs
- **Competitor Reference**: BPC’s community update culture, but with a more structured rule-exchange layer

## Tier 3: Ambitious, Long-Term

These are the “definitive tool” ideas. They should stay opt-in, privacy-aware, and well-scoped if pursued.

### 1. AI-Assisted Article Rescue

- **Name**: AI-Assisted Article Rescue
- **Problem**: Some sites expose fragments, metadata, or partial HTML, but not enough clean structure for deterministic extraction.
- **Solution**: Build an opt-in fallback that sends structured fragments or user-provided proxy HTML to a model that can reconstruct a readable article, deduplicate repeated sections, and label uncertainty. OpenAI Codex / OpenAI program credits could make it realistic to prototype this without immediate infrastructure cost, but it should remain off by default and transparent about what leaves the browser.
- **Effort**: Large
- **Dependencies**: OpenAI API access, explicit user consent, extraction pipeline, clear privacy UX
- **Competitor Reference**: Freedium’s roadmap mentions AI summaries; few current tools have a credible general-purpose AI fallback

### 2. Paywall Provider Fingerprinting Engine

- **Name**: Paywall Provider Fingerprinting Engine
- **Problem**: Maintaining tactics by site does not scale when the same providers appear across many publishers.
- **Solution**: Detect provider families such as Piano, Poool, Zephr, Arc XP, Leaky Paywall, Tinypass, Evolok, or custom meters by script URLs, DOM markers, storage keys, and network patterns. Then choose a provider-level strategy before falling back to a site-specific override.
- **Effort**: Large
- **Dependencies**: Signature database, detection engine, site-profile integration, likely extension support for some signals
- **Competitor Reference**: BPC effectively does this implicitly by site; formalizing it would be a major differentiator

### 3. Reader Workspace

- **Name**: Reader Workspace
- **Problem**: Even when a bypass succeeds, the result is often an ugly proxy or archive page.
- **Solution**: Build a clean reading workspace that can import recovered article HTML, show better typography, keep a local reading list, and export Markdown or clipped text. That would make the project feel like a serious reading tool, not just a launcher.
- **Effort**: Large
- **Dependencies**: Parsing/cleaning layer, local storage, optional extension shell for persistent UI
- **Competitor Reference**: Freedium is strongest here, but only for Medium

### 4. Public SDK and API Surface

- **Name**: Public SDK and API Surface
- **Problem**: Today the project’s logic is useful only inside this one userscript.
- **Solution**: Extract the paywall-detection and strategy layers into reusable packages and documented APIs so other extensions, reading tools, or self-hosted proxies can consume them. This shifts the project from “one script” to an ecosystem anchor.
- **Effort**: Large
- **Dependencies**: Package boundaries, tests, docs, long-term maintenance commitment
- **Competitor Reference**: Ladder exposes an API on the proxy side; this would expose the detection and routing side

## Competitive Positioning Summary

The clearest answer to “why use this instead of Bypass Paywalls Clean?” is not “because it will out-hack BPC on every site.” BPC still wins on deep client-side site rules, while Ladder and 13ft win on self-hosted proxy power, and Freedium wins on single-site reading experience. Paywall Bypass Script should own a different position: the easiest, most installable, most mobile-friendly, most privacy-conscious paywall toolkit with a polished UI and multiple fallback strategies in one place. If it adds optional client-side site rules, user-supplied Ladder/13ft endpoints, and self-healing service health, it becomes the best front door into the entire ecosystem instead of just another brittle redirect menu.

## Recommended Next Steps

1. **Client-Side Site Rule Packs** (`Large`)
   Start with a short list of high-value publishers where client-side removal is stable and demonstrably useful. This closes the single biggest gap versus BPC.
2. **Custom Proxy Endpoint Support** (`Medium`)
   This is the best answer to service fragility without taking on hosting responsibility. It also pairs naturally with current export/import settings.
3. **Service Health Checks and Auto-Quarantine** (`Medium`)
   This directly addresses the strongest recent feedback and improves trust immediately.
4. **One-Click Meter Reset** (`Small`)
   Fast win, strong user value, and a credible `good first issue` candidate.
5. **Per-Site Strategy Profiles** (`Medium`)
   This makes existing routing smarter and prepares the architecture for future local rules, custom proxies, and universal-mode logic.

## Research Basis

Primary references used for this plan:

- Current repository: https://github.com/tyhallcsu/paywall-bypass-script
- Greasy Fork script page: https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com
- Greasy Fork feedback: https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/feedback
- Bypass Paywalls Clean Chrome clone: https://github.com/csns1/bypass-paywalls-chrome-clean-magnolia1234
- Bypass Paywalls Firefox clone: https://github.com/bpc-clone/bypass-paywalls-firefox-clean
- Bypass Paywalls Tampermonkey: https://github.com/LegeBeker/bypass-paywalls-tampermonkey
- Ladder: https://github.com/everywall/ladder
- 13ft: https://github.com/wasi-master/13ft
- Freedium mirror: https://github.com/Freedium-cfd/web
- Poool dynamic wall overview: https://www.poool.tech/fr/products/dynamic-wall
- Zephr by Zuora paywall overview: https://www.zuora.com/products/zephr/
- Arc XP paywall and entitlement docs: https://docs.arcxp.com/en/products/subscriptions/getting-started-with-the-arc-xp-subscriptions-paywall.html
- Leaky Paywall docs and overview: https://docs.leakypaywall.com/article/41-leaky-paywall-overview

# Roadmap

This document outlines the planned direction for Paywall Bypass Script as it grows from a successful userscript into a broader open-source project.

The live public release remains the Greasy Fork userscript:
[Paywall Bypass Script on Greasy Fork](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)

The roadmap is intentionally ambitious but realistic. Each milestone below represents planned work, not shipped functionality.
Milestone labels here are forward-looking roadmap buckets and may ultimately ship across later `2.x` or `3.x` releases.

## Guiding Principles

- Keep the current userscript stable while exploring new distribution formats
- Preserve privacy-first behavior and local-only preference storage where possible
- Make service updates easier for contributors and maintainers
- Improve maintainability by separating reusable logic from delivery-specific UI

## v2.0 — Chrome Extension Port

Goal: bring the project to Chrome users who prefer an install path without Tampermonkey.

### Planned scope

- Convert the userscript into a Manifest V3 Chrome extension
- Support Chrome Web Store distribution
- Replace userscript menu commands with native Chrome extension UI
- Add native context menus, a popup UI, and extension-managed settings

### Why this matters

- No userscript manager dependency
- Easier onboarding for mainstream Chrome users
- Better room for extension-specific UI and settings management

### Technical considerations

- Manifest V3 service-worker lifecycle limitations
- Whether redirects belong in a content script, popup flow, or background worker
- Possible use of `declarativeNetRequest` for redirect-style workflows
- Preference storage via `chrome.storage.sync`

## v2.1 — Firefox Add-on Port

Goal: extend the browser-extension work into a first-class Firefox add-on.

### Planned scope

- Port the Chrome extension to Firefox using WebExtension APIs
- Keep the UI and settings model aligned across Chromium and Firefox
- Minimize browser-specific divergence

### Compatibility strategy

- Use a WebExtension-first architecture where possible
- Introduce `webextension-polyfill` if a promise-based wrapper becomes necessary
- Keep browser-specific logic isolated to manifest and adapter layers

## v2.5 — Smart Bypass Engine

Goal: move beyond a static service order into adaptive per-site routing.

### Planned scope

- Rank services by success history and response behavior
- Store per-domain service results locally using userscript storage
- Learn which services work best over time for specific sites

### Design direction

- Start with lightweight probes instead of full background navigation when feasible
- Combine observed performance with user-confirmed success/failure feedback
- Keep the model transparent and locally inspectable

## v3.0 — Community Service Registry

Goal: separate service configuration from core logic so the community can help maintain it.

### Planned scope

- Move service definitions into a repo-managed `services.json`
- Let maintainers and contributors update service data through pull requests
- Allow the script to check for registry updates periodically

### Why this matters

- Faster updates when services change
- Less risk when adjusting service URLs or metadata
- Cleaner distinction between engine code and service catalog data

## v3.5 — Paywall Detection Library

Goal: turn the paywall-detection logic into a reusable standalone package.

### Planned scope

- Extract detection heuristics into a separate JavaScript library
- Publish the package to npm as `paywall-detect`
- Support other browser tools, extensions, and research projects

### Why this matters

- Makes detection logic easier to test in isolation
- Encourages external contributions and reuse
- Positions the repo as more than a single userscript

## Ongoing — Domain Expansion

Goal: keep widening site support without making maintenance chaotic.

### Planned scope

- Maintain a structured flow for domain requests
- Track requested sites in GitHub Discussions or a pinned issue
- Ask for example URLs, paywall type, and region-specific context

### Maintainer workflow

- Triage requests by reproducibility and demand
- Prefer small, reviewable additions to the supported-domain list
- Keep the Greasy Fork release and GitHub source in sync after domain updates

## Contributor Notes

If you want to help with any future milestone:

- Open an issue or Discussion describing the use case first
- Link the relevant milestone or roadmap section
- Keep PRs scoped to scaffolding, design, or one milestone at a time

This roadmap is a planning document and will evolve as the project matures.

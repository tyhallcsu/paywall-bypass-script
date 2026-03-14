# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

This changelog was reconstructed from the public Greasy Fork version history:
https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/versions

## [2.0.1] - 2026-03-14

### Added

- Public roadmap scaffolding for future browser-extension ports, the smart bypass engine, the community service registry, and the planned `paywall-detect` package
- A dedicated GitHub issue template for domain requests

### Changed

- Updated the userscript metadata to use the repository namespace and an archive-focused service description
- Refreshed the README and service-registry scaffold to match the live audited service set
- Added JSDoc coverage and clearer service-audit comments across the larger userscript helpers

### Removed

- Freedium, which no longer resolves reliably enough to stay in the active service list

### Fixed

- PaywallBuster launches now use the canonical `/articles/?article=` route
- The floating UI now refreshes correctly on SPA-style route changes without stacking delayed paywall checks
- The main action button now uses a clearer `Bypass Paywall` accessible label and a more reasonable floating z-index

### Security

- Revalidated the maintained service set against live HTTPS endpoints and removed the dead Freedium entry from the shipped catalog

## [2.0.0] - 2026-03-14

### Added

- Paywall auto-detection with a pulse animation and temporary "Paywall Detected" badge
- Default **Try All** action that opens the top 3 prioritized services
- Site-specific routing for domains such as Medium, WSJ, NYTimes, Washington Post, Bloomberg, FT, Reuters, and similar outlets
- Local-only reliability tracking with success/fail feedback, dropdown badges, and JSON export/import
- Keyboard shortcuts for the default bypass (`Alt+Shift+B`) and service menu (`Alt+Shift+M`)

### Changed

- Reworked the floating button into a split-button layout with grouped service categories
- Updated the userscript metadata and naming to reflect the current multi-service feature set
- Added cross-manager `GM_*` / `GM.*` compatibility wrappers plus `@noframes` and `@run-at document-idle`
- Improved accessibility with ARIA roles, keyboard navigation, dialog labeling, visible focus states, and touch-friendly sizing
- Extended paywall detection to search open Shadow DOM roots and mobile-safe viewport positions

### Removed

- Legacy references to dead or stale services such as 12ft.io, Google Cache, Yahoo Cache, Yandex Cache, and Bing Cache from the active service menu
- Duplicate and stale `@match` metadata entries, including the incorrect `ambito` pattern

### Fixed

- Safe URL validation before opening bypass targets
- Safer URL encoding for service launches, clipboard export, and related flows
- Greasemonkey / Tampermonkey / Violentmonkey storage and menu-command compatibility edge cases

## [1.4.1] - 2026-03-14

### Fixed

- Hardened userscript API compatibility across Tampermonkey, Violentmonkey, and Greasemonkey by adding cross-manager `GM_*` / `GM.*` wrappers
- Added `@noframes`, `@run-at document-idle`, and HTTPS metadata cleanup for safer execution
- Improved menu accessibility with ARIA roles, keyboard navigation, dialog labeling, and visible focus states
- Added safe-area-aware mobile positioning and minimum tap-target sizing for the floating UI
- Extended paywall auto-detection helpers to look through open Shadow DOM roots
- Validated service targets before opening them and tightened URL encoding for clipboard/export and service launch flows
- Cleaned stale `@match` metadata by removing duplicates and correcting the `ambito.com` pattern

## [1.4.0] - 2026-03-14

### Added

- Paywall auto-detection with button pulse and temporary "Paywall Detected" badge
- Default **Try All** action that opens the top 3 prioritized services
- Site-specific service routing for Medium-family domains, WSJ, NYTimes, Washington Post, Bloomberg, FT, Reuters, and similar paywalled outlets
- Local-only success/failure tracking with dropdown reliability badges
- Keyboard shortcuts for the default bypass (`Alt+Shift+B`) and service menu (`Alt+Shift+M`)
- Dark-mode-aware floating UI and JSON export/import for saved settings

### Changed

- Reworked the floating button into a split-button layout with grouped service categories
- Refreshed the service catalog around Archive.today, Archive.org, RemovePaywall, PaywallBuster, SMRY, Freedium, and SimilarWeb
- Updated the userscript metadata to a generic project name and a feature-focused description

## [1.3.0] - 2025-12-11

### Added

- Configurable floating-button toggle in the userscript manager menu
- Persistent floating-button visibility using `GM_getValue` and `GM_setValue`

### Changed

- Floating button can be disabled while keeping menu-command access available
- Public script description and screenshots were refreshed on Greasy Fork

## [1.2.7] - 2025-06-19

### Added

- Support for 50+ additional news and media domains, including Politico, MarketWatch, The Guardian, Axios, Vox, ProPublica, The Verge, Ars Technica, TechCrunch, Engadget, Gizmodo, Rolling Stone, Variety, The Intercept, and Crunchbase

### Changed

- Replaced the deprecated Google Cache flow with Archive.org / Wayback Machine
- Updated the right-click menu and floating dropdown to reflect the archive service change

## [1.2.6] - 2025-06-15

### Added

- Support for `forbes.pl`
- Support for `onet.pl`

## [1.2.5] - 2025-06-15

### Added

- Support for `cbsnews.com`, `espn.com`, `usatoday.com`, `bbc.co.uk`, `cnn.com`, `foxnews.com`, `nbcnews.com`, `washingtonpost.com`, and `google.com/news`

## [1.2.4] - 2025-05-21

### Added

- Support for `inkl.com`

## [1.2.3] - 2025-05-21

### Added

- Support for `insight.kontan.co.id`

## [1.2.2] - 2024-11-06

### Added

- Support for USA Today, Time, The Atlantic, American Banker, Japan Times, The Wall Street Journal, CNBC, Financial Post, Wired, Seeking Alpha, iPolitics, Discover, `faz.net`, `rp-online.de`, `spiegel.de`, `tagesspiegel.de`, `welt.de`, `wz.de`, `rp.pl`, `wyborcza.pl`, `tagesanzeiger.ch`, `elpais.com`, and `english.elpais.com`

## [1.2.1] - 2024-10-27

### Changed

- Updated the public script description and screenshots

## [1.2.0] - 2024-10-27

### Added

- Yandex Cache bypass option
- Yahoo Cache bypass option
- Bing Cache bypass option
- SimilarWeb lookup option

### Changed

- Updated the RemovePaywall URL structure for better compatibility
- Reorganized the menu and improved dropdown styling for desktop and mobile use

### Fixed

- Removed the non-working CachedView option
- Fixed URL encoding issues with some bypass services
- Fixed dropdown positioning issues on mobile devices

## [1.1.0] - 2024-10-27

### Added

- Mobile support with a touch-friendly dropdown menu
- Responsive styling and larger touch targets for smaller screens

### Changed

- Preserved all existing right-click menu options while expanding mobile usability

## [1.0.0] - 2024-05-22

### Added

- Initial public Greasy Fork release
- Right-click menu access for bypass and archive services
- Floating "Bypass Paywall" button for quick 12ft.io access
- Automatic 12ft.io banner cleanup and "Go Back" behavior on bypass pages

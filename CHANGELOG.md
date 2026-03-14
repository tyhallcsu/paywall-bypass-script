# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

This changelog was reconstructed from the public Greasy Fork version history:
https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/versions

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

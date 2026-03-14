# Paywall Bypass Script (Archive & Bypass Services)

> Privacy-first userscript for opening audited archive and bypass services on paywalled articles, with paywall detection, quick-try routing, and local-only reliability tracking.

[![Install on Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-Install-orange?style=flat-square)](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
[![Greasy Fork installs](https://img.shields.io/greasyfork/dt/495817?style=flat-square&label=installs)](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
[![Greasy Fork daily installs](https://img.shields.io/greasyfork/dd/495817?style=flat-square&label=daily%20installs)](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
[![GitHub stars](https://img.shields.io/github/stars/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/stargazers)
[![License](https://img.shields.io/github/license/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/commits/main)
[![Roadmap](https://img.shields.io/badge/Roadmap-view-blue)](ROADMAP.md)

## Overview

Paywall Bypass Script is a maintained desktop-and-mobile userscript that adds a floating button, quick menu, and keyboard shortcuts for opening the best available archive and bypass services on supported news pages. It is designed to stay lightweight, readable, and contributor-friendly while giving users a fast fallback when a paywall blocks access.

The primary public install page is [Greasy Fork](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com). This GitHub repository is the source of truth for development, documentation, release notes, and maintainer workflow.

Chrome Extension version coming soon. See [ROADMAP.md](ROADMAP.md) for the planned extension ports, smart-routing work, and community service registry direction.

## Quick Install

- Primary install: [Greasy Fork stable release](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
- Source install: [Raw GitHub userscript](https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js)
- Mobile install: Use [AdGuard](https://adguard.com/) userscript support on iOS or Android with the same raw GitHub URL

## Project Stats

Stats below reflect the public Greasy Fork listing on `2026-03-14`.

| Metric | Value |
| --- | --- |
| Total installs | 6,660 |
| Daily installs | 19 |
| Ratings | 12 total (`11` good, `1` okay) |
| Supported domain patterns | 232 `@match` entries |
| First published | May 2024 |
| License | MIT |
| Actively maintained | Yes |

## Features

- Paywall auto-detection that scans the page and briefly pulses the floating button when a likely paywall is present
- Default **Try All** action that opens the top 3 services in one click
- Site-aware routing that prioritizes Archive.today for WSJ / NYTimes, RemovePaywall for Washington Post, and SMRY for Reuters
- Grouped service menu with local reliability badges based on your own success/failure feedback
- Floating button visibility toggle stored locally with `GM_getValue` / `GM_setValue`
- Keyboard shortcuts: `Alt+Shift+B` for the default bypass and `Alt+Shift+M` for the service menu
- Dark-mode-aware UI that respects `prefers-color-scheme` and common host-site dark themes
- Export / import settings as JSON through the userscript manager menu
- No telemetry and no external API calls beyond opening the selected bypass services

## Project Links

- Greasy Fork page: [Paywall Bypass Script](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
- Raw install URL: [paywall-bypass.user.js](https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js)
- GitHub issues: [tyhallcsu/paywall-bypass-script/issues](https://github.com/tyhallcsu/paywall-bypass-script/issues)

## Services

### Bypass Services

- RemovePaywall
- PaywallBuster
- SMRY

### Archive Services

- Archive.today
- Archive.is
- Archive.ph
- Archive.org / Wayback Machine

### Analysis Tools

- SimilarWeb

## Supported Sites

The script currently ships with `232` supported `@match` patterns across major news, finance, technology, and regional publishers. That includes Bloomberg, WSJ, NYTimes, Washington Post, The Atlantic, Financial Times, Reuters, Fortune, Wired, Medium, BBC, CNN, Politico, Ars Technica, TechCrunch, and many more.

See the canonical Greasy Fork listing for the live supported-domain set:
[Greasy Fork listing](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)

## Installation

### Requirements

- [Tampermonkey](https://www.tampermonkey.net/) for Chrome, Firefox, Safari, and Edge
- [Greasemonkey](https://www.greasespot.net/) for Firefox
- [Violentmonkey](https://violentmonkey.github.io/) for Chrome and Firefox
- [AdGuard](https://adguard.com/) for mobile userscript support

### Install options

- Live release: [Install from Greasy Fork](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
- Source mirror: [Install from GitHub raw](https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js)

## Usage

### Quick Start

1. Open a supported article page.
2. Click **Try All** or press `Alt+Shift+B` to open the top services in new tabs.
3. Click the chevron button or press `Alt+Shift+M` to choose a specific service.
4. When you come back to the article tab, mark which service worked so the script can update your local reliability badges.

### Paywall Detection

- The script checks for common paywall markers such as `paywall`, `subscribe`, `premium`, `metered`, `piano`, `tinypass`, and `poool`
- If a likely paywall is detected, the floating button pulses and shows a brief **Paywall Detected** badge

### Local Reliability Tracking

- The script stores up to 100 local success/failure results
- Reliability percentages shown in the dropdown come from your own saved results
- All tracking is local-only and never transmitted anywhere

### Settings

- Use the userscript manager menu to hide or show the floating button
- Use **Export Settings** to copy your config and local stats as JSON
- Use **Import Settings** to restore the same setup on another browser or device
- Advanced users can reorder the default service priority in the `DEFAULT_SERVICE_ORDER` array near the top of [paywall-bypass.user.js](paywall-bypass.user.js)

## Browser Compatibility

- Minimum: Any browser that supports Tampermonkey, Violentmonkey, Greasemonkey, or a compatible userscript manager
- Chrome 109 on Windows 7: try Violentmonkey from the Chrome Web Store archive, or use Firefox ESR on Windows 7 instead
- The script uses browser-native APIs and local userscript storage only
- The **Try All** feature works best when the browser allows pop-ups for supported news sites

## Privacy

- No telemetry, analytics, or remote tracking
- No bundled third-party libraries or external runtime dependencies
- Preferences and reliability stats stay local in your userscript manager storage
- The only external requests the script triggers are the bypass or archive pages you explicitly open

## Changelog

Release history is documented in [CHANGELOG.md](CHANGELOG.md) and reconstructed from the public Greasy Fork version history:
[Greasy Fork version history](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/versions)

## Contributing

Bug reports, site requests, and pull requests are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md), and review the existing [Greasy Fork feedback page](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/feedback) before opening a new report.

## License

Released under the [MIT License](LICENSE).

## Author

**sharmanhall**
- [Greasy Fork profile](https://greasyfork.org/en/users/866731-sharmanhall)
- [GitHub profile](https://github.com/tyhallcsu)

## Support

If this project is useful to you, [star the repository](https://github.com/tyhallcsu/paywall-bypass-script/stargazers) and consider sharing broken-site reports through [CONTRIBUTING.md](CONTRIBUTING.md) so the service list stays current.

## Roadmap

Future milestones, extension plans, and contributor-facing roadmap details are documented in [ROADMAP.md](ROADMAP.md).

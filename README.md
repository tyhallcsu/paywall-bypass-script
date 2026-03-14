# Paywall Bypass Script

> Smart paywall helper userscript with auto-detection, quick-try routing, site-aware defaults, and local-only reliability tracking.

[![Install on Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-Install-orange?style=flat-square)](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
[![GitHub stars](https://img.shields.io/github/stars/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/stargazers)
[![License](https://img.shields.io/github/license/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/tyhallcsu/paywall-bypass-script?style=flat-square)](https://github.com/tyhallcsu/paywall-bypass-script/commits/main)
[![Roadmap](https://img.shields.io/badge/Roadmap-view-blue)](ROADMAP.md)

Paywall Bypass Script is a Tampermonkey/Greasemonkey userscript with 6,700+ installs and about 25 daily installs. The canonical public release is on Greasy Fork, while this repository tracks the source, documentation, and maintainer workflow.

Chrome Extension version coming soon. See [ROADMAP.md](ROADMAP.md) for the planned extension ports, smart-routing work, and community service registry direction.

## Source

- Greasy Fork page: [Paywall Bypass Script](https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com)
- Raw install URL: [paywall-bypass.user.js](https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js)
- GitHub issues: [tyhallcsu/paywall-bypass-script/issues](https://github.com/tyhallcsu/paywall-bypass-script/issues)

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

The script supports 140+ news and media domains, including Bloomberg, WSJ, NYTimes, Washington Post, The Atlantic, Financial Times, Reuters, Fortune, Wired, Medium, BBC, CNN, Politico, Ars Technica, TechCrunch, and many more.

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

## Roadmap

Future milestones, extension plans, and contributor-facing roadmap details are documented in [ROADMAP.md](ROADMAP.md).

# README visual assets

[← Project README](../README.md)

## Banner

`readme-banner.png` is original conceptual artwork generated with the built-in ImageGen tool on September 30, 2026. It is not a product screenshot.

Generation prompt:

```text
Use case: stylized-concept
Asset type: finished original GitHub README banner for Paywall Bypass Script, very wide 3:1 landscape, 1800x600 if possible.
Primary request: Sophisticated editorial illustration of an ivory newspaper sheet unfolding through a clean architectural opening in a dark ink-blue wall, with a single flowing warm amber ribbon tracing the path around the wall. Metaphor for finding another route to an article. Refined tactile paper-cut / editorial 3D aesthetic, crisp deliberate silhouettes, subtle paper texture, calm premium open-source project identity.
Composition: Large title occupying the left half, illustration on the right half. Generous safe margins on all sides. Strong legibility at GitHub README widths. Background opaque deep ink navy; paper ivory; accents warm amber and muted teal. Restrained depth and soft directional light. No gradient title card.
Text verbatim, only these words, on left in large confident ivory sans-serif typography, with Paywall Bypass on first line and Script on second: "Paywall Bypass" "Script".
Constraints: No logos, no badges, no statistics, no claims of guaranteed access, no padlocks or hacker iconography, no mock browser UI, no small text, no watermarks. Illustration is conceptual artwork, not a product screenshot.
```

## Service menu demo

`service-menu-demo.png` captures the unchanged `paywall-bypass.user.js` from v2.1.0 source commit `98a5e29` running in headless Chromium on a synthetic article fixture. The fixture supplies a demo page and in-memory userscript storage adapters. The menu is opened with `Alt+Shift+M` using fresh settings; no reliability results are seeded and no external service is opened.

The page behind the menu is illustrative demo content. The floating button and scrollable service menu are the script's actual UI. This capture does not verify third-party service availability or a browser extension build.

## Earlier presentation assets

The following assets from the earlier presentation update are retained for reference. The current project README uses `readme-banner.png` and `service-menu-demo.png`.

### Earlier banner

`repository-banner.jpg` is original conceptual artwork generated with the built-in OpenAI image tool on 2026-09-30,
then exported as an optimized JPEG. It is not a product screenshot or evidence that an article can be retrieved.

Prompt: “Create an original polished editorial GitHub repository banner, 3:1 wide landscape. Project title exact text:
PAYWALL BYPASS. Small subtitle: ARCHIVES · SERVICES · CHOICE. Deep ink navy, warm ivory typography, amber and muted teal.
Folded newspaper sheets transform into three branching paths leading to an archival file drawer, with halftone texture
and geometric navigation marks. Large editorial typography, generous margins, legible when small. No publisher or browser
logos, hacker imagery, fake interface or success statistics. Finished opaque banner artwork.”

### Interface capture

`service-menu.png` captures the unchanged `paywall-bypass.user.js` UI in headless Chromium at 1100 × 850 pixels.
The article background is an original local fixture at `example.test`; no publisher text or personal data is present.
Userscript storage, menu registration, clipboard and style APIs were shimmed. Outbound tab opens were intercepted,
and no archive or bypass service was contacted. This demonstrates the interface, not a real userscript-manager installation
or article retrieval. The menu was also exercised at 375px width.

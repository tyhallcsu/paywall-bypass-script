# Repository visuals

[← Project README](../README.md)

## Banner

`repository-banner.jpg` is original conceptual artwork generated with the built-in OpenAI image tool on 2026-09-30,
then exported as an optimized JPEG. It is not a product screenshot or evidence that an article can be retrieved.

Prompt: “Create an original polished editorial GitHub repository banner, 3:1 wide landscape. Project title exact text:
PAYWALL BYPASS. Small subtitle: ARCHIVES · SERVICES · CHOICE. Deep ink navy, warm ivory typography, amber and muted teal.
Folded newspaper sheets transform into three branching paths leading to an archival file drawer, with halftone texture
and geometric navigation marks. Large editorial typography, generous margins, legible when small. No publisher or browser
logos, hacker imagery, fake interface or success statistics. Finished opaque banner artwork.”

## Interface capture

`service-menu.png` captures the unchanged `paywall-bypass.user.js` UI in headless Chromium at 1100 × 850 pixels.
The article background is an original local fixture at `example.test`; no publisher text or personal data is present.
Userscript storage, menu registration, clipboard and style APIs were shimmed. Outbound tab opens were intercepted,
and no archive or bypass service was contacted. This demonstrates the interface, not a real userscript-manager installation
or article retrieval. The menu was also exercised at 375px width.

# Contributing

Thanks for helping improve Paywall Bypass Script.

The canonical public release is published on Greasy Fork:
https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com

Before opening a new GitHub issue, check the existing Greasy Fork feedback thread for duplicates and recent reports:
https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com/feedback

## Reporting a broken site

Open a GitHub issue and include:

- The full article URL
- Your browser and version
- Your userscript manager and version
- What you expected to happen
- What actually happened
- A screenshot if the failure is visual or inconsistent

## Adding a new supported domain

1. Add a new `@match` entry in `paywall-bypass.user.js`.
2. Keep the change focused on the smallest possible domain addition or fix.
3. Test the target site on a direct article URL.
4. Update `CHANGELOG.md` if the change is intended for release.

## Testing changes locally

1. Install a userscript manager such as Tampermonkey, Greasemonkey, or Violentmonkey.
2. Import or paste the contents of `paywall-bypass.user.js` into a new userscript.
3. Visit one or more supported article URLs and verify:
   - The floating button appears when enabled
   - The userscript manager menu commands are available
   - The selected service URLs open as expected
4. Compare behavior against the live Greasy Fork build when needed:
   https://greasyfork.org/en/scripts/495817-paywall-bypass-script-12ft-io-google-cache-paywallbuster-com

## Code style expectations

- Do not change script behavior unless the fix requires it
- Keep the userscript dependency-free and browser-native
- Preserve the metadata block format and naming patterns used by the published script
- Prefer small, reviewable patches
- Update documentation when user-facing behavior or supported domains change

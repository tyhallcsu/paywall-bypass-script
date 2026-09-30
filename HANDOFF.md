# HANDOFF — issue #9 (keep v1.3.0 identity)

Written 2026-09-30 when a session ran out of context. Trust `git log` / `gh` over this file.

## Decisions (from Tyler)

- **This repo (`tyhallcsu/paywall-bypass-script`) is the Greasy Fork 495817 source.** Greasy Fork is canonical.
- **Keep the v1.3.0 `@name` and `@namespace`** for every release. Don't rename.
- The private `tyhallcsu/paywall-userscript` repo (the "lawful helper" rewrite) is gone from GitHub (404). A local copy is at `~/Documents/GitHub/paywall-userscript`. Its Tampermonkey evidence: a changed `@name` installs as a second script (DUPLICATE), see `docs/COMPATIBILITY.md` there.

## Done on branch `fix/9-keep-v130-identity`

- `paywall-bypass.user.js` header: `@name` restored to `Paywall Bypass Script (12ft.io, Google Cache, PaywallBuster.com)`, `@namespace http://tampermonkey.net/`, `@updateURL`/`@downloadURL` pointed back at `update.greasyfork.org/scripts/495817/…`, version bumped to **2.1.1** (header + `SCRIPT_VERSION`).
- `archive/v1.3.0.user.js`: the v1.3.0 file as served by Greasy Fork. It's the identity baseline.
- `scripts/check-identity.mjs` (`npm run check`): fails if `@name`/`@namespace` differ from v1.3.0, if the update URLs aren't Greasy Fork, or if `SCRIPT_VERSION` doesn't match `@version`. Verified: passes on this branch, and fails with all 4 errors on v2.1.0 (`98a5e29`).
- `test/update-identity.mjs` (`npm run test:update-identity`): Tampermonkey harness using the real files. It installs v1.3.0, then updates to v2.1.0 (CONTROL, expect DUPLICATE) and to the working tree (FIX, expect IN_PLACE). **Not run yet.**
- Saved settings carry over: both v1.3.0 and v2 store the hide-button choice under `showFloatingButton`.

## Next steps, in order

1. Install the Playwright browser. The last attempt timed out after 600s: `TMPDIR=<writable dir> npx playwright install chromium` (needs chromium-1194 for @playwright/test 1.56.1).
2. Run: `TM_EXTENSION_PATH=/Users/tylerhall/Documents/GitHub/1337/test/extensions/tampermonkey TMPDIR=<writable dir> npm run test:update-identity -- --runs=2`. Expect CONTROL=DUPLICATE and FIX=IN_PLACE in both runs. Commit `docs/evidence/update-identity/result.json`.
3. Update the README. Line ~29 still says `@downloadURL`/`@updateURL` point to GitHub `main`, and the raw-GitHub install links now update from Greasy Fork. Add a short "Why the title still says 12ft.io" note. Add a `## [2.1.1]` CHANGELOG entry.
4. Optional: a GitHub Actions workflow running `npm run check` on PRs.
5. Mark the draft PR ready and squash-merge. Then #6 (remove dead PaywallBuster, publish to Greasy Fork) is unblocked.
6. Manual (Tyler): add the "title is historical" note to Greasy Fork "Additional info"; Violentmonkey is still untested.

## Gotchas

- **`gh` drifts to the `essremodel` account.** Run `gh auth switch -u tyhallcsu`, then check `gh api user --jq .login`, before every gh call.
- A hook blocks any Bash call containing `git commit`/`push` on `main`, including `git stash push`. Branch first.
- Commit identity: `16804423+tyhallcsu@users.noreply.github.com`.

## Open feedback issues (all `from-feedback`)

#4 Statista · #5 archive services to Greasy Fork · #6 dead PaywallBuster + publish (blocked by #9) · #7 per-service toggles · #8 AdGuard test · #9 identity (this work) · #10 thread replies (blocked by #6).

# Corrections & Non-Negotiables

<!-- No `paths` frontmatter: this file loads every session. It is the incident log.
     Append the abstracted rule after ANY correction from the user. Keep it lean;
     anything path-specific belongs in a scoped rule file next to this one. -->

Rules learned from actual corrections. These are binding.

## Always

- **pnpm only**, never npm or yarn. This project uses PNPM workspaces.
- **Latest stable package versions.** When adding a dependency, install the current stable release. Never pin an outdated version without an explicit, stated reason.
- **Error-checking protocol.** After finishing work on any file: (1) `pnpm tsc --noEmit`, (2) `pnpm lint`, (3) fix ALL errors before moving on. Never grep-filter the output, because pre-existing errors must stay visible so new ones aren't masked.
- **Screenshot verification.** After each meaningful UI change, screenshot and visually inspect it. Do not batch every change and check once at the end.
- **No em dashes anywhere.** See the Writing Style section of CLAUDE.md. This covers UI copy, translations, code comments, commit messages, docs, and chat responses.
- **Corrections go in THIS file**, not the auto-memory system. After any correction from the user, add the abstracted rule here (or to the scoped rule file it belongs to) immediately.
- **Code-review mindset.** Question whether the implementation is actually correct, push back on wrong requirements, prefer native or library solutions over reinventing, and check current best practices (context7, web) rather than trusting recall.

## Known traps

- **A wrong canonical origin is permanent damage.** Never paste a `*.vercel.app` URL as the site base to unblock a build. Full rule: `.claude/rules/deployment-urls.md`.
- **`tsc` + `lint` passing does not mean it works.** next-intl message caching, Prisma client staleness, and env-var inlining all survive a green typecheck. Drive the feature in the running app.
- **Read the port `pnpm dev` actually bound.** If 3000 is taken, Next silently moves to 3001, and screenshots of `localhost:3000` capture a different app. Check the `Local:` line before verifying anything.
- **Restart the dev server** after changing `messages/*.json`, the Prisma schema, or any `NEXT_PUBLIC_*` variable. A running server holds stale caches and will lie to you.
- **A dev 500 with `SyntaxError: Unexpected non-whitespace character after JSON` is a corrupted `.next/dev` cache**, not your code. Seen twice in `prerender-manifest.json`, once starting from a verified-clean cache: several routes compiling for the first time at once (the user's browser plus test scripts) write the manifest concurrently on Windows. Stop the server, delete `.next/dev`, restart, then warm routes **one at a time** (sequential `curl`) before any parallel browsing or screenshots. Find the culprit by JSON-parsing every file under `.next`. Don't restart when you don't need to: swapping an image under `assets/` is picked up live (static-import URLs are content-hashed).
- **Removing a project (or anything feeding `generateStaticParams`) also needs a dev restart.** The dev server keeps the old params list, so the deleted URL still answers 200 with the not-found UI (a soft 404) while never-existing URLs 404 correctly. Restart, then confirm the 404 with a real request.

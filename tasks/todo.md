# nikpav.gr portfolio build

Plan: dark cinematic portfolio for Nikos Pavlakos (Photo / Video) built in this Next.js repo.
Decisions: Pexels placeholders (swappable), mail-app contact form + Instagram DM, remove only the
starter's demo parts, Instagram linked everywhere (no live feed yet).

Open item: contact email and phone not provided yet (`lib/general/constants.ts`). The form and the
email/phone links render only once they are set.

## Setup
- [x] `pnpm install`, dev server on port 3100 (3000 is taken by another node process)
- [x] Media subagent 1: works photos (10 projects x 5, Pexels, one photographer per project, checked by eye)
- [x] Media subagent 2: page imagery + hero/showreel/CTA video (WebM + MP4, posters = first frames)

## Foundation
- [x] Brand tokens in `globals.css` (dark only), grain overlay, `color-scheme: dark`
- [x] Fonts: Sofia Sans + Sofia Sans Extra Condensed (latin + greek)
- [x] Dark only via static `<html className="dark">`; next-themes removed
- [x] SessionProvider moved to the admin layout (seeded with the server session)
- [x] `global.d.ts`: next-intl 4 `AppConfig` (keys and locales typed) + el/en parity guard
- [x] `lib/general/constants.ts` (SITE object)
- [x] Logo mark (transparent, cropped) + favicon.ico / icon.png / apple-icon.png (N inside the ring)
- [x] Route group `app/[locale]/(site)/` + layout, `loading.tsx`, `LoadingScreen`
- [x] Header (fixed, transparent to solid, EN/EL links, Instagram, mobile Sheet)
- [x] Footer (logo, nav, Instagram, contact, copyright, Made by Hexaigon)
- [x] Admin kept working: ThemeSwitcher removed, Google sign-in button, dead NextAuth `pages` removed

## Pages
- [x] Home: hero video + showreel dialog, Selected Works bento, What I Do, About preview, CTA
- [x] Works: hero, filter chips (links), editorial grid; category template; project template
- [x] About: hero, Who I Am (native Greek), My Philosophy, 6 services, CTA
- [x] Contact: hero, mail-app form (when an email is set) or channels + "what to include"

## SEO, polish, cleanup
- [x] `buildMetadata()`: canonical, hreflang (en, el, x-default), OG/Twitter on every page
- [x] Sitemap (38 URLs, hreflang, 110 image entries), robots (`/en/admin`, `/el/admin`)
- [x] JSON-LD: WebSite + Person + ProfessionalService, BreadcrumbList, CreativeWork
- [x] Branded 404 with a real 404 status
- [x] OG image: `public/og.jpg`, 1920x1080 capture of the home hero
- [x] `.env.template`: `NEXT_PUBLIC_SITE_URL=https://nikpav.gr`
- [x] Removed demo parts; imported images live in `assets/` (no double serving from `public/`)
- [x] Greek copy read through; no em/en dashes in any touched file (scan verified against a control)

## Verification
- [x] `pnpm tsc --noEmit` and `pnpm lint`: exit 0, nothing reported
- [x] `NEXT_PUBLIC_SITE_URL=https://nikpav.gr pnpm build`: 53 static pages, no errors or warnings
- [x] Screenshots: every page at 1440, phone (390, touch) and EN + EL
- [x] Driven: showreel dialog, language switch, nav from 3 pages, filters, mobile menu, contact mailto
- [x] No console errors, no `/api/auth` requests on public pages
- [x] sitemap.xml, robots.txt, head tags, JSON-LD read back; 0 images without alt on 38 pages

## Review

**Built:** the whole brief in Next.js (instead of WordPress/Elementor): Home, Works (+5 category pages,
+10 project pages), About, Contact, shared header/footer, EN + EL, all statically generated.

**Found and fixed while verifying:**
- Hero H1 is the LCP element (Chrome doesn't pick the full-bleed photo): the clipped slide-up reveal
  delayed it, so titles now paint on the first frame and only settle via transform.
- `notFound()` under the group's `loading.tsx` streamed a soft 404 (HTTP 200): catch-all and
  not-found moved above the loading boundary; unknown URLs now return 404.
- Client `NextIntlClientProvider` had no `timeZone` (ENVIRONMENT_FALLBACK during prerender): passed.
- Heading text read "WeddingLove stories" to screen readers/crawlers: real space between lines.
- `@theme inline` vars aren't emitted, so the display font silently fell back: utility references
  the next/font variable directly.
- shadcn CLI wrote `import { cn } from "cn"` and installed a stray `cn` npm package: fixed, removed.
- Media agent swapped 7 photos after the first copy (brand logos): re-synced, alt texts rewritten.
- Gallery stacked lone portraits; portraits now pair with the next portrait.

**Lessons recorded:** `.claude/rules/react-nextjs.md`, `ui-design.md`, `i18n.md`.

**Still open (needs Nikos):** email + phone; real photos/videos/showreel (YouTube id supported);
`NEXT_PUBLIC_SITE_URL` in Vercel. All media and project copy are clearly marked placeholders.

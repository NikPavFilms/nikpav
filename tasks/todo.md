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

# Category URL is the project page (2026-10-15)

A category with a single project (all five today) opens that project at `/works/<category>`
instead of a one-card grid. Old `/works/<category>/<slug>` URLs forward to it. A category that gains a
second project gets its grid and per-project URLs back automatically.

- [x] `getSoleProject` + `getProjectPath` in `lib/works/projects.ts`
- [x] Project page body into `components/works/project-view.tsx` (view + metadata)
- [x] Category page renders the project view for a sole project; slug page redirects
- [x] Links via `getProjectPath`: project card, next project, home selected works, sitemap
- [x] Filter chips that open a project scroll to the top
- [x] Breadcrumbs (visual + JSON-LD) without a duplicate category link
- [x] Verify: 200 on /works/<category> x 5 x 2 locales, old URLs forward (dev and build), screenshots

**Review:** all five categories open their project at `/works/<category>` (200, both locales).
Home tiles, Works cards, filter chips (now scroll to the top) and "next project" link there; the
sitemap lists each once. Old slug URLs forward with an instant meta refresh plus a canonical to the
new URL, in dev and in the static build: a real 308 is impossible under the `(site)` loading
boundary (rule added to `react-nextjs.md`). On the category URL the `<title>` stays the category's
search title.

# Weddings as a collection (2026-10-15)

- [x] `COLLECTIONS` (wedding): always a list, headed by its own cover (`wedding/cover.webp`) and
      line "Η δική σας ιστορία"; `getCategoryShowcase` feeds Home tiles, category hero and sitemap
- [x] First wedding: Παναγιώτης & Ελπίδα, `/works/wedding/panagiotis-elpida`, 22 photos (cover
      DSC08453, gallery in the order of the day, portraits paired), 90 MB of JPGs to 3.7 MB of WebP
- [x] Placeholder project `golden-hour-vows` removed (404 after a dev restart)
- [x] Verified: 200 on list and page in both locales, sitemap, Home tile, gallery rows, mobile hero
- [x] /works "All" shows one card per category (`getWorkCards`): the wedding card keeps the category
      photo and opens the list, so the photos there stay put (asked by Nikos)
- [x] Second wedding: Νίκος & Εύη (`nikos-evi`), newest first. A wedding with a film opens on it:
      names, then the film (1.16 GB clip to 74 MB, 1080p two-pass, poster at 3:20), then the photos;
      the card cover (DSC01993) also sits in the gallery. Verified: playback, list, /works unchanged
- [x] Third wedding: Δόμνα & Γιάννης (`domna-giannis`), newest first, 30 photos (wedding, their
      daughter's baptism, then a family shoot at sunset), cover DSC03147 (focus 40% for phones),
      120 MB of JPGs to 6 MB. Verified: list order, hero desktop and mobile, gallery, /works unchanged
- [x] Fourth wedding: Έλενα & Αλέξανδρος (`elena-alexandros`), newest first, 18 photos (wedding and
      their son's baptism), cover DSC09042 (focus 27% keeps the groom on phones), 96 MB to 5.6 MB.
      Verified: list order, hero desktop and mobile, gallery pairs and lone closer, /works unchanged
- [x] Fifth wedding: Στέλλα & Μάριος (`stella-marios`), newest first, 37 photos from two cameras
      ordered by capture time (prep, ceremony, their daughter's baptism, LOVE sign, party), cover
      DSC01254, 185 MB to 12 MB. Gallery: squares now pair like portraits (`isUpright`, < 6:5), and a
      pair's columns follow each photo's ratio so mixed shapes end level (was a 61 px gap)
- [x] Sixth wedding: Νόρα & Σπύρος (`nora-spyros`), newest first, 44 photos (groom prep, bride prep,
      church, first dance in smoke, then the beach and sunset shoot), cover DSC01119 (focus 22%),
      201 MB to 9.7 MB
- [x] Έλενα & Αλέξανδρος: new cover DSC09803 (the couple and their baby, both faces show on phones,
      asked by Nikos); the old cover DSC09042 joins the gallery at its time of day
- [x] Seventh wedding: Ελευθερία & Δημήτρης (`eleftheria-dimitris`), 12 photos, cover DSC02104
      (focus 45% so both faces show on phones), 214 MB to 4.4 MB
- [x] Wedding order set by Nikos: Νόρα & Σπύρος, Στέλλα & Μάριος, Νίκος & Εύη, Παναγιώτης & Ελπίδα,
      Δόμνα & Γιάννης, Έλενα & Αλέξανδρος, Ελευθερία & Δημήτρης (last). No more "newest first".
- [x] Eighth wedding: Γαβριέλα & Χρήστος (`gavriela-christos`), last as asked, 16 photos (civil
      wedding), 57 MB to 3.3 MB. Cover is a portrait (DSC05055, exported 2560 wide, focus 50% 15%):
      the only couple landscape split them on phones, and the BW embrace put the title over the
      bride's smile on desktop. Check the title block against faces, not just the crop.
- [x] Real estate page: 27 photos from seven shoots (newest first, the 2026-06 flat leads) plus the
      Athali Events & Weddings venue film (166 MB to 42 MB, poster at 1:14) placed after photo 13
      via the new `afterPhoto` film option; the plant and anchor-clock portraits pair. Cover unchanged.
- [x] Real estate photos smaller (asked by Nikos): `compactGallery` sets every two photos side by
      side (664x443 each on desktop instead of full width), mixed shapes level; the film stays full
      width; phones unchanged; weddings unchanged
- [x] Social: seven new reels (biggie promo, discoteca, vinegret, το μυστικό, s05, s4, delfinia; 1.4 GB
      to 89 MB at 720p, posters from bright frames) added first. Each reel shape now has its own grid
      (9:16 four across so a whole reel fits on screen, 4:5 three across): 16 + 3 fill even rows.
- [x] Social photos smaller too (asked by Nikos): compact galleries now fill rows by shape (a row
      closes at a ratio sum of 1.9: three portraits 437x656, two landscapes 664x443, portrait plus
      landscape), a short last row keeps the height of the row above, `sizes` follow each column.
      Real estate looks the same; weddings unchanged; reels unchanged.

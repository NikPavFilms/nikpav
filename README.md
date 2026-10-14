# nikpav.gr

Portfolio site for **Nikos Pavlakos · Photo & Video**: a dark, cinematic, bilingual (English / Greek)
site with Home, Works (filterable, with a page per category and per project), About and Contact.

Built with Next.js 16 (App Router, static generation), next-intl, Tailwind CSS 4, shadcn/ui and
framer-motion. Every public page is pre-rendered at build time.

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3000 (Next picks another port if 3000 is busy: read the "Local:" line)
pnpm lint
pnpm tsc --noEmit
pnpm build          # needs NEXT_PUBLIC_SITE_URL, see "Deploy"
```

pnpm only. Restart `pnpm dev` after editing `messages/*.json`: next-intl caches them.

## Editing content

### Contact details and socials

`lib/general/constants.ts` holds the `SITE` object: name, Instagram, TikTok, optional YouTube, **email** and
**phone**. The contact form, plus the email and phone links in the footer and on Contact, only appear
once `email` / `phone` are filled in. The form needs no backend: it opens the visitor's email app with
the inquiry pre-filled to that address.

### Text and translations

All copy lives in `messages/en.json` and `messages/el.json`. Both files must have the same keys
(`pnpm tsc --noEmit` fails if Greek is missing one). Write Greek in normal sentence case: titles are
capitalised by CSS, which also drops the accents correctly.

### Projects (Works)

The photos currently on the site are **free-licence placeholders** (Pexels, Mixkit) standing in for
real work. Replace them project by project:

1. Put the photos in `assets/images/works/<category>/<slug>/` as `01.webp`, `02.webp`, ... (`01` is
   the cover, preferably landscape; the others form the gallery and keep their own aspect ratio).
   Long edge around 2500px is plenty.
2. Edit the matching entry in `lib/works/projects.ts`: title, summary, description, location and alt
   text, each in English and Greek. Optionally add a film: `{ type: "youtube", id: "..." }`.
3. Categories are fixed: `social`, `wedding`, `baptism`, `real-estate`, `production`
   (`lib/works/categories.ts`). The first project of each category supplies its cover on Home and on
   the category page, unless `CATEGORY_COVERS` in `lib/works/projects.ts` sets a dedicated one
   (stored as `assets/images/works/<category>/cover.webp`).

Adding a project is the same: a new folder plus a new entry. Its pages, the sitemap and the filters
pick it up automatically.

### Page photos and video

| File | Used for |
| --- | --- |
| `assets/images/site/hero-poster.webp` | Home hero (shown until the video plays; must match the video's first frame) |
| `public/images/videos/hero.webm` / `hero.mp4` | Home hero loop (720p, muted, no audio, a few MB) |
| `public/images/videos/showreel.mp4` | "Watch showreel" dialog. Or set `SITE.showreel` to a YouTube id |
| `assets/images/site/cta-poster.webp`, `public/images/videos/cta.*` | "Let's work together" banner |
| `assets/images/site/home-about.webp` | About preview on Home |
| `assets/images/site/about-hero.webp`, `about-portrait.webp`, `philosophy.webp` | About page |
| `assets/images/site/works-hero.webp`, `contact-hero.webp` | Works and Contact heroes |

When you swap in photos of yourself, also update the alt texts under `Alt` in both message files.

### Logo and icons

`public/images/logo.png` is the source logo. `assets/images/logo-mark.png` (transparent, cropped) and
`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` (the script "N" inside the brush ring) were
derived from it.

## Deploy (Vercel)

1. Set `NEXT_PUBLIC_SITE_URL=https://nikpav.gr` in the Vercel project (Production) and redeploy.
   Never use the `*.vercel.app` URL: it ends up in the sitemap, canonical links and share tags. The
   build fails on purpose when the variable is missing.
2. Point `nikpav.gr` at the deployment (apex domain; redirect `www` to it).
3. The admin area (`/en/admin`) is optional and needs the NextAuth, Google and database variables
   from `.env.template`. The public site works without them.

## SEO

- Canonical and `hreflang` (en, el, x-default) on every page, OpenGraph/Twitter cards (`public/og.jpg`).
- `sitemap.xml` lists every page in both languages, including the photos on each page.
- JSON-LD: WebSite, Person and ProfessionalService on Home; BreadcrumbList and CreativeWork on works pages.

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/general/site-url";
import { routing } from "@/lib/i18n/routing";
import { CATEGORY_SLUGS } from "@/lib/works/categories";
import { getCategoryShowcase, getProjectPath, getSoleProject, PROJECTS } from "@/lib/works/projects";
import type { ProjectImage } from "@/lib/works/types";

interface SitemapRoute {
  path: string;
  priority: number;
  images?: ProjectImage[];
}

const STATIC_ROUTES: SitemapRoute[] = [
  { path: "", priority: 1 },
  { path: "/works", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

// Every public URL in every locale, with hreflang alternates, plus the photos on each page
// (image sitemap) so the work can surface in image search.
const sitemap = (): MetadataRoute.Sitemap => {
  const routes: SitemapRoute[] = [
    ...STATIC_ROUTES,
    // A category with a single project is listed once, as that project's page.
    ...CATEGORY_SLUGS.filter((slug) => !getSoleProject(slug)).map((slug) => ({
      path: `/works/${slug}`,
      priority: 0.8,
      images: [getCategoryShowcase(slug).cover],
    })),
    ...PROJECTS.map((project) => ({
      path: getProjectPath(project),
      priority: getSoleProject(project.category) ? 0.8 : 0.6,
      images: [project.cover, ...project.gallery],
    })),
  ];

  return routes.flatMap(({ path, priority, images }) => {
    const languages = {
      ...Object.fromEntries(routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])),
      "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
    };

    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
      ...(images && { images: images.map((image) => `${SITE_URL}${image.src.src}`) }),
    }));
  });
};

export default sitemap;

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/general/site-url";
import { routing } from "@/lib/i18n/routing";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    // The admin lives under the locale prefix (/en/admin), so list it per locale.
    disallow: ["/api/", ...routing.locales.map((locale) => `/${locale}/admin`)],
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;

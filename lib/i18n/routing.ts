import { defineRouting } from "next-intl/routing";

export const SUPPORTED_LOCALES = ["en", "el"] as const;

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES, 
  defaultLocale: SUPPORTED_LOCALES[0],
  localeDetection: true,
  // hreflang comes from page metadata and the sitemap (absolute URLs via SITE_URL), so the
  // middleware must not send its own `Link` header with a conflicting x-default.
  alternateLinks: false,
});
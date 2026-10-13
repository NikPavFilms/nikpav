import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/lib/i18n/routing";

/** Share image: a 1920x1080 capture of the home page hero. */
const OG_IMAGE = { url: "/og.jpg", width: 1920, height: 1080 };

const OG_LOCALES: Record<Locale, string> = { en: "en_US", el: "el_GR" };

interface BuildMetadataOptions {
  locale: Locale;
  /** Path without the locale prefix: "" for home, "/works", "/works/wedding". */
  path: string;
  title: string;
  description: string;
  /** Use the title as-is instead of the "%s | Nikos Pavlakos" template (home). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

// Every page's metadata goes through here, so canonical, hreflang and share tags never drift.
// Setting `openGraph` replaces the parent's object entirely, so the image is always explicit.
export const buildMetadata = async ({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
  type = "website",
}: BuildMetadataOptions): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const languages = Object.fromEntries(routing.locales.map((code) => [code, `/${code}${path}`]));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...languages, "x-default": `/${routing.defaultLocale}${path}` },
    },
    openGraph: {
      type,
      siteName: t("siteName"),
      title,
      description,
      url: `/${locale}${path}`,
      locale: OG_LOCALES[locale],
      alternateLocale: routing.locales.filter((code) => code !== locale).map((code) => OG_LOCALES[code]),
      images: [{ ...OG_IMAGE, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
};

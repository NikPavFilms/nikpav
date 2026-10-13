import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "./routing";

/**
 * Every layout, page and generateMetadata starts here: the `[locale]` param arrives as a plain
 * string, so validate it (404 otherwise), register it for static rendering and return it typed.
 */
export const setupPageLocale = async (params: Promise<{ locale: string }>): Promise<Locale> => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return locale;
};

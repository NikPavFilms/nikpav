import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import { getMessages, getTimeZone, getTranslations } from "next-intl/server";

import { Providers } from "@/components/providers";
import { SITE } from "@/lib/general/constants";
import { SITE_URL } from "@/lib/general/site-url";
import { setupPageLocale } from "@/lib/i18n/locale";
import { routing } from "@/lib/i18n/routing";
import { BaseLayoutProps, BasePageProps } from "@/types/page-props";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin", "greek"],
  display: "swap",
});

const sofiaDisplay = Sofia_Sans_Extra_Condensed({
  variable: "--font-sofia-display",
  subsets: ["latin", "greek"],
  display: "swap",
});

// Only the namespaces that client components read are sent to the browser.
const CLIENT_NAMESPACES = ["Nav", "Common", "Showreel", "Contact", "Categories"] as const;

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("defaultTitle"), template: `%s | ${t("siteName")}` },
    description: t("defaultDescription"),
    applicationName: t("siteName"),
    authors: [{ name: SITE.name, url: SITE.instagram.url }],
    creator: SITE.name,
    formatDetection: { telephone: false, email: false, address: false },
  };
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const locale = await setupPageLocale(params);
  const messages = await getMessages();
  const timeZone = await getTimeZone();
  const clientMessages = Object.fromEntries(CLIENT_NAMESPACES.map((namespace) => [namespace, messages[namespace]]));

  return (
    <html lang={locale} className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${sofiaSans.variable} ${sofiaDisplay.variable} font-sans antialiased`}>
        <Providers messages={clientMessages} locale={locale} timeZone={timeZone}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;

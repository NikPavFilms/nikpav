import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import aboutHero from "@/assets/images/site/about-hero.webp";
import { Philosophy } from "@/components/about/philosophy";
import { ServicesGrid } from "@/components/about/services-grid";
import { WhoIAm } from "@/components/about/who-i-am";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: "/about",
    title: t("about.title"),
    description: t("about.description"),
  });
};

const AboutPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations("About.hero");
  const tNav = await getTranslations("Nav");
  const tAlt = await getTranslations("Alt");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("about"), path: "/about" },
        ])}
      />
      <PageHero
        image={aboutHero}
        imageAlt={tAlt("aboutHero")}
        eyebrow={t("eyebrow")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={t("tagline")}
        height="screen"
        grayscale
        focus="70% center"
      />
      <WhoIAm />
      <Philosophy />
      <ServicesGrid />
      <CtaBanner />
    </>
  );
};

export default AboutPage;

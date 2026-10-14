import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AboutPreview } from "@/components/home/about-preview";
import { HomeHero } from "@/components/home/home-hero";
import { SelectedWorks } from "@/components/home/selected-works";
import { WhatIDo } from "@/components/home/what-i-do";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/site/cta-banner";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteGraph } from "@/lib/seo/schema";
import { CATEGORY_SLUGS } from "@/lib/works/categories";
import { getCategoryLeads } from "@/lib/works/projects";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: "",
    title: t("home.title"),
    description: t("home.description"),
    absoluteTitle: true,
  });
};

const HomePage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations("Metadata");
  const tCategories = await getTranslations("Categories");

  return (
    <>
      <JsonLd
        data={siteGraph({
          locale,
          localName: t("siteName"),
          jobTitle: t("jobTitle"),
          description: t("defaultDescription"),
          services: CATEGORY_SLUGS.map((slug) => tCategories(`${slug}.seoTitle`)),
        })}
      />
      <HomeHero />
      <SelectedWorks locale={locale} leads={getCategoryLeads()} />
      <WhatIDo />
      <AboutPreview />
      <CtaBanner />
    </>
  );
};

export default HomePage;

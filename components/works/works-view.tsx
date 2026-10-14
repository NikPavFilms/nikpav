import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import worksHero from "@/assets/images/site/works-hero.webp";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { CategoryFilter } from "@/components/works/category-filter";
import { ProjectGrid } from "@/components/works/project-grid";
import { breadcrumbSchema } from "@/lib/seo/schema";
import type { CategorySlug } from "@/lib/works/categories";
import { getCategoryCounts, getCategoryLead, getProjects, PROJECTS } from "@/lib/works/projects";

interface WorksViewProps {
  locale: Locale;
  /** Omitted on /works (all projects). */
  category?: CategorySlug;
}

// Shared by /works and /works/<category>: same template, its own hero, H1 and data.
export const WorksView = async ({ locale, category }: WorksViewProps) => {
  const t = await getTranslations("Works");
  const tNav = await getTranslations("Nav");
  const tCategories = await getTranslations("Categories");
  const tAlt = await getTranslations("Alt");
  const projects = getProjects(category);
  const lead = category && getCategoryLead(category);

  const crumbs = [
    { name: tNav("home"), path: "" },
    { name: tNav("works"), path: "/works" },
    ...(category ? [{ name: tCategories(`${category}.label`), path: `/works/${category}` }] : []),
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, crumbs)} />
      {lead ? (
        // The lead project's cover and title stand for the category, as on Home.
        <PageHero
          image={lead.cover.src}
          imageAlt={lead.cover.alt[locale]}
          focus={lead.cover.focus}
          eyebrow={t("categoryEyebrow", { category: tCategories(`${lead.category}.label`) })}
          titleLines={[tCategories(`${lead.category}.label`), lead.title[locale]]}
          description={tCategories(`${lead.category}.description`)}
        />
      ) : (
        <PageHero
          image={worksHero}
          imageAlt={tAlt("worksHero")}
          // Crop the sky, not the stage and crowd in the lower half.
          focus="50% 70%"
          eyebrow={t("hero.eyebrow")}
          titleLines={[t("hero.title")]}
          description={t("hero.description")}
        />
      )}
      <CategoryFilter active={category} counts={getCategoryCounts()} total={PROJECTS.length} />
      <section aria-label={t("projectsCount", { count: projects.length })} className="container-site py-10 md:py-14">
        <ProjectGrid projects={projects} locale={locale} />
      </section>
      <CtaBanner />
    </>
  );
};

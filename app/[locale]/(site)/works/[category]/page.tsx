import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { getProjectMetadata, ProjectView } from "@/components/works/project-view";
import { WorksView } from "@/components/works/works-view";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { CATEGORY_SLUGS, isCategorySlug } from "@/lib/works/categories";
import { getSoleProject } from "@/lib/works/projects";

interface CategoryPageProps {
  params: Promise<{ locale: string; category: string }>;
}

// Only the five known categories exist; anything else is a 404.
export const dynamicParams = false;

export const generateStaticParams = () => CATEGORY_SLUGS.map((category) => ({ category }));

export const generateMetadata = async ({ params }: CategoryPageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const { category } = await params;
  if (!isCategorySlug(category)) notFound();

  const soleProject = getSoleProject(category);
  if (soleProject) return getProjectMetadata({ project: soleProject, locale });

  const t = await getTranslations({ locale, namespace: "Categories" });

  return buildMetadata({
    locale,
    path: `/works/${category}`,
    title: t(`${category}.seoTitle`),
    description: t(`${category}.seoDescription`),
  });
};

// A category with a single project shows that project here instead of a one-card grid.
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const locale = await setupPageLocale(params);
  const { category } = await params;
  if (!isCategorySlug(category)) notFound();

  const soleProject = getSoleProject(category);
  if (soleProject) return <ProjectView project={soleProject} locale={locale} />;

  return <WorksView locale={locale} category={category} />;
};

export default CategoryPage;

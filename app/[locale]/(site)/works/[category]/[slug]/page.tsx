import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectMetadata, ProjectView } from "@/components/works/project-view";
import { setupPageLocale } from "@/lib/i18n/locale";
import { permanentRedirect } from "@/lib/i18n/navigation";
import { getProject, getProjectPath, getSoleProject, PROJECTS } from "@/lib/works/projects";

interface ProjectPageProps {
  params: Promise<{ locale: string; category: string; slug: string }>;
}

// A page sets params for both its dynamic segments; the locale comes from the [locale] layout.
// Every project keeps its slug URL, so links to a category's only project still land on it.
export const dynamicParams = false;

export const generateStaticParams = () => PROJECTS.map(({ category, slug }) => ({ category, slug }));

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const { category, slug } = await params;
  const project = getProject(category, slug);
  if (!project) notFound();

  return getProjectMetadata({ project, locale });
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const locale = await setupPageLocale(params);
  const { category, slug } = await params;
  const project = getProject(category, slug);
  if (!project) notFound();
  // A category's only project lives at /works/<category>.
  if (getSoleProject(project.category)) permanentRedirect({ href: getProjectPath(project), locale });

  return <ProjectView project={project} locale={locale} />;
};

export default ProjectPage;

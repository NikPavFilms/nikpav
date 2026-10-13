import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/site/cta-banner";
import { Eyebrow } from "@/components/site/eyebrow";
import { PageHero } from "@/components/site/page-hero";
import { NextProject } from "@/components/works/next-project";
import { ProjectFilm } from "@/components/works/project-film";
import { ProjectGallery } from "@/components/works/project-gallery";
import { setupPageLocale } from "@/lib/i18n/locale";
import { Link } from "@/lib/i18n/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, creativeWorkSchema } from "@/lib/seo/schema";
import { getNextProject, getProject, PROJECTS } from "@/lib/works/projects";

interface ProjectPageProps {
  params: Promise<{ locale: string; category: string; slug: string }>;
}

// A page sets params for both its dynamic segments; the locale comes from the [locale] layout.
export const dynamicParams = false;

export const generateStaticParams = () => PROJECTS.map(({ category, slug }) => ({ category, slug }));

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const { category, slug } = await params;
  const project = getProject(category, slug);
  if (!project) notFound();

  return buildMetadata({
    locale,
    path: `/works/${project.category}/${project.slug}`,
    title: project.title[locale],
    // The full description (about 150-200 chars) makes a better search snippet than the one-line summary.
    description: project.description[locale],
    type: "article",
  });
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const locale = await setupPageLocale(params);
  const { category, slug } = await params;
  const project = getProject(category, slug);
  if (!project) notFound();

  const t = await getTranslations("Project");
  const tNav = await getTranslations("Nav");
  const tCategories = await getTranslations("Categories");

  const categoryLabel = tCategories(`${project.category}.label`);
  const path = `/works/${project.category}/${project.slug}`;
  const title = project.title[locale];
  const meta = [
    { label: t("category"), value: categoryLabel },
    { label: t("location"), value: project.location[locale] },
    { label: t("services"), value: project.services.map((service) => t(service)).join(" · ") },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("works"), path: "/works" },
          { name: categoryLabel, path: `/works/${project.category}` },
          { name: title, path },
        ])}
      />
      <JsonLd
        data={creativeWorkSchema({
          locale,
          path,
          name: title,
          description: project.description[locale],
          genre: tCategories(`${project.category}.seoTitle`),
          images: [project.cover, ...project.gallery].map((image) => image.src.src),
        })}
      />

      <PageHero
        image={project.cover.src}
        imageAlt={project.cover.alt[locale]}
        focus={project.cover.focus}
        eyebrow={categoryLabel}
        titleLines={[title]}
        description={project.summary[locale]}
        height="screen"
      />

      <section className="container-site grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <Reveal className="md:col-span-7">
          <nav aria-label={t("breadcrumb")}>
            <ol className="eyebrow flex flex-wrap items-center gap-2 text-muted-foreground">
              <li>
                <Link href="/works" className="cursor-pointer transition-colors duration-300 hover:text-foreground">
                  {tNav("works")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`/works/${project.category}`}
                  className="cursor-pointer transition-colors duration-300 hover:text-foreground"
                >
                  {categoryLabel}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-foreground">
                {title}
              </li>
            </ol>
          </nav>
          <p className="mt-10 text-2xl leading-relaxed text-foreground/90 md:text-3xl md:leading-snug">
            {project.description[locale]}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:self-end">
          <dl className="divide-y divide-border border-y border-border">
            {meta.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-6 py-5">
                <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                <dd className="text-right">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {project.film && (
        <section aria-labelledby="film-title" className="container-site pb-16 md:pb-24">
          <Eyebrow as="h2" id="film-title" className="mb-6">
            {t("theFilm")}
          </Eyebrow>
          <ProjectFilm film={project.film} title={title} />
        </section>
      )}

      <section aria-label={t("gallery")} className="container-site pb-24 md:pb-32">
        <ProjectGallery images={project.gallery} locale={locale} />
      </section>

      <NextProject project={getNextProject(project)} locale={locale} />
      <CtaBanner />
    </>
  );
};

export default ProjectPage;

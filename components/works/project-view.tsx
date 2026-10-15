import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/site/cta-banner";
import { Eyebrow } from "@/components/site/eyebrow";
import { PageHero } from "@/components/site/page-hero";
import { NextProject } from "@/components/works/next-project";
import { FilmFigure, filmKey } from "@/components/works/project-film";
import { ProjectGallery } from "@/components/works/project-gallery";
import { cn } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, creativeWorkSchema } from "@/lib/seo/schema";
import { getNextProject, getProjectPath, getSoleProject, isCollection } from "@/lib/works/projects";
import type { Project } from "@/lib/works/types";

interface ProjectViewProps {
  project: Project;
  locale: Locale;
}

/** True when the project is its category's page (/works/<category>), so it has no category crumb. */
const isCategoryPage = (project: Project) => getSoleProject(project.category) === project;

export const getProjectMetadata = async ({ project, locale }: ProjectViewProps): Promise<Metadata> => {
  const tCategories = await getTranslations({ locale, namespace: "Categories" });

  return buildMetadata({
    locale,
    path: getProjectPath(project),
    // On the category's URL, the category's search title keeps ranking for the service.
    title: isCategoryPage(project) ? tCategories(`${project.category}.seoTitle`) : project.title[locale],
    // The full description (about 150-200 chars) makes a better search snippet than the one-line summary.
    description: project.description?.[locale] ?? tCategories(`${project.category}.seoDescription`),
    type: "article",
  });
};

// A project's page, served at /works/<category>/<slug>, or at /works/<category> when it is the
// category's only project.
export const ProjectView = async ({ project, locale }: ProjectViewProps) => {
  const t = await getTranslations("Project");
  const tNav = await getTranslations("Nav");
  const tCategories = await getTranslations("Categories");

  const categoryLabel = tCategories(`${project.category}.label`);
  const categoryPath = `/works/${project.category}`;
  const showCategoryCrumb = !isCategoryPage(project);
  const path = getProjectPath(project);
  const title = project.title[locale];
  const meta = [
    { label: t("category"), value: categoryLabel },
    { label: t("location"), value: project.location[locale] },
    { label: t("services"), value: project.services.map((service) => t(service)).join(" · ") },
  ];
  // A wedding (any collection's project) with a film opens on it, under the names. Films with
  // `afterPhoto` sit among the gallery photos. The rest: landscape films run full width, portrait
  // reels share a grid below them.
  const galleryFilms = (project.films ?? []).filter((film) => film.afterPhoto !== undefined);
  const sectionFilms = (project.films ?? []).filter((film) => film.afterPhoto === undefined);
  const leadFilm = isCollection(project.category) ? sectionFilms.find((film) => !film.aspect) : undefined;
  const films = sectionFilms.filter((film) => film !== leadFilm);
  const wideFilms = films.filter((film) => !film.aspect);
  const reels = films.filter((film) => film.aspect);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("works"), path: "/works" },
          ...(showCategoryCrumb ? [{ name: categoryLabel, path: categoryPath }] : []),
          { name: title, path },
        ])}
      />
      <JsonLd
        data={creativeWorkSchema({
          locale,
          path,
          name: title,
          description: project.description?.[locale] ?? tCategories(`${project.category}.seoDescription`),
          genre: tCategories(`${project.category}.seoTitle`),
          images: [project.cover, ...project.gallery].map((image) => image.src.src),
        })}
      />

      {leadFilm ? (
        <section className="container-site pt-32 md:pt-40">
          <Eyebrow className="motion-safe:animate-rise">{categoryLabel}</Eyebrow>
          {/* The title is the LCP element: visible on the first frame, it only settles into place. */}
          <h1 className="title-display mt-6 text-[clamp(3rem,7vw,7rem)] motion-safe:animate-settle">{title}</h1>
          {project.summary && (
            <p className="mt-6 max-w-lg text-lg text-foreground/80 md:text-xl">{project.summary[locale]}</p>
          )}
          <div className="mt-10 md:mt-14">
            <FilmFigure film={leadFilm} fallbackTitle={title} />
          </div>
        </section>
      ) : (
        <PageHero
          image={project.cover.src}
          imageAlt={project.cover.alt[locale]}
          focus={project.cover.focus}
          eyebrow={categoryLabel}
          titleLines={[title]}
          description={project.summary?.[locale]}
          height="screen"
        />
      )}

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
              {showCategoryCrumb && (
                <>
                  <li>
                    <Link
                      href={categoryPath}
                      className="cursor-pointer transition-colors duration-300 hover:text-foreground"
                    >
                      {categoryLabel}
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                </>
              )}
              <li aria-current="page" className="text-foreground">
                {title}
              </li>
            </ol>
          </nav>
          {project.description && (
            <p className="mt-10 text-2xl leading-relaxed text-foreground/90 md:text-3xl md:leading-snug">
              {project.description[locale]}
            </p>
          )}
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

      {films.length > 0 && (
        <section aria-labelledby="film-title" className="container-site pb-16 md:pb-24">
          <Eyebrow as="h2" id="film-title" className="mb-6">
            {films.length > 1 ? t("theFilms") : t("theFilm")}
          </Eyebrow>
          {wideFilms.length > 0 && (
            <div className="grid gap-12 md:gap-16">
              {wideFilms.map((film) => (
                <FilmFigure key={filmKey(film)} film={film} fallbackTitle={title} />
              ))}
            </div>
          )}
          {reels.length > 0 && (
            <div className={cn("grid grid-cols-2 items-start gap-3 md:grid-cols-3 md:gap-4", wideFilms.length > 0 && "mt-12 md:mt-16")}>
              {reels.map((film) => (
                <FilmFigure key={filmKey(film)} film={film} fallbackTitle={title} />
              ))}
            </div>
          )}
        </section>
      )}

      {project.gallery.length > 0 && (
        <section aria-label={t("gallery")} className="container-site pb-24 md:pb-32">
          <ProjectGallery images={project.gallery} films={galleryFilms} filmTitle={title} locale={locale} />
        </section>
      )}

      <NextProject project={getNextProject(project)} locale={locale} />
      <CtaBanner />
    </>
  );
};

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Eyebrow } from "@/components/site/eyebrow";
import { Link } from "@/lib/i18n/navigation";
import { getProjectPath } from "@/lib/works/projects";
import type { Project } from "@/lib/works/types";

export const NextProject = async ({ project, locale }: { project: Project; locale: Locale }) => {
  const t = await getTranslations("Project");
  const tCategories = await getTranslations("Categories");

  return (
    <Link
      href={getProjectPath(project)}
      className="group relative isolate block h-[70svh] min-h-120 cursor-pointer overflow-hidden bg-ink"
    >
      <Image
        src={project.cover.src}
        alt={project.cover.alt[locale]}
        fill
        sizes="100vw"
        placeholder="blur"
        style={{ objectPosition: project.cover.focus }}
        className="-z-10 object-cover opacity-70 transition-all duration-[1400ms] ease-cinematic group-hover:scale-[1.04] group-hover:opacity-90"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/30 to-ink/40" />
      <div className="container-site flex h-full flex-col justify-end pb-14 md:pb-20">
        <Eyebrow tone="light">{t("next")}</Eyebrow>
        <p className="title-display mt-5 text-[clamp(3.25rem,10vw,9rem)]">{project.title[locale]}</p>
        <p className="mt-4 flex items-center gap-3 text-foreground/80">
          {tCategories(`${project.category}.label`)}
          <ArrowRight
            aria-hidden
            className="size-5 transition-transform duration-500 ease-cinematic group-hover:translate-x-2"
          />
        </p>
      </div>
    </Link>
  );
};

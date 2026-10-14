import { ArrowUpRight, Play } from "lucide-react";
import type { Locale } from "next-intl";

import { MediaTile } from "@/components/site/media-tile";
import { frameNumber } from "@/lib/general/utils";
import type { Project } from "@/lib/works/types";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  index: number;
  categoryLabel: string;
  filmLabel: string;
  sizes: string;
  className?: string;
}

// Category tag always visible; on hover the title rises in. Devices without hover (touch)
// always show the title.
export const ProjectCard = ({ project, locale, index, categoryLabel, filmLabel, sizes, className }: ProjectCardProps) => (
  <MediaTile
    href={`/works/${project.category}/${project.slug}`}
    image={project.cover}
    locale={locale}
    sizes={sizes}
    className={className}
  >
    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
      <span className="frame-index text-foreground/75">{frameNumber(index)}</span>
      {project.films?.length ? (
        <span className="eyebrow flex items-center gap-1.5 rounded-full border border-foreground/30 bg-ink/40 px-2.5 py-1 text-foreground/90 backdrop-blur-sm">
          <Play aria-hidden className="size-2.5 fill-current" />
          {filmLabel}
        </span>
      ) : null}
    </div>

    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
      <p className="eyebrow text-foreground/75">{categoryLabel}</p>
      <div className="mt-2 flex items-end justify-between gap-4 transition-all duration-500 ease-cinematic [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <h3 className="title-display text-3xl lg:text-4xl">{project.title[locale]}</h3>
        <ArrowUpRight aria-hidden className="mb-1 size-5 shrink-0" />
      </div>
    </div>
  </MediaTile>
);

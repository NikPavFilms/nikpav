import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/works/project-card";
import type { Project } from "@/lib/works/types";

type Span = 4 | 5 | 7 | 12;

// Rows are consumed in turn so any filtered list keeps an editorial rhythm; when fewer
// projects remain than a template needs, the matching fallback completes the last row.
const ROW_TEMPLATES: Span[][] = [[7, 5], [4, 4, 4], [5, 7], [12]];
const FALLBACK_ROWS: Record<number, Span[]> = { 1: [12], 2: [7, 5], 3: [4, 4, 4] };

const SPAN_CLASSES: Record<Span, string> = {
  4: "aspect-square md:col-span-4",
  5: "aspect-[4/5] md:col-span-5",
  7: "aspect-[4/3] md:col-span-7",
  12: "aspect-[16/10] md:col-span-12",
};

const SPAN_SIZES: Record<Span, string> = {
  4: "(min-width: 768px) 33vw, 100vw",
  5: "(min-width: 768px) 42vw, 100vw",
  7: "(min-width: 768px) 58vw, 100vw",
  12: "100vw",
};

// Height per row length on desktop (mobile uses each span's aspect ratio instead).
const ROW_HEIGHTS: Record<number, string> = {
  1: "md:aspect-auto md:h-[clamp(20rem,40vw,38rem)]",
  2: "md:aspect-auto md:h-[clamp(22rem,40vw,40rem)]",
  3: "md:aspect-auto md:h-[clamp(18rem,28vw,28rem)]",
};

interface GridCell {
  project: Project;
  span: Span;
  column: number;
  rowLength: number;
}

const buildCells = (projects: Project[]) => {
  const cells: GridCell[] = [];
  let rowCount = 0;

  while (cells.length < projects.length) {
    const remaining = projects.length - cells.length;
    const template = ROW_TEMPLATES[rowCount % ROW_TEMPLATES.length];
    const spans = template.length > remaining ? FALLBACK_ROWS[remaining] : template;
    const start = cells.length;

    spans.forEach((span, column) =>
      cells.push({ project: projects[start + column], span, column, rowLength: spans.length }),
    );
    rowCount += 1;
  }

  return cells;
};

interface ProjectGridProps {
  projects: Project[];
  locale: Locale;
}

export const ProjectGrid = async ({ projects, locale }: ProjectGridProps) => {
  const t = await getTranslations("Categories");
  const tCommon = await getTranslations("Common");
  const cells = buildCells(projects);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
      {cells.map(({ project, span, column, rowLength }, index) => (
        <Reveal key={project.slug} delay={column * 0.08} className={`${SPAN_CLASSES[span]} ${ROW_HEIGHTS[rowLength]}`}>
          <ProjectCard
            project={project}
            locale={locale}
            index={index + 1}
            categoryLabel={t(`${project.category}.label`)}
            filmLabel={tCommon("film")}
            sizes={SPAN_SIZES[span]}
            className="size-full"
          />
        </Reveal>
      ))}
    </div>
  );
};

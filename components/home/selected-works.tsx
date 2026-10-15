import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { MediaTile } from "@/components/site/media-tile";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { frameNumber } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";
import type { CategorySlug } from "@/lib/works/categories";
import type { CategoryShowcase } from "@/lib/works/types";

// Asymmetric bento: one tall frame beside two stacked ones, then a 5/7 split.
const TILES: { category: CategorySlug; className: string; sizes: string }[] = [
  { category: "wedding", className: "aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-auto", sizes: "(min-width: 768px) 58vw, 100vw" },
  { category: "social", className: "aspect-[4/3] md:col-span-5 md:aspect-auto", sizes: "(min-width: 768px) 42vw, 100vw" },
  { category: "baptism", className: "aspect-[4/3] md:col-span-5 md:aspect-auto", sizes: "(min-width: 768px) 42vw, 100vw" },
  { category: "production", className: "aspect-[4/3] md:col-span-5 md:aspect-auto", sizes: "(min-width: 768px) 42vw, 100vw" },
  { category: "real-estate", className: "aspect-[16/10] md:col-span-7 md:aspect-auto", sizes: "(min-width: 768px) 58vw, 100vw" },
];

interface SelectedWorksProps {
  locale: Locale;
  /** What stands for each category: its cover and line fill the tile. */
  showcases: Record<CategorySlug, CategoryShowcase>;
}

export const SelectedWorks = async ({ locale, showcases }: SelectedWorksProps) => {
  const t = await getTranslations("Home.selectedWorks");
  const tCategories = await getTranslations("Categories");

  return (
    <section aria-labelledby="selected-works-title" className="container-site py-28 md:py-40">
      <SectionHeading id="selected-works-title" index="01" eyebrow={t("eyebrow")} title={t("title")}>
        <Button asChild variant="outline" size="xl" className="self-start md:self-auto">
          <Link href="/works">
            {t("viewAll")}
            <ArrowRight />
          </Link>
        </Button>
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-3 md:mt-20 md:auto-rows-[clamp(15rem,23vw,22rem)] md:grid-cols-12 md:gap-4">
        {TILES.map(({ category, className, sizes }, index) => (
          <Reveal key={category} delay={(index % 2) * 0.08} className={className}>
            {/* The category's page is its project, or its list of weddings: one click to the work. */}
            <MediaTile
              href={`/works/${category}`}
              image={showcases[category].cover}
              locale={locale}
              sizes={sizes}
              className="size-full"
            >
              <span className="frame-index absolute top-5 left-5 text-foreground/75 md:top-6 md:left-6">
                {frameNumber(index + 1)}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                <div>
                  <h3 className="title-display text-4xl md:text-5xl">{tCategories(`${category}.label`)}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{showcases[category].title[locale]}</p>
                </div>
                <ArrowUpRight
                  aria-hidden
                  className="size-6 shrink-0 transition-transform duration-500 ease-cinematic group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </MediaTile>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { frameNumber } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";
import { CATEGORY_ICONS, CATEGORY_SLUGS } from "@/lib/works/categories";

// Five hairline cards with thin line icons, as the brief asks (no filled discs or photos here).
export const WhatIDo = async () => {
  const t = await getTranslations("Home.whatIDo");
  const tCategories = await getTranslations("Categories");

  return (
    <section aria-labelledby="what-i-do-title" className="border-t border-border bg-ink/40">
      <div className="container-site py-28 md:py-40">
        <SectionHeading
          id="what-i-do-title"
          index="02"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
          {CATEGORY_SLUGS.map((slug, index) => {
            const Icon = CATEGORY_ICONS[slug];

            return (
              <Reveal as="li" key={slug} delay={index * 0.07}>
                <Link
                  href={`/works/${slug}`}
                  className="group flex h-full min-h-52 cursor-pointer flex-col justify-between gap-6 border border-border bg-card/30 p-6 transition-colors duration-500 hover:border-foreground/40 hover:bg-card sm:min-h-64 md:p-7 lg:min-h-72"
                >
                  <div className="flex items-start justify-between">
                    <span className="frame-index text-muted-foreground">{frameNumber(index + 1)}</span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-muted-foreground transition-all duration-500 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    />
                  </div>
                  <Icon
                    aria-hidden
                    strokeWidth={1.1}
                    className="size-10 text-foreground/80 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1"
                  />
                  <div>
                    <h3 className="title-display text-4xl">{tCategories(`${slug}.label`)}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{tCategories(`${slug}.service`)}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

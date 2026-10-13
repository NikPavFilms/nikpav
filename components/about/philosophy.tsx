import Image from "next/image";
import { getTranslations } from "next-intl/server";

import philosophyImage from "@/assets/images/site/philosophy.webp";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/site/section-heading";
import { frameNumber } from "@/lib/general/utils";

const PILLARS = ["detail", "authenticity", "tailored"] as const;

export const Philosophy = async () => {
  const t = await getTranslations("About.philosophy");
  const tAlt = await getTranslations("Alt");

  return (
    <section aria-labelledby="philosophy-title" className="border-t border-border bg-ink/40">
      <div className="container-site grid items-center gap-14 py-28 md:grid-cols-12 md:gap-8 md:py-40">
        <Reveal className="md:col-span-5">
          <SectionTitle id="philosophy-title" index="02" eyebrow={t("eyebrow")} title={t("title")} />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>{t("p1")}</p>
            <p className="text-muted-foreground">{t("p2")}</p>
          </div>
          <ol className="mt-12 divide-y divide-border border-y border-border">
            {PILLARS.map((pillar, index) => (
              <li key={pillar} className="flex items-baseline gap-6 py-5">
                <span className="frame-index text-muted-foreground">{frameNumber(index + 1)}</span>
                <div>
                  <h3 className="title-display text-3xl">{t(`pillars.${pillar}.title`)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(`pillars.${pillar}.text`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-card md:aspect-[3/4]">
            <Image
              src={philosophyImage}
              alt={tAlt("philosophy")}
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

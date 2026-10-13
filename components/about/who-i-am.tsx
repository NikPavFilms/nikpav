import Image from "next/image";
import { getTranslations } from "next-intl/server";

import aboutPortrait from "@/assets/images/site/about-portrait.webp";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/site/section-heading";

export const WhoIAm = async () => {
  const t = await getTranslations("About.who");
  const tAlt = await getTranslations("Alt");

  return (
    <section aria-labelledby="who-title" className="container-site py-28 md:py-40">
      <div className="grid items-start gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:sticky md:top-28 md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <Image
              src={aboutPortrait}
              alt={tAlt("aboutPortrait")}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <SectionTitle id="who-title" index="01" eyebrow={t("eyebrow")} title={t("title")} />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p className="text-muted-foreground">{t("p3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

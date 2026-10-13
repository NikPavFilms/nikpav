import { Aperture, Compass, Drone, type LucideIcon, MessagesSquare, SlidersHorizontal, Video } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { frameNumber } from "@/lib/general/utils";

const SERVICES: { key: "photography" | "videography" | "drone" | "editing" | "creativeDirection" | "consulting"; icon: LucideIcon }[] = [
  { key: "photography", icon: Aperture },
  { key: "videography", icon: Video },
  { key: "drone", icon: Drone },
  { key: "editing", icon: SlidersHorizontal },
  { key: "creativeDirection", icon: Compass },
  { key: "consulting", icon: MessagesSquare },
];

export const ServicesGrid = async () => {
  const t = await getTranslations("About.services");

  return (
    <section aria-labelledby="services-title" className="container-site py-28 md:py-40">
      <SectionHeading id="services-title" index="03" eyebrow={t("eyebrow")} title={t("title")} />
      <ul className="mt-14 grid gap-3 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
        {SERVICES.map(({ key, icon: Icon }, index) => (
          <Reveal as="li" key={key} delay={(index % 3) * 0.07}>
            <div className="group flex h-full min-h-64 flex-col justify-between gap-10 border border-border bg-card/30 p-7 transition-colors duration-500 hover:border-foreground/40 hover:bg-card md:p-8">
              <div className="flex items-start justify-between">
                <Icon
                  aria-hidden
                  strokeWidth={1.1}
                  className="size-10 text-foreground/80 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1"
                />
                <span className="frame-index text-muted-foreground">{frameNumber(index + 1)}</span>
              </div>
              <div>
                <h3 className="title-display text-4xl">{t(`items.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(`items.${key}.text`)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
};

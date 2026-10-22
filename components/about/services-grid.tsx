import { Aperture, ArrowUpRight, Compass, Drone, type LucideIcon, SlidersHorizontal, Video } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn, frameNumber } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";

const SERVICES: {
  key: "photography" | "videography" | "drone" | "editing" | "experiences";
  icon: LucideIcon;
  /** A service with a page of its own: the card opens it. */
  href?: string;
}[] = [
  { key: "photography", icon: Aperture },
  { key: "videography", icon: Video },
  { key: "drone", icon: Drone },
  { key: "editing", icon: SlidersHorizontal },
  { key: "experiences", icon: Compass, href: "/experiences" },
];

const CARD_CLASS =
  "group flex h-full min-h-64 flex-col justify-between gap-10 border border-border bg-card/30 p-7 transition-colors duration-500 hover:border-foreground/40 hover:bg-card md:p-8";

export const ServicesGrid = async () => {
  const t = await getTranslations("About.services");

  return (
    <section aria-labelledby="services-title" className="container-site py-28 md:py-40">
      <SectionHeading id="services-title" index="03" eyebrow={t("eyebrow")} title={t("title")} />
      <ul className="mt-14 grid gap-3 sm:grid-cols-2 md:mt-20">
        {SERVICES.map(({ key, icon: Icon, href }, index) => {
          const content = (
            <>
              <div className="flex items-start justify-between">
                <Icon
                  aria-hidden
                  strokeWidth={1.1}
                  className="size-10 text-foreground/80 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1"
                />
                <span className="flex items-center gap-3">
                  <span className="frame-index text-muted-foreground">{frameNumber(index + 1)}</span>
                  {href && (
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-muted-foreground transition-all duration-500 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    />
                  )}
                </span>
              </div>
              <div>
                <h3 className="title-display text-4xl">{t(`items.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(`items.${key}.text`)}</p>
              </div>
            </>
          );

          return (
            <Reveal
              as="li"
              key={key}
              delay={(index % 2) * 0.07}
              // An odd last card spans both columns.
              className={cn(SERVICES.length % 2 === 1 && index === SERVICES.length - 1 && "sm:col-span-2")}
            >
              {href ? (
                <Link href={href} className={cn(CARD_CLASS, "cursor-pointer")}>
                  {content}
                </Link>
              ) : (
                <div className={CARD_CLASS}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};

import Image from "next/image";
import { getTranslations } from "next-intl/server";

import heroPoster from "@/assets/images/site/hero-poster.webp";
import { BackgroundVideo } from "@/components/site/background-video";
import { Eyebrow } from "@/components/site/eyebrow";
import { ShowreelButton } from "@/components/site/showreel-button";
import { SITE } from "@/lib/general/constants";

export const HomeHero = async () => {
  const t = await getTranslations("Home.hero");

  return (
    <section className="relative isolate flex h-dvh min-h-160 items-end overflow-hidden bg-ink">
      {/* The poster is the LCP element; the loop only loads after the page has. */}
      <Image
        src={heroPoster}
        alt=""
        fill
        preload
        sizes="100vw"
        quality={85}
        placeholder="blur"
        className="-z-10 object-cover"
      />
      <BackgroundVideo
        webm="/images/videos/hero.webm"
        mp4="/images/videos/hero.mp4"
        eager
        className="-z-10"
        controlsClassName="right-5 bottom-8 md:right-12"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/30 to-ink/40" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="container-site pb-28 md:pb-32">
        <Eyebrow tone="light" className="motion-safe:animate-rise">
          {t("eyebrow")}
        </Eyebrow>
        {/* The title is the LCP element: visible on the first frame, it only settles into place. */}
        <h1 className="title-display mt-6 text-[clamp(4rem,12.5vw,12.5rem)]">
          <span className="block motion-safe:animate-settle">{t("titleLine1")}</span>{" "}
          <span className="block text-foreground/55 motion-safe:animate-settle [animation-delay:120ms]">
            {t("titleLine2")}
          </span>
        </h1>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-base text-foreground/80 motion-safe:animate-rise [animation-delay:450ms] md:text-lg">
            {t("description")}
          </p>
          <div className="motion-safe:animate-rise [animation-delay:600ms]">
            <ShowreelButton label={t("showreel")} />
          </div>
        </div>
      </div>

      <div className="container-site absolute inset-x-0 bottom-0 flex items-end justify-between pb-8">
        <div className="flex items-center gap-4 text-foreground/60">
          <span aria-hidden className="relative h-10 w-px overflow-hidden bg-foreground/20">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-foreground motion-safe:animate-scroll-cue" />
          </span>
          <span className="eyebrow">{t("scroll")}</span>
        </div>
        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow mr-14 hidden cursor-pointer text-foreground/60 transition-colors duration-300 hover:text-foreground md:block"
        >
          @{SITE.instagram.handle}
        </a>
      </div>
    </section>
  );
};

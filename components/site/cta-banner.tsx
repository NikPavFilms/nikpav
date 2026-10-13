import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import ctaPoster from "@/assets/images/site/cta-poster.webp";
import { InstagramIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { BackgroundVideo } from "@/components/site/background-video";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/general/constants";
import { Link } from "@/lib/i18n/navigation";

// "Let's work together": shared closing banner on Home, Works, projects and About.
export const CtaBanner = async () => {
  const t = await getTranslations("Common.cta");

  return (
    <section aria-labelledby="cta-title" className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-ink">
      <Image src={ctaPoster} alt="" fill sizes="100vw" quality={85} placeholder="blur" className="-z-10 object-cover" />
      <BackgroundVideo
        webm="/images/videos/cta.webm"
        mp4="/images/videos/cta.mp4"
        className="-z-10"
        controlsClassName="right-5 bottom-5 md:right-8 md:bottom-8"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-background via-transparent to-ink" />

      <Reveal className="container-site py-28 text-center">
        <p className="eyebrow text-foreground/75">{t("eyebrow")}</p>
        <h2 id="cta-title" className="title-display mt-6 text-[clamp(3.75rem,12vw,11rem)]">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg text-foreground/85 md:text-2xl">{t("subtitle")}</p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <Button asChild size="xl">
            <Link href="/contact">
              {t("button")}
              <ArrowRight />
            </Link>
          </Button>
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-2 text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
            <span>{t("instagram")}</span>
            <span className="text-foreground underline-offset-4 group-hover:underline">@{SITE.instagram.handle}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
};

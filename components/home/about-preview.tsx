import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import logoMark from "@/assets/images/logo-mark.png";
import homeAbout from "@/assets/images/site/home-about.webp";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export const AboutPreview = async () => {
  const t = await getTranslations("Home.about");
  const tAlt = await getTranslations("Alt");

  return (
    <section aria-labelledby="about-preview-title" className="container-site py-28 md:py-40">
      <div className="grid items-center gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <Image
              src={homeAbout}
              alt={tAlt("homeAbout")}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <SectionTitle id="about-preview-title" index="03" eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">{t("body")}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{t("body2")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Button asChild variant="outline" size="xl">
              <Link href="/about">
                {t("cta")}
                <ArrowRight />
              </Link>
            </Button>
            <Image src={logoMark} alt="" sizes="160px" className="h-16 w-auto opacity-80" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import contactHero from "@/assets/images/site/contact-hero.webp";
import { ContactBrief } from "@/components/contact/contact-brief";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { SITE } from "@/lib/general/constants";
import { cn } from "@/lib/general/utils";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: "/contact",
    title: t("contact.title"),
    description: t("contact.description"),
  });
};

const ContactPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations("Contact");
  const tNav = await getTranslations("Nav");
  const tAlt = await getTranslations("Alt");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("contact"), path: "/contact" },
        ])}
      />
      <PageHero
        image={contactHero}
        imageAlt={tAlt("contactHero")}
        eyebrow={t("hero.eyebrow")}
        titleLines={[t("hero.title")]}
        description={t("hero.description")}
      />
      <section className="container-site grid gap-16 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        {/* The form needs an inbox to send to: it appears once SITE.email is set. Until then the
            channels lead, with a short guide to writing a good first message. */}
        {SITE.email ? (
          <Reveal className="md:col-span-7">
            <h2 className="title-display text-5xl md:text-6xl">{t("form.title")}</h2>
            <div className="mt-10">
              <ContactForm email={SITE.email} />
            </div>
          </Reveal>
        ) : (
          <Reveal className="md:col-span-6">
            <ContactChannels standalone />
          </Reveal>
        )}
        <Reveal delay={0.1} className={cn(SITE.email ? "md:col-span-4 md:col-start-9" : "md:col-span-5 md:col-start-8")}>
          {SITE.email ? <ContactChannels standalone={false} /> : <ContactBrief />}
        </Reveal>
      </section>
    </>
  );
};

export default ContactPage;

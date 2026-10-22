import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/seo/json-ld";
import { Viewfinder } from "@/components/site/viewfinder";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  // A placeholder until the experiences exist: kept out of search results and the sitemap.
  return {
    ...(await buildMetadata({
      locale,
      path: "/experiences",
      title: t("experiences.title"),
      description: t("experiences.description"),
    })),
    robots: { index: false },
  };
};

const ExperiencesPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations("Experiences");
  const tNav = await getTranslations("Nav");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("experiences"), path: "/experiences" },
        ])}
      />
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <Viewfinder
          className="inset-x-6 inset-y-24 scale-100 opacity-100 md:inset-x-16 md:inset-y-32"
          cornerClassName="size-10 border-foreground/25"
        />
        <div className="container-site relative text-center">
          <p className="eyebrow text-muted-foreground">{t("eyebrow")}</p>
          <h1 className="title-display mt-6 text-[clamp(3.5rem,12vw,10rem)]">{t("title")}</h1>
        </div>
      </section>
    </>
  );
};

export default ExperiencesPage;

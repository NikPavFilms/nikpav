import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/seo/json-ld";
import { ProjectFilm } from "@/components/works/project-film";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import type { ProjectFilm as Film } from "@/lib/works/types";
import { BasePageProps } from "@/types/page-props";

const ALBUM_FILM: Film = {
  type: "video",
  src: "/videos/products/album.mp4",
  poster: "/videos/products/album-poster.webp",
};

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: "/products",
    title: t("products.title"),
    description: t("products.description"),
  });
};

const ProductsPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations("Products");
  const tNav = await getTranslations("Nav");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "" },
          { name: tNav("products"), path: "/products" },
        ])}
      />
      <section className="container-site pt-32 pb-28 md:pt-44 md:pb-40">
        <p className="eyebrow text-center text-muted-foreground">{t("eyebrow")}</p>
        <article className="mt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <ProjectFilm film={ALBUM_FILM} title={t("album.title")} />
          </div>
          <h1 className="title-display mt-10 text-[clamp(2rem,4vw,3.75rem)]">{t("album.title")}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t("album.text")}</p>
        </article>
      </section>
    </>
  );
};

export default ProductsPage;

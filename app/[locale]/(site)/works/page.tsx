import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { WorksView } from "@/components/works/works-view";
import { setupPageLocale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo/metadata";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({ params }: BasePageProps): Promise<Metadata> => {
  const locale = await setupPageLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: "/works",
    title: t("works.title"),
    description: t("works.description"),
  });
};

// No loading.tsx in works/ on purpose: filter chips navigate between these static pages and
// should keep the current grid on screen rather than flash a loader.
const WorksPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);

  return <WorksView locale={locale} />;
};

export default WorksPage;

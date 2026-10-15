import { getTranslations } from "next-intl/server";

import { MotionProvider } from "@/components/motion/motion-provider";
import { MediaGuard } from "@/components/site/media-guard";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { setupPageLocale } from "@/lib/i18n/locale";
import { BaseLayoutProps } from "@/types/page-props";

// Without JavaScript the scroll reveals never fire, so show their content immediately.
const NO_SCRIPT_REVEAL = "[data-reveal]{opacity:1!important;transform:none!important}";

const SiteLayout = async ({ children, params }: BaseLayoutProps) => {
  await setupPageLocale(params);
  const t = await getTranslations("Nav");

  return (
    <MotionProvider>
      <noscript>
        <style>{NO_SCRIPT_REVEAL}</style>
      </noscript>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {t("skip")}
      </a>
      <MediaGuard />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </MotionProvider>
  );
};

export default SiteLayout;

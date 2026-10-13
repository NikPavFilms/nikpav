import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Viewfinder } from "@/components/site/viewfinder";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

// Lives above the (site) group on purpose: the group's loading.tsx is a Suspense boundary,
// and a 404 thrown inside it streams with HTTP 200. Here the status is a real 404, so the
// page renders the site chrome itself.
const NotFound = async () => {
  const t = await getTranslations("NotFound");

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="relative flex min-h-svh items-center overflow-hidden">
          {/* A permanent viewfinder frame: the page is literally "out of frame". */}
          <Viewfinder
            className="inset-x-6 inset-y-24 scale-100 opacity-100 md:inset-x-16 md:inset-y-32"
            cornerClassName="size-10 border-foreground/25"
          />
          <div className="container-site relative text-center">
            <p className="eyebrow text-muted-foreground">{t("eyebrow")}</p>
            <h1 className="title-display mt-6 text-[clamp(4rem,14vw,12rem)]">{t("title")}</h1>
            <p className="mx-auto mt-6 max-w-md text-muted-foreground md:text-lg">{t("description")}</p>
            <Button asChild size="xl" variant="outline" className="mt-10">
              <Link href="/">
                <ArrowLeft />
                {t("back")}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default NotFound;

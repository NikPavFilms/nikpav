import { Hexagon } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import logoMark from "@/assets/images/logo-mark.png";
import { SocialLinks } from "@/components/site/social-links";
import { SITE, telHref } from "@/lib/general/constants";
import { NAV_ITEMS } from "@/lib/general/navigation";
import { Link } from "@/lib/i18n/navigation";

const LINK_CLASS = "cursor-pointer text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground";

export const SiteFooter = async () => {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = String(new Date().getFullYear());

  return (
    <footer className="bg-ink">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Link href="/" aria-label={tNav("homeLink")} className="inline-block cursor-pointer">
            <Image src={logoMark} alt="" sizes="200px" className="h-24 w-auto md:h-28" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("tagline")}</p>
        </div>

        <nav aria-label={t("navigate")} className="md:col-span-2 md:col-start-7">
          <p className="eyebrow text-muted-foreground">{t("navigate")}</p>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className={LINK_CLASS}>
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="eyebrow text-muted-foreground">{t("follow")}</p>
          <SocialLinks className="mt-5" />
          <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block ${LINK_CLASS}`}>
            @{SITE.instagram.handle}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-muted-foreground">{t("contact")}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {SITE.email && (
              <li>
                <a href={`mailto:${SITE.email}`} className={LINK_CLASS}>
                  {SITE.email}
                </a>
              </li>
            )}
            {SITE.phone && (
              <li>
                <a href={telHref(SITE.phone)} className={LINK_CLASS}>
                  {SITE.phone}
                </a>
              </li>
            )}
            <li className="text-foreground/70">{t("basedIn")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{t("rights", { year })}</p>
          <p className="flex items-center gap-2">
            <Hexagon aria-hidden className="size-3.5 text-primary" />
            <span>{t("madeBy")}</span>
            <a
              href="https://hexaigon.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-foreground transition-colors duration-300 hover:text-muted-foreground"
            >
              Hexaigon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

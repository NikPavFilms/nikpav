"use client";

import { useLocale, useTranslations } from "next-intl";
import { Fragment } from "react";

import { cn } from "@/lib/general/utils";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

interface LanguageSwitchProps {
  className?: string;
  onNavigate?: () => void;
}

// Real links (not a dropdown) so crawlers and no-JS visitors can switch too.
export const LanguageSwitch = ({ className, onNavigate }: LanguageSwitchProps) => {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn("flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.2em] uppercase", className)}
    >
      {routing.locales.map((code, index) => (
        <Fragment key={code}>
          {index > 0 && (
            <span aria-hidden className="text-foreground/25">
              /
            </span>
          )}
          <Link
            href={pathname}
            locale={code}
            hrefLang={code}
            onClick={onNavigate}
            aria-current={code === locale ? "true" : undefined}
            className={cn(
              "cursor-pointer py-2 transition-colors duration-300",
              code === locale ? "text-foreground" : "text-foreground/45 hover:text-foreground",
            )}
          >
            {code}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

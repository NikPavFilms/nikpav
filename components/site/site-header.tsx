"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import logoMark from "@/assets/images/logo-mark.png";
import { LanguageSwitch } from "@/components/site/language-switch";
import { MobileMenu } from "@/components/site/mobile-menu";
import { SocialLinks } from "@/components/site/social-links";
import { isActivePath, NAV_ITEMS } from "@/lib/general/navigation";
import { cn } from "@/lib/general/utils";
import { Link, usePathname } from "@/lib/i18n/navigation";

export const SiteHeader = () => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Solid layer fades in on scroll. Only opacity transitions, so nothing flickers. */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 border-b border-border bg-background/80 backdrop-blur-xl transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Soft top shade keeps the nav legible over bright frames of the hero media. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/70 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
      />
      <div className="container-site relative flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label={t("homeLink")} className="-ml-1 cursor-pointer">
          <Image src={logoMark} alt="" loading="eager" sizes="104px" className="h-11 w-auto md:h-14" />
        </Link>
        <nav aria-label={t("primary")} className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative cursor-pointer py-2 text-[0.72rem] font-medium tracking-[0.24em] uppercase transition-colors duration-300",
                      "after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:bg-foreground after:transition-transform after:duration-500 after:ease-cinematic hover:text-foreground hover:after:scale-x-100",
                      isActive ? "text-foreground after:scale-x-100" : "text-foreground/65 after:scale-x-0",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span aria-hidden className="h-4 w-px bg-foreground/20" />
          <div className="flex items-center gap-5">
            <SocialLinks size="sm" />
            <LanguageSwitch />
          </div>
        </nav>
        <MobileMenu className="-mr-2 md:hidden" />
      </div>
    </header>
  );
};

"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LanguageSwitch } from "@/components/site/language-switch";
import { SocialLinks } from "@/components/site/social-links";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { isActivePath, NAV_ITEMS } from "@/lib/general/navigation";
import { cn, frameNumber } from "@/lib/general/utils";
import { Link, usePathname } from "@/lib/i18n/navigation";

export const MobileMenu = ({ className }: { className?: string }) => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" aria-label={t("openMenu")} className={className}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 bg-background/95 backdrop-blur-xl sm:max-w-md"
      >
        <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
        <SheetDescription className="sr-only">{t("primary")}</SheetDescription>
        {/* Own close button: shadcn's default announces an English "Close" on Greek pages too. */}
        <SheetClose asChild>
          <Button variant="ghost" size="icon-lg" aria-label={t("closeMenu")} className="absolute top-3 right-3">
            <X className="size-5" />
          </Button>
        </SheetClose>
        <div className="flex h-full flex-col px-6 pt-24 pb-10">
          <nav aria-label={t("primary")}>
            <ol className="space-y-1">
              {NAV_ITEMS.map((item, index) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={isActive ? "page" : undefined}
                      className="group flex cursor-pointer items-baseline gap-4 py-2"
                    >
                      <span className="frame-index w-6 text-muted-foreground">{frameNumber(index + 1)}</span>
                      <span
                        className={cn(
                          "title-display text-6xl transition-colors duration-300",
                          isActive ? "text-foreground" : "text-foreground/45 group-hover:text-foreground",
                        )}
                      >
                        {t(item.key)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
            <SocialLinks />
            <LanguageSwitch onNavigate={close} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SITE } from "@/lib/general/constants";
import { SHOWREEL_DIALOG } from "@/lib/stores/dialog-keys";
import { useDialogStore } from "@/lib/stores/dialog-store";

// Mounted by DialogProvider only while requested. It owns its `open` state so Radix can play
// the exit animation, then releases the store once focus has returned (after the animation).
export const ShowreelDialog = () => {
  const t = useTranslations("Showreel");
  const closeDialog = useDialogStore((s) => s.closeDialog);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        className="w-[min(94vw,80rem)] max-w-none gap-0 overflow-hidden border-border bg-ink p-0 sm:max-w-none"
        onCloseAutoFocus={() => closeDialog(SHOWREEL_DIALOG)}
      >
        <DialogTitle className="sr-only">{t("title")}</DialogTitle>
        <DialogDescription className="sr-only">{t("description")}</DialogDescription>
        {/* Own close button: shadcn's default announces an English "Close" on Greek pages too. */}
        <DialogClose asChild>
          <Button variant="glass" size="icon" aria-label={t("close")} className="absolute top-3 right-3 z-10 rounded-full">
            <X className="size-4" />
          </Button>
        </DialogClose>
        <div className="aspect-video w-full bg-ink">
          {SITE.showreel.type === "youtube" ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${SITE.showreel.id}?autoplay=1&rel=0`}
              title={t("title")}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="size-full"
            />
          ) : (
            <video
              src={SITE.showreel.src}
              poster={SITE.showreel.poster}
              controls
              controlsList="nodownload"
              autoPlay
              playsInline
              className="size-full object-contain"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

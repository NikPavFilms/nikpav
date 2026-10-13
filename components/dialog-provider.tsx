"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { usePathname } from "@/lib/i18n/navigation";
import { SHOWREEL_DIALOG } from "@/lib/stores/dialog-keys";
import { useDialogStore } from "@/lib/stores/dialog-store";

// Loaded on first open only, so pages that never play the reel never download it.
const ShowreelDialog = dynamic(() => import("@/components/showreel-dialog").then((mod) => mod.ShowreelDialog), {
  ssr: false,
});

export const DialogProvider = () => {
  const isShowreelRequested = useDialogStore((s) => s.currentDialog === SHOWREEL_DIALOG);
  const closeDialog = useDialogStore((s) => s.closeDialog);
  const pathname = usePathname();

  // A route change (e.g. the browser back button) never leaves the reel playing over a new page.
  useEffect(() => {
    closeDialog(SHOWREEL_DIALOG);
  }, [pathname, closeDialog]);

  return (
    <>
      <ConfirmDialog />
      {isShowreelRequested && <ShowreelDialog />}
    </>
  );
};

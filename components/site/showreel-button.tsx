"use client";

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SHOWREEL_DIALOG } from "@/lib/stores/dialog-keys";
import { useDialogStore } from "@/lib/stores/dialog-store";

// Warm the dialog chunk on hover/focus so the reel opens instantly on click.
const preloadDialog = () => void import("@/components/showreel-dialog");

export const ShowreelButton = ({ label }: { label: string }) => {
  const openDialog = useDialogStore((s) => s.openDialog);

  return (
    <Button
      variant="glass"
      size="xl"
      onClick={() => openDialog(SHOWREEL_DIALOG)}
      onPointerEnter={preloadDialog}
      onFocus={preloadDialog}
      icon={
        <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-background">
          <Play className="size-3 translate-x-px fill-current" />
        </span>
      }
    >
      {label}
    </Button>
  );
};

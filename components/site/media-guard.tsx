"use client";

import { useEffect } from "react";

const isGuarded = (target: EventTarget | null) =>
  (target instanceof HTMLImageElement || target instanceof HTMLVideoElement) &&
  // A photo inside a link (project cards) keeps the menu, so "open in new tab" still works.
  !target.closest("a");

// Deters casual saving: no "Save image / video as" menu and no dragging a photo out of the page.
// Anything the browser shows can still be captured; this only removes the easy path.
export const MediaGuard = () => {
  useEffect(() => {
    const block = (event: Event) => {
      if (isGuarded(event.target)) event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
};

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import logoMark from "@/assets/images/logo-mark.png";

// Branded route-loading state: the logo breathing on black.
export const LoadingScreen = () => {
  const t = useTranslations("Common");

  return (
    <div role="status" className="flex min-h-svh items-center justify-center bg-background">
      <Image src={logoMark} alt="" sizes="180px" className="h-20 w-auto animate-pulse md:h-24" />
      <span className="sr-only">{t("loading")}</span>
    </div>
  );
};

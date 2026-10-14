"use client";

import { useTranslations } from "next-intl";

import { YoutubeIcon } from "@/components/brand-icons";
import { SOCIAL_PROFILES } from "@/components/site/social-profiles";
import { SocialIcon } from "@/components/social-icon";
import { SITE } from "@/lib/general/constants";
import { cn } from "@/lib/general/utils";

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
}

// Every configured social profile as a monochrome SocialIcon (YouTube appears once SITE.youtubeUrl is set).
export const SocialLinks = ({ size = "md", className }: SocialLinksProps) => {
  const t = useTranslations("Nav");
  const iconClass = size === "sm" ? "size-3.5" : "size-4";
  const buttonClass = size === "sm" ? "size-8 rounded-full" : "size-10 rounded-full";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_PROFILES.map(({ key, Icon, url }) => (
        <SocialIcon
          key={key}
          url={url}
          color="monochrome"
          label={t(key)}
          icon={<Icon className={iconClass} />}
          className={buttonClass}
        />
      ))}
      {SITE.youtubeUrl && (
        <SocialIcon
          url={SITE.youtubeUrl}
          color="monochrome"
          label={t("youtube")}
          icon={<YoutubeIcon className={iconClass} />}
          className={buttonClass}
        />
      )}
    </div>
  );
};

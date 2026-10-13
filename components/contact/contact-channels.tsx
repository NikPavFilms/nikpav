import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { InstagramIcon } from "@/components/brand-icons";
import { SocialIcon } from "@/components/social-icon";
import { SITE, telHref } from "@/lib/general/constants";

const CIRCLE_CLASS = "flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground";
const VALUE_LINK_CLASS = "mt-1 block cursor-pointer text-lg transition-colors duration-300 hover:text-muted-foreground";

interface ChannelRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const ChannelRow = ({ icon, label, children }: ChannelRowProps) => (
  <li className="flex items-center gap-5 py-6">
    {icon}
    <div className="min-w-0">
      <span className="eyebrow block text-muted-foreground">{label}</span>
      {children}
    </div>
  </li>
);

// Direct channels. Email and phone only appear once they are set in SITE (constants.ts).
export const ContactChannels = async ({ standalone }: { standalone: boolean }) => {
  const t = await getTranslations("Contact.channels");
  const tNav = await getTranslations("Nav");

  return (
    <div>
      <h2 className="title-display text-5xl md:text-6xl">{standalone ? t("titleAlone") : t("title")}</h2>
      <ul className="mt-8 divide-y divide-border border-y border-border">
        <ChannelRow
          label={t("instagram")}
          icon={
            <SocialIcon
              url={SITE.instagram.url}
              color="monochrome"
              label={tNav("instagram")}
              icon={<InstagramIcon className="size-4" />}
              className="size-11 rounded-full"
            />
          }
        >
          <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className={VALUE_LINK_CLASS}>
            @{SITE.instagram.handle}
          </a>
          <span className="mt-1 block text-sm text-muted-foreground">{t("instagramCta")}</span>
        </ChannelRow>

        {SITE.email && (
          <ChannelRow label={t("email")} icon={<span className={CIRCLE_CLASS}><Mail aria-hidden className="size-4" /></span>}>
            <a href={`mailto:${SITE.email}`} className={`${VALUE_LINK_CLASS} break-all`}>
              {SITE.email}
            </a>
          </ChannelRow>
        )}

        {SITE.phone && (
          <ChannelRow label={t("phone")} icon={<span className={CIRCLE_CLASS}><Phone aria-hidden className="size-4" /></span>}>
            <a href={telHref(SITE.phone)} className={VALUE_LINK_CLASS}>
              {SITE.phone}
            </a>
          </ChannelRow>
        )}

        <ChannelRow label={t("based")} icon={<span className={CIRCLE_CLASS}><MapPin aria-hidden className="size-4" /></span>}>
          <span className="mt-1 block text-lg">{t("basedValue")}</span>
        </ChannelRow>
      </ul>
    </div>
  );
};

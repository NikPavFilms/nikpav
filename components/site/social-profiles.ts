import { InstagramIcon, TiktokIcon } from "@/components/brand-icons";
import { SITE } from "@/lib/general/constants";

// Social profiles linked across the site (header, footer, Contact, closing banner), in display order.
// Each key also names its messages: `Nav.<key>`, `Contact.channels.<key>` and `Common.cta.<key>`.
export const SOCIAL_PROFILES = [
  { key: "instagram", Icon: InstagramIcon, ...SITE.instagram },
  { key: "tiktok", Icon: TiktokIcon, ...SITE.tiktok },
] as const;

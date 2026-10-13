import { Building2, Clapperboard, Droplets, Gem, type LucideIcon, Smartphone } from "lucide-react";

// Canonical order (filters, "What I do", sitemap). Labels and copy live in messages under
// `Categories.<slug>`; the slug is also the URL segment: /works/<slug>.
export const CATEGORY_SLUGS = ["social", "wedding", "baptism", "real-estate", "production"] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORY_ICONS: Record<CategorySlug, LucideIcon> = {
  social: Smartphone,
  wedding: Gem,
  baptism: Droplets,
  "real-estate": Building2,
  production: Clapperboard,
};

export const isCategorySlug = (value: string): value is CategorySlug =>
  (CATEGORY_SLUGS as readonly string[]).includes(value);

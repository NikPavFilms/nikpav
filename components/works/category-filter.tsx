import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";
import { CATEGORY_SLUGS, type CategorySlug } from "@/lib/works/categories";

interface CategoryFilterProps {
  active?: CategorySlug;
  counts: Record<CategorySlug, number>;
  total: number;
}

// Real links to static category pages (indexable, no client state). scroll={false} keeps the
// visitor where they are; chips wrap instead of scrolling so nothing snaps back on navigation.
export const CategoryFilter = async ({ active, counts, total }: CategoryFilterProps) => {
  const t = await getTranslations("Works");
  const tCategories = await getTranslations("Categories");

  const items = [
    { key: "all", href: "/works", label: t("all"), count: total, isActive: !active },
    ...CATEGORY_SLUGS.map((slug) => ({
      key: slug,
      href: `/works/${slug}`,
      label: tCategories(`${slug}.label`),
      count: counts[slug],
      isActive: active === slug,
    })),
  ];

  return (
    <nav
      aria-label={t("filters")}
      className="relative z-30 border-y border-border bg-background/85 backdrop-blur-xl md:sticky md:top-20"
    >
      {/* Sticky on desktop only: on phones the wrapped chips would cover a third of the screen. */}
      <ul className="container-site flex flex-wrap items-center gap-2 py-4">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              scroll={false}
              aria-current={item.isActive ? "page" : undefined}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-2 text-[0.65rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300 sm:px-4 sm:text-[0.7rem] sm:tracking-[0.2em]",
                item.isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/70 hover:border-foreground/50 hover:text-foreground",
              )}
            >
              {item.label}
              <span className="text-[0.6rem] tracking-normal tabular-nums opacity-60">{item.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

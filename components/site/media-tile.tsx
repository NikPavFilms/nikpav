import Image from "next/image";
import type { Locale } from "next-intl";

import { Viewfinder } from "@/components/site/viewfinder";
import { cn } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";
import type { ProjectImage } from "@/lib/works/types";

interface MediaTileProps {
  href: string;
  image: ProjectImage;
  locale: Locale;
  /** Must match the tile's real rendered width (see project-grid.tsx). */
  sizes: string;
  className?: string;
  children: React.ReactNode;
}

// Linked image frame shared by the Works cards and the Home bento: soft zoom, bottom shade
// and viewfinder brackets on hover/focus. Children are the overlaid labels.
export const MediaTile = ({ href, image, locale, sizes, className, children }: MediaTileProps) => (
  <Link href={href} className={cn("group relative block cursor-pointer overflow-hidden bg-card outline-none", className)}>
    <Image
      src={image.src}
      alt={image.alt[locale]}
      fill
      sizes={sizes}
      placeholder="blur"
      style={{ objectPosition: image.focus }}
      className="object-cover transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
    />
    <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-ink/20" />
    <Viewfinder />
    {children}
  </Link>
);

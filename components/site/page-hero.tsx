import Image, { type StaticImageData } from "next/image";
import { Fragment } from "react";

import { Eyebrow } from "@/components/site/eyebrow";
import { cn } from "@/lib/general/utils";

interface PageHeroProps {
  image: StaticImageData;
  imageAlt?: string;
  eyebrow: string;
  /** One entry per display line, each revealed in turn. */
  titleLines: string[];
  description?: string;
  height?: "screen" | "tall";
  grayscale?: boolean;
  /** CSS object-position, to keep the subject clear of the text. */
  focus?: string;
  /** "medium" for a smaller headline (the /works hero). */
  titleSize?: "large" | "medium";
  children?: React.ReactNode;
}

const HEIGHTS = {
  screen: "h-dvh min-h-160",
  tall: "h-[82svh] min-h-140",
} as const;

const TITLE_SIZES = {
  large: "text-[clamp(3.5rem,10.5vw,10rem)]",
  medium: "text-[clamp(3rem,8vw,7.5rem)]",
} as const;

export const PageHero = ({
  image,
  imageAlt = "",
  eyebrow,
  titleLines,
  description,
  height = "tall",
  grayscale = false,
  focus = "center",
  titleSize = "large",
  children,
}: PageHeroProps) => (
  <section className={cn("relative isolate flex items-end overflow-hidden bg-ink", HEIGHTS[height])}>
    <Image
      src={image}
      alt={imageAlt}
      fill
      preload
      sizes="100vw"
      quality={85}
      placeholder="blur"
      className={cn("-z-10 object-cover", grayscale && "grayscale")}
      style={{ objectPosition: focus }}
    />
    <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/25 to-ink/55" />
    <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-ink/65 via-ink/10 to-transparent" />

    <div className="container-site pb-16 md:pb-24">
      <Eyebrow tone="light" className="motion-safe:animate-rise">
        {eyebrow}
      </Eyebrow>
      {/* The title is the LCP element: visible on the first frame, lines only settle into place.
          Follow-up lines are dimmed, like the home hero ("WEDDING / LOVE STORIES"). */}
      <h1 className={cn("title-display mt-6", TITLE_SIZES[titleSize])}>
        {titleLines.map((line, index) => (
          <Fragment key={`${index}-${line}`}>
            {/* A real space between the block lines, so the heading's text reads "Wedding Love stories". */}
            {index > 0 && " "}
            <span
              className={cn("block motion-safe:animate-settle", index > 0 && "text-foreground/55")}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {line}
            </span>
          </Fragment>
        ))}
      </h1>
      {description && (
        <p
          className="mt-6 max-w-lg text-lg text-foreground/80 motion-safe:animate-rise md:text-xl"
          style={{ animationDelay: `${260 + titleLines.length * 110}ms` }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

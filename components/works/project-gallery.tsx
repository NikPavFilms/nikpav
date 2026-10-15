import Image from "next/image";
import type { Locale } from "next-intl";
import { Fragment } from "react";

import { Reveal } from "@/components/motion/reveal";
import { FilmFigure, filmKey } from "@/components/works/project-film";
import { cn } from "@/lib/general/utils";
import type { ProjectFilm, ProjectImage } from "@/lib/works/types";

type GalleryRow = {
  key: string;
  images: ProjectImage[];
  /** Share of the container a short last row takes, so it keeps the height of the row above. */
  widthShare?: number;
};

const ratioOf = (image: ProjectImage) => image.src.width / image.src.height;
const ratioSum = (images: ProjectImage[]) => images.reduce((sum, image) => sum + ratioOf(image), 0);

// Portraits and squares (anything narrower than 6:5) pair up; only landscapes run full width,
// since a full-width square would stand taller than the screen.
const isUpright = (image: ProjectImage) => ratioOf(image) < 1.2;

// A compact row closes once its photos' ratios add up to this: two landscapes, three portraits,
// or a portrait beside a landscape share a row, so every photo shows smaller.
const COMPACT_ROW_RATIO = 1.9;

// Each upright photo pairs with the next free upright one, even across a landscape, so galleries
// alternate pairs and full-width frames instead of stacking lone portraits. Photos placed by hand
// (`row`), and the photo a "with-next" one shares its row with, are never pulled forward.
const pairUprights = (images: ProjectImage[]) => {
  const placedByHand = new Set(images.filter((image, index) => image.row || images[index - 1]?.row === "with-next"));
  const rows: ProjectImage[][] = [];
  const remaining = [...images];

  while (remaining.length > 0) {
    const current = remaining.shift() as ProjectImage;
    let partnerIndex = -1;
    if (current.row === "with-next") partnerIndex = remaining.length > 0 ? 0 : -1;
    else if (current.row !== "alone" && isUpright(current))
      partnerIndex = remaining.findIndex((image) => isUpright(image) && !placedByHand.has(image));
    rows.push(partnerIndex === -1 ? [current] : [current, ...remaining.splice(partnerIndex, 1)]);
  }

  return rows;
};

const fillCompactRows = (images: ProjectImage[]) => {
  const rows: ProjectImage[][] = [];
  let row: ProjectImage[] = [];

  for (const image of images) {
    row.push(image);
    if (ratioSum(row) >= COMPACT_ROW_RATIO) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length > 0) rows.push(row);

  return rows;
};

// Photos keep their native ratio (never cropped).
const buildRows = (images: ProjectImage[], compact: boolean): GalleryRow[] =>
  (compact ? fillCompactRows(images) : pairUprights(images)).map((rowImages, index, rows) => ({
    key: rowImages.map((image) => image.src.src).join("|"),
    images: rowImages,
    widthShare:
      compact && index > 0 && ratioSum(rowImages) < COMPACT_ROW_RATIO
        ? ratioSum(rowImages) / ratioSum(rows[index - 1])
        : undefined,
  }));

// Each column is as wide as its photo's ratio, so photos of different shapes in one row still end
// level (same height, nothing cropped).
const rowColumns = (images: ProjectImage[]) =>
  images.map((image) => `minmax(0, ${ratioOf(image).toFixed(4)}fr)`).join(" ");

// Matches md:w-4/5 on narrowed rows.
const NARROWED_SHARE = 0.8;

interface ProjectGalleryProps {
  images: ProjectImage[];
  /** Films shown between the photos, each after the row that holds its `afterPhoto`-th photo. */
  films?: ProjectFilm[];
  /** Names a film's player when it has no title of its own. */
  filmTitle: string;
  /** Rows filled by shape (two landscapes, three portraits), for smaller photos. */
  compact?: boolean;
  locale: Locale;
}

export const ProjectGallery = ({ images, films = [], filmTitle, compact = false, locale }: ProjectGalleryProps) => {
  const rows = buildRows(images, compact);
  // Anchored to the photo's row, so a pair pulled forward never splits around a film.
  const rowOf = (photoNumber: number) => rows.findIndex((row) => row.images.includes(images[photoNumber - 1]));
  const filmsAfterRow = (rowIndex: number) =>
    films.filter((film) => film.afterPhoto !== undefined && rowOf(film.afterPhoto) === rowIndex);

  return (
    <div className="space-y-3 md:space-y-4">
      {rows.map(({ key, images: rowImages, widthShare }, rowIndex) => {
        const isMulti = rowImages.length > 1;
        const isLoneUpright = !compact && !isMulti && isUpright(rowImages[0]);
        // Weddings and baptisms (not compact): pairs and lone landscapes take four fifths of the
        // width on desktop, a lone portrait four fifths of its usual 48rem.
        const isNarrowed = !compact && !isLoneUpright;
        const style = {
          ...(isMulti && { "--row-columns": rowColumns(rowImages) }),
          ...(widthShare && { "--row-width": `${(widthShare * 100).toFixed(2)}%` }),
        } as React.CSSProperties;
        // The share of the screen each photo takes on desktop, for the browser's size pick.
        const sizesFor = (image: ProjectImage) => {
          if (isLoneUpright) return "(min-width: 768px) 45vw, 100vw";
          const rowShare = widthShare ?? (isNarrowed ? NARROWED_SHARE : 1);
          const share = (isMulti ? ratioOf(image) / ratioSum(rowImages) : 1) * rowShare;
          return `(min-width: 768px) ${Math.ceil(share * 100)}vw, 100vw`;
        };

        return (
          <Fragment key={key}>
            <div
              className={cn(
                "grid gap-3 md:gap-4",
                isMulti && "md:grid-cols-(--row-columns)",
                isLoneUpright && "mx-auto max-w-[38.4rem]",
                isNarrowed && "md:mx-auto md:w-4/5",
                widthShare && "mx-auto md:w-(--row-width)",
              )}
              style={style}
            >
              {rowImages.map((image, column) => (
                <Reveal key={image.src.src} delay={column * 0.08} className="overflow-hidden bg-card">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    sizes={sizesFor(image)}
                    quality={85}
                    placeholder="blur"
                    className="h-auto w-full"
                  />
                </Reveal>
              ))}
            </div>
            {filmsAfterRow(rowIndex).map((film) => (
              <Reveal key={filmKey(film)} className="py-6 md:py-10">
                <FilmFigure film={film} fallbackTitle={filmTitle} />
              </Reveal>
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

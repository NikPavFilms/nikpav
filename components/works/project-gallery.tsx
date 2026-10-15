import Image from "next/image";
import type { Locale } from "next-intl";
import { Fragment } from "react";

import { Reveal } from "@/components/motion/reveal";
import { FilmFigure, filmKey } from "@/components/works/project-film";
import { cn } from "@/lib/general/utils";
import type { ProjectFilm, ProjectImage } from "@/lib/works/types";

type GalleryRow = { key: string; images: ProjectImage[] };

// Portraits and squares (anything narrower than 6:5) pair up; only landscapes run full width,
// since a full-width square would stand taller than the screen.
const isUpright = (image: ProjectImage) => image.src.width < image.src.height * 1.2;

// Photos keep their native ratio (never cropped). Each upright photo pairs with the next one in
// the list, even across a landscape, so galleries alternate pairs and full-width frames instead
// of stacking lone portraits; an upright photo left without a partner sits centred.
const buildRows = (images: ProjectImage[]) => {
  const rows: GalleryRow[] = [];
  const remaining = [...images];

  while (remaining.length > 0) {
    const current = remaining.shift() as ProjectImage;
    const partnerIndex = isUpright(current) ? remaining.findIndex(isUpright) : -1;
    const rowImages = partnerIndex === -1 ? [current] : [current, ...remaining.splice(partnerIndex, 1)];

    rows.push({ key: rowImages.map((image) => image.src.src).join("|"), images: rowImages });
  }

  return rows;
};

// Each column of a pair is as wide as its photo's ratio, so two photos of different shapes still
// end level (same height, nothing cropped).
const pairColumns = (images: ProjectImage[]) =>
  images.map((image) => `minmax(0, ${(image.src.width / image.src.height).toFixed(4)}fr)`).join(" ");

interface ProjectGalleryProps {
  images: ProjectImage[];
  /** Films shown between the photos, each after the row that holds its `afterPhoto`-th photo. */
  films?: ProjectFilm[];
  /** Names a film's player when it has no title of its own. */
  filmTitle: string;
  locale: Locale;
}

export const ProjectGallery = ({ images, films = [], filmTitle, locale }: ProjectGalleryProps) => {
  const rows = buildRows(images);
  // Anchored to the photo's row, so a pair pulled forward never splits around a film.
  const rowOf = (photoNumber: number) => rows.findIndex((row) => row.images.includes(images[photoNumber - 1]));
  const filmsAfterRow = (rowIndex: number) =>
    films.filter((film) => film.afterPhoto !== undefined && rowOf(film.afterPhoto) === rowIndex);

  return (
    <div className="space-y-3 md:space-y-4">
      {rows.map(({ key, images: rowImages }, rowIndex) => {
        const isPair = rowImages.length === 2;
        const isLoneUpright = !isPair && isUpright(rowImages[0]);

        return (
          <Fragment key={key}>
            <div
              className={cn("grid gap-3 md:gap-4", isPair && "md:grid-cols-(--pair-columns)", isLoneUpright && "mx-auto max-w-3xl")}
              style={isPair ? ({ "--pair-columns": pairColumns(rowImages) } as React.CSSProperties) : undefined}
            >
              {rowImages.map((image, column) => (
                <Reveal key={image.src.src} delay={column * 0.08} className="overflow-hidden bg-card">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    sizes={isPair || isLoneUpright ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
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

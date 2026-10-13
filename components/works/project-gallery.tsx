import Image from "next/image";
import type { Locale } from "next-intl";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/general/utils";
import type { ProjectImage } from "@/lib/works/types";

type GalleryRow = { key: string; images: ProjectImage[] };

const isPortrait = (image: ProjectImage) => image.src.height > image.src.width;

// Photos keep their native ratio (never cropped). Each portrait pairs with the next portrait in
// the list, even across a landscape, so galleries alternate pairs and full-width frames instead
// of stacking lone portraits; a portrait left without a partner sits centred.
const buildRows = (images: ProjectImage[]) => {
  const rows: GalleryRow[] = [];
  const remaining = [...images];

  while (remaining.length > 0) {
    const current = remaining.shift() as ProjectImage;
    const partnerIndex = isPortrait(current) ? remaining.findIndex(isPortrait) : -1;
    const rowImages = partnerIndex === -1 ? [current] : [current, ...remaining.splice(partnerIndex, 1)];

    rows.push({ key: rowImages.map((image) => image.src.src).join("|"), images: rowImages });
  }

  return rows;
};

export const ProjectGallery = ({ images, locale }: { images: ProjectImage[]; locale: Locale }) => (
  <div className="space-y-3 md:space-y-4">
    {buildRows(images).map(({ key, images: rowImages }) => {
      const isPair = rowImages.length === 2;
      const isLonePortrait = !isPair && isPortrait(rowImages[0]);

      return (
        <div key={key} className={cn("grid gap-3 md:gap-4", isPair && "md:grid-cols-2", isLonePortrait && "mx-auto max-w-3xl")}>
          {rowImages.map((image, column) => (
            <Reveal key={image.src.src} delay={column * 0.08} className="overflow-hidden bg-card">
              <Image
                src={image.src}
                alt={image.alt[locale]}
                sizes={isPair || isLonePortrait ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
                quality={85}
                placeholder="blur"
                className="h-auto w-full"
              />
            </Reveal>
          ))}
        </div>
      );
    })}
  </div>
);

import type { StaticImageData } from "next/image";
import type { Locale } from "next-intl";

import type { CategorySlug } from "./categories";

/** Text in every site language: a missing translation fails `tsc`. */
export type LocalizedText = Record<Locale, string>;

export interface ProjectImage {
  src: StaticImageData;
  alt: LocalizedText;
  /** CSS object-position used wherever the image is cropped (cards, heroes), e.g. "50% 30%". */
  focus?: string;
}

export type ProjectService = "photography" | "film";

export type ProjectFilm = { type: "video"; src: string; poster: string } | { type: "youtube"; id: string };

export interface Project {
  /** URL segment: /works/<category>/<slug>. */
  slug: string;
  category: CategorySlug;
  title: LocalizedText;
  /** One line for cards and share previews. */
  summary: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  services: ProjectService[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  film?: ProjectFilm;
}

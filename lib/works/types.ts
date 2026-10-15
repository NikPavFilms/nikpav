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

/**
 * `title` captions the film and names its player; without it the project title is used.
 * `aspect` marks a portrait film (a social reel): it sits in a grid at that ratio instead of
 * running full width at 16:9.
 */
export type ProjectFilm = ({ type: "video"; src: string; poster: string } | { type: "youtube"; id: string }) & {
  title?: string;
  aspect?: "9 / 16" | "4 / 5";
};

export interface Project {
  /** URL segment: /works/<category>/<slug>. */
  slug: string;
  category: CategorySlug;
  title: LocalizedText;
  /** One line under the title on the project page; leave it out for a title-only hero. */
  summary?: LocalizedText;
  /** Paragraph under the hero; without it the page shows none and search uses the category's text. */
  description?: LocalizedText;
  location: LocalizedText;
  services: ProjectService[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  films?: ProjectFilm[];
}

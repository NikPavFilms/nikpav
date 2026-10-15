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
 * `afterPhoto` places the film among the gallery photos, after the row holding that photo
 * (1 = the first gallery photo), instead of in the films section above the gallery.
 */
export type ProjectFilm = ({ type: "video"; src: string; poster: string } | { type: "youtube"; id: string }) & {
  title?: string;
  aspect?: "9 / 16" | "4 / 5";
  afterPhoto?: number;
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
  /** Gallery rows filled by shape (two landscapes, three portraits), so each photo shows smaller. */
  compactGallery?: boolean;
  /** Shown in order. A wedding's (collection's) first landscape film opens its page, under the title. */
  films?: ProjectFilm[];
}

/** What stands for a category on Home and atop its page: a cover and one line under its name. */
export type CategoryShowcase = Pick<Project, "title" | "cover">;

/** One card on /works: a project, or on "All" a whole collection (every wedding behind one card). */
export interface WorkCard extends CategoryShowcase {
  key: string;
  href: string;
  category: CategorySlug;
  hasFilms: boolean;
}

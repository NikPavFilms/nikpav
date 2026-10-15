import { cn } from "@/lib/general/utils";
import type { ProjectFilm as Film } from "@/lib/works/types";

// The project's film: YouTube (privacy-enhanced embed) or a self-hosted file that only
// downloads when the visitor presses play. Portrait films keep their own ratio.
export const ProjectFilm = ({ film, title }: { film: Film; title: string }) => (
  <div
    className={cn("w-full overflow-hidden bg-ink", !film.aspect && "aspect-video")}
    style={film.aspect ? { aspectRatio: film.aspect } : undefined}
  >
    {film.type === "youtube" ? (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${film.id}?rel=0`}
        title={title}
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="size-full"
      />
    ) : (
      <video controls playsInline preload="none" poster={film.poster} className="size-full object-cover">
        <source src={film.src} type="video/mp4" />
      </video>
    )}
  </div>
);

export const filmKey = (film: Film) => (film.type === "youtube" ? film.id : film.src);

interface FilmFigureProps {
  film: Film;
  /** Names the player when the film has no title of its own. */
  fallbackTitle: string;
}

// A film with its caption; reels (portrait films) get the smaller caption that fits their grid.
export const FilmFigure = ({ film, fallbackTitle }: FilmFigureProps) => (
  <figure>
    <ProjectFilm film={film} title={film.title ?? fallbackTitle} />
    {film.title && (
      <figcaption className={cn("text-muted-foreground", film.aspect ? "mt-3 text-sm" : "mt-4")}>{film.title}</figcaption>
    )}
  </figure>
);

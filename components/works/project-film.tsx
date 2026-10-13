import type { ProjectFilm as Film } from "@/lib/works/types";

// The project's film: YouTube (privacy-enhanced embed) or a self-hosted file that only
// downloads when the visitor presses play.
export const ProjectFilm = ({ film, title }: { film: Film; title: string }) => (
  <div className="aspect-video w-full overflow-hidden bg-ink">
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

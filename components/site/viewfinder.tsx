import { cn } from "@/lib/general/utils";

const CORNERS = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "right-0 bottom-0 border-r border-b",
] as const;

interface ViewfinderProps {
  /** Placement/visibility overrides, e.g. an always-visible frame. */
  className?: string;
  /** Corner size and colour overrides. */
  cornerClassName?: string;
}

// Camera focus brackets. By default they settle into place when the parent `group` is
// hovered or focused; pass `opacity-100 scale-100` for a permanent frame.
export const Viewfinder = ({ className, cornerClassName }: ViewfinderProps) => (
  <span
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-5 scale-105 opacity-0 transition-all duration-500 ease-cinematic group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100",
      className,
    )}
  >
    {CORNERS.map((position) => (
      <span key={position} className={cn("absolute size-5 border-foreground/80", position, cornerClassName)} />
    ))}
  </span>
);

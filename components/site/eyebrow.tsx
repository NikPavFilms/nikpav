import { cn } from "@/lib/general/utils";

interface EyebrowProps {
  id?: string;
  /** Section number shown before the rule, e.g. "02". */
  index?: string;
  /** "muted" on plain sections, "light" over photos and video. */
  tone?: "muted" | "light";
  as?: "p" | "h2";
  className?: string;
  children: React.ReactNode;
}

// The small wide-tracked label with a hairline rule that sits above every title.
export const Eyebrow = ({ id, index, tone = "muted", as: Tag = "p", className, children }: EyebrowProps) => (
  <Tag
    id={id}
    className={cn(
      "eyebrow flex items-center gap-3",
      tone === "muted" ? "text-muted-foreground" : "text-foreground/75",
      className,
    )}
  >
    {index && <span className="text-foreground tracking-[0.08em] tabular-nums">{index}</span>}
    <span aria-hidden className={cn("h-px w-8", tone === "muted" ? "bg-foreground/30" : "bg-foreground/50")} />
    {children}
  </Tag>
);

import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { cn } from "@/lib/general/utils";

interface SectionTitleProps {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
}

/** Eyebrow + section h2, for layouts that place (and animate) the title themselves. */
export const SectionTitle = ({ id, index, eyebrow, title }: SectionTitleProps) => (
  <>
    <Eyebrow index={index}>{eyebrow}</Eyebrow>
    <h2 id={id} className="title-display mt-5 text-[clamp(3rem,7.5vw,6.75rem)]">
      {title}
    </h2>
  </>
);

interface SectionHeadingProps extends SectionTitleProps {
  description?: string;
  className?: string;
  /** Right-aligned slot on desktop, e.g. a "View all" link. */
  children?: React.ReactNode;
}

export const SectionHeading = ({ description, className, children, ...title }: SectionHeadingProps) => (
  <Reveal className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}>
    <div className="max-w-3xl">
      <SectionTitle {...title} />
      {description && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </div>
    {children}
  </Reveal>
);

"use client";

import { m } from "framer-motion";

export const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
}

// Fades and lifts its children once they scroll into view. `data-reveal` lets the
// <noscript> rule in the site layout show content when JavaScript never runs.
export const Reveal = ({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) => {
  const Component = as === "li" ? m.li : m.div;

  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE_CINEMATIC }}
    >
      {children}
    </Component>
  );
};

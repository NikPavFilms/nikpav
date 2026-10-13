"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

// LazyMotion + `m` keeps the motion bundle small; reducedMotion="user" drops transforms
// for visitors who ask the OS for less motion.
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  </LazyMotion>
);

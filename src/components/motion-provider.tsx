"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Global Motion settings  respects the user's prefers-reduced-motion setting.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

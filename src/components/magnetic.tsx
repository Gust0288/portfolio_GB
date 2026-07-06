"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// Wraps a link/button so it subtly pulls toward the cursor on hover.
export function Magnetic({
  children,
  strength = 0.4,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handleMouseMove(event: MouseEvent<HTMLSpanElement>) {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}

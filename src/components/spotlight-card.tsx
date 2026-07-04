"use client";

import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// Kort med accent-glow der følger cursoren. Ren visuel effekt, ingen JS udover CSS-variabler.
export function SpotlightCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
      className={cn(
        "group/spot relative overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow duration-300 hover:shadow-lg hover:ring-primary/25",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

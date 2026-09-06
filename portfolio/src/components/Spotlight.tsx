"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor spotlight.
 *
 * Position is written straight to CSS custom properties on the element inside
 * a rAF, so pointer movement never touches React state. The previous version
 * called setState on every mousemove, which re-rendered the whole page tree.
 *
 * Skipped entirely for coarse pointers (no cursor to follow) and for users who
 * ask for reduced motion.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    el.style.opacity = "1";
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 0px), rgba(94, 234, 212, 0.06), transparent 80%)",
      }}
    />
  );
}

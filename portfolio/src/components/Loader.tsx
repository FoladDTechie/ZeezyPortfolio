"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/**
 * Intro overlay.
 *
 * Renders *over* the page rather than replacing it, so the real hero is still
 * the LCP element and the content is in the DOM from first paint. It shows once
 * per session, and not at all under reduced motion. It starts fully
 * transparent, so the skip path unmounts it without a visible flash.
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"idle" | "in" | "done">("idle");
  const reduce = useReducedMotion();

  useEffect(() => {
    const finish = () => {
      setPhase("done");
      onDone();
    };

    const seen =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("intro-seen") === "1";

    if (reduce || seen) {
      const skip = setTimeout(finish, 0);
      return () => clearTimeout(skip);
    }

    sessionStorage.setItem("intro-seen", "1");
    const enter = setTimeout(() => setPhase("in"), 60);
    const leave = setTimeout(finish, 1100);
    return () => {
      clearTimeout(enter);
      clearTimeout(leave);
    };
  }, [reduce, onDone]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-bg transition-opacity duration-500 ${
        phase === "in" ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`rounded-card border border-line bg-surface p-4 transition-transform duration-700 ${
          phase === "in" ? "scale-100" : "scale-95"
        }`}
      >
        <Image
          src="/images/nft_image.webp"
          alt=""
          width={160}
          height={160}
          className="h-40 w-40 object-contain"
        />
      </div>
    </div>
  );
}

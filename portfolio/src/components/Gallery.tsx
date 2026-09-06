"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Pause, Play } from "lucide-react";

type GalleryImage = { id: string; src: string; label: string };

const galleryImages: GalleryImage[] = [
  { id: "01", src: "/images/img1.png", label: "Community building" },
  { id: "02", src: "/images/img2.jpg", label: "Hardware assembly" },
  { id: "03", src: "/images/img3.jpg", label: "Fitness routine" },
  { id: "04", src: "/images/img4.jpg", label: "Akwa Ibom Tech Week" },
  { id: "05", src: "/images/img5.jpg", label: "Power Nexus Challenge" },
  { id: "06", src: "/images/aktw power nexus.jfif", label: "AKTW Million Naira win" },
  { id: "07", src: "/images/_MG_0140.JPG", label: "Team photo" },
  { id: "08", src: "/images/IMG_1596.JPG", label: "Event capture" },
  { id: "09", src: "/images/IMG_9640 (1).JPG", label: "Group shot" },
];

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const open = useCallback((image: GalleryImage, trigger: HTMLElement) => {
    returnFocusRef.current = trigger;
    setSelected(image);
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    returnFocusRef.current?.focus();
  }, []);

  // Dialog behaviour: focus in, trap Tab, Escape to close, lock body scroll.
  useEffect(() => {
    if (!selected) return;

    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, close]);

  // Reduced motion turns the marquee into a plain horizontal scroller.
  const isMarquee = !reduce;
  const strip = isMarquee ? [...galleryImages, ...galleryImages] : galleryImages;

  return (
    <div className="w-full">
      {isMarquee && (
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex items-center gap-2 rounded-chip border border-line px-3 py-1.5 font-jetbrains-mono text-xs text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
            style={{ touchAction: "manipulation" }}
          >
            {paused ? (
              <Play size={13} aria-hidden="true" />
            ) : (
              <Pause size={13} aria-hidden="true" />
            )}
            {paused ? "Play" : "Pause"}
            <span className="sr-only"> image marquee</span>
          </button>
        </div>
      )}

      <div
        className={
          isMarquee
            ? "relative -mx-5 overflow-hidden sm:-mx-8"
            : "-mx-5 overflow-x-auto sm:-mx-8"
        }
      >
        <ul
          className={`flex w-max gap-3 px-5 sm:px-8 ${isMarquee ? "marquee-track" : ""}`}
          data-paused={paused ? "true" : undefined}
        >
          {strip.map((img, i) => {
            // The duplicated half is presentational: it repeats the same items.
            const isClone = i >= galleryImages.length;
            return (
              <li key={`${img.id}-${i}`} aria-hidden={isClone || undefined}>
                <button
                  type="button"
                  tabIndex={isClone ? -1 : undefined}
                  onClick={(e) => open(img, e.currentTarget)}
                  className="group flex flex-col gap-2 text-left"
                  style={{ touchAction: "manipulation" }}
                >
                  <span className="relative block h-[200px] w-[280px] overflow-hidden rounded-card">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </span>
                  <span className="font-jetbrains-mono text-[11px] tracking-wide whitespace-nowrap text-fg-subtle transition-colors group-hover:text-accent">
                    {img.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md sm:p-8"
            style={{ overscrollBehavior: "contain" }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-5xl flex-col items-center gap-4"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close image"
                className="absolute -top-2 right-0 z-10 rounded-full bg-white/10 p-2 text-fg-strong transition-colors hover:bg-accent hover:text-black sm:-top-4"
                style={{ touchAction: "manipulation" }}
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="relative h-[70vh] w-full">
                <Image
                  src={selected.src}
                  alt={selected.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="rounded-card object-contain"
                />
              </div>

              <p
                id={titleId}
                className="font-jetbrains-mono text-sm tracking-wide text-accent"
              >
                {selected.label}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .marquee-track {
          animation: marquee 45s linear infinite;
        }
        .marquee-track:hover,
        .marquee-track[data-paused="true"] {
          animation-play-state: paused;
        }
        /* Keep the strip still while a thumbnail inside it has keyboard focus. */
        .marquee-track:focus-within {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

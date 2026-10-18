"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryImage = { id: string; src: string; label: string; alt: string };

const galleryImages: GalleryImage[] = [
  {
    id: "01",
    src: "/images/pcbway-group-photo.jpg",
    label: "Community building",
    alt: "About twenty-five people posing for a group photo in a classroom, in front of a whiteboard with a Raspberry Pi and PCBWay banner.",
  },
  {
    id: "02",
    src: "/images/img2.jpg",
    label: "Hardware assembly",
    alt: "Working on a circuit at an electronics workbench, wearing a face mask, with a soldering station and a small fan on the bench.",
  },
  {
    id: "03",
    src: "/images/img3.jpg",
    label: "Fitness routine",
    alt: "Mirror selfie in a gym, standing beside a weight machine.",
  },
  {
    id: "04",
    src: "/images/img4.jpg",
    label: "Akwa Ibom Tech Week",
    alt: "Standing on a red carpet in front of the Akwa Ibom Tech Week 2025 backdrop.",
  },
  {
    id: "05",
    src: "/images/img5.jpg",
    label: "Power Nexus Challenge",
    alt: "Five people holding a One Million Naira cheque made out to Power Nexus for the AKTW Collaboration Challenge, at Akwa Ibom Tech Week 2025.",
  },
  {
    id: "06",
    src: "/images/aktw-power-nexus.jpg",
    label: "AKTW Million Naira win",
    alt: "On stage at Akwa Ibom Tech Week 2025 with arms raised, alongside teammates, as the Power Nexus win is announced.",
  },
  {
    id: "07",
    src: "/images/_MG_0140.JPG",
    label: "Team photo",
    alt: "The Power Nexus team on stage holding the One Million Naira cheque, with the cheque also shown on the screen behind them.",
  },
  {
    id: "08",
    src: "/images/IMG_1596.JPG",
    label: "Event capture",
    alt: "Standing at the Build-A-Tech Incubator booth beside a smart-home demo board with labelled sensors, next to an AirChain sign.",
  },
  {
    id: "09",
    src: "/images/IMG_9640.JPG",
    label: "Group shot",
    alt: "Holding a cable at the Build-A-Tech booth beside the smart-home demo board, with visitors behind, at Akwa Ibom Tech Week.",
  },
];

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Static thumbnail grid (it used to be an auto-scrolling marquee) with a
 * keyboard-trapped lightbox. Nothing moves unless the visitor asks it to.
 */
export default function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
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

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryImages.map((img) => (
          <li key={img.id}>
            <button
              type="button"
              onClick={(e) => open(img, e.currentTarget)}
              className="group block w-full text-left"
              style={{ touchAction: "manipulation" }}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-card border border-edge">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover transition-opacity duration-150 group-hover:opacity-85"
                />
              </span>
              <span className="meta mt-2 block group-hover:text-accent">{img.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/95 p-4 sm:p-8"
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
              className="btn btn-secondary self-end"
              style={{ touchAction: "manipulation" }}
            >
              <X size={16} aria-hidden="true" />
              Close
            </button>
            <div className="relative h-[70vh] w-full">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
            <p id={titleId} className="meta text-fg">
              {selected.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { id: "01", src: "/images/img1.png",                  label: "COMMUNITY_BUILDING" },
  { id: "02", src: "/images/img2.jpg",                  label: "HARDWARE_ASSEMBLY" },
  { id: "03", src: "/images/img3.jpg",                  label: "FITNESS_ROUTINE" },
  { id: "04", src: "/images/img4.jpg",                  label: "AKWA_IBOM_TECH_WEEK" },
  { id: "05", src: "/images/img5.jpg",                  label: "POWER_NEXUS_CHALLENGE" },
  { id: "06", src: "/images/aktw power nexus.jfif",     label: "AKTW_MILLION_NAIRA_WIN" },
  { id: "07", src: "/images/_MG_0140.JPG",              label: "TEAM_PHOTO" },
  { id: "08", src: "/images/IMG_1596.JPG",              label: "EVENT_CAPTURE" },
  { id: "09", src: "/images/IMG_9640 (1).JPG",          label: "GROUP_SHOT" },
];

// Duplicate for seamless infinite loop
const marqueeImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
  const [selected, setSelected] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="w-full">
      {/* Marquee strip — bleeds to viewport edges */}
      <div className="relative -mx-4 md:-mx-8 overflow-hidden">
        <div className="marquee-track flex gap-3 w-max">
          {marqueeImages.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              className="flex-shrink-0 flex flex-col gap-2 cursor-pointer group"
              onClick={() => setSelected(galleryImages.find(g => g.id === img.id) ?? null)}
            >
              <div className="overflow-hidden rounded-lg" style={{ height: 200 }}>
                <img
                  src={img.src}
                  alt={img.label}
                  className="h-full w-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
                  draggable={false}
                />
              </div>
              <div className="font-jetbrains-mono text-[10px] text-gray-600 tracking-widest whitespace-nowrap">
                [fig_0x{img.id}: {img.label}]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#050505]/85 backdrop-blur-md cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition z-50"
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.92, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative max-w-5xl w-full flex flex-col items-center gap-4 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full max-h-[75vh] object-contain rounded-lg"
                draggable={false}
              />
              <div className="font-jetbrains-mono text-xs text-accent tracking-widest uppercase">
                [fig_0x{selected.id}: {selected.label}]
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

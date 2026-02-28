"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const galleryImages = [
    { id: "01", src: "/images/img1.png", label: "COMMUNITY_BUILDING", caption: "Community building and education with Raspberry Pi Foundation & PCBWay." },
    { id: "02", src: "/images/img2.jpg", label: "HARDWARE_ASSEMBLY", caption: "Prototyping and soldering embedded systems hardware." },
    { id: "03", src: "/images/img3.jpg", label: "FITNESS_ROUTINE", caption: "Maintaining physical fitness." },
    { id: "04", src: "/images/img4.jpg", label: "AKWA_IBOM_TECH_WEEK", caption: "Attending Akwa Ibom Tech Week 2025." },
    { id: "05", src: "/images/img5.jpg", label: "POWER_NEXUS_CHALLENGE", caption: "Winning the Collaboration Challenge with Power Nexus." },
    { id: "06", src: "/images/aktw power nexus.jfif", label: "AKTW_MILLION_NAIRA_WIN", caption: "Team celebration after winning One Million Naira at AKTW Collaboration Challenge 2025." },
    { id: "07", src: "/images/_MG_0140.JPG", label: "TEAM_PHOTO", caption: "Team photo with colleagues." },
    { id: "08", src: "/images/IMG_1596.JPG", label: "EVENT_CAPTURE", caption: "Event documentation and memories." },
    { id: "09", src: "/images/IMG_9640 (1).JPG", label: "GROUP_SHOT", caption: "Group gathering and celebration." }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [dragConstraint, setDragConstraint] = useState(0);

    useEffect(() => {
        const updateConstraint = () => {
            if (carouselRef.current) {
                setDragConstraint(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };

        updateConstraint();
        window.addEventListener("resize", updateConstraint);
        return () => window.removeEventListener("resize", updateConstraint);
    }, []);

    return (
        <div className="w-full">
            {/* Gallery Header */}
            <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Visual Archive</h3>
                <p className="text-sm text-gray-400">Moments from the journey of building at the intersection of hardware and climate.</p>
            </div>

            {/* Horizontal Picture Gallery */}
            <div className="w-full overflow-hidden" ref={carouselRef}>
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ right: 0, left: -dragConstraint }}
                    dragElastic={0.1}
                >
                    {galleryImages.map((img) => (
                        <motion.div
                            key={img.id}
                            className="min-w-[280px] md:min-w-[320px] flex-shrink-0 flex flex-col gap-3"
                        >
                            <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                                [fig_0x{img.id}: {img.label}]
                            </div>
                            <motion.div
                                className="aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-[#1a1a1a] cursor-pointer"
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover pointer-events-none"
                                    draggable={false}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#050505]/80 backdrop-blur-md cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-accent transition hover:text-black z-50"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full flex flex-col items-center gap-4 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.label}
                                className="w-full max-h-[75vh] object-contain rounded-[8px]"
                                draggable={false}
                            />
                            <div className="text-center w-full mt-2 space-y-2">
                                <div className="font-mono text-xs text-accent tracking-widest uppercase">
                                    [fig_0x{selectedImage.id}: {selectedImage.label}]
                                </div>
                                <p className="font-sans text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
                                    {selectedImage.caption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

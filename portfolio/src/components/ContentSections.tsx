"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const projects = [
    {
        id: "[0x01]",
        name: "AirChain",
        description: "Decentralized Air Quality Monitoring Network. Exploring the intersection of environment and determinism.",
        link: "https://airchain.ng",
        tech: "c++, esp32, react, supabase"
    },
    {
        id: "[0x02]",
        name: "Smart Irrigation Dashboard",
        description: "IoT dashboard for agricultural sensor data. Live metrics and actionable decision-making nodes.",
        link: "github.com",
        tech: "react, pwa, tailwind, openweather API"
    },
    {
        id: "[0x03]",
        name: "Merkle Tree Anchor",
        description: "Cryptographic proof mechanism for sensor data integrity on Cardano.",
        link: "github.com",
        tech: "plutus v3, aiken"
    }
];

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

export default function ContentSections() {
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
        <div className="flex flex-col gap-24 text-gray-400">
            {/* About Section */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">About</h2>
                </div>
                <div className="space-y-4 leading-relaxed font-sans text-lg text-gray-300">
                    <p>
                        I am an <span className="font-semibold text-white">embedded systems engineer</span> and <span className="font-semibold text-white">climate technology entrepreneur</span> from Lagos, Nigeria, working at the intersection of environmental infrastructure, public policy, and innovation. Growing up in a city where air pollution is pervasive yet under-measured shaped my commitment to building practical systems that make environmental risks visible and actionable.
                    </p>
                    <p>
                        My entrepreneurial journey began during my time with <span className="font-semibold text-white">Enactus Nigeria</span>, where I was exposed to enterprise-driven approaches to social impact. This experience influenced my decision to found <span className="font-semibold text-white">AirChain</span>, a venture developing community-powered environmental monitoring infrastructure for resource-constrained urban contexts.
                    </p>
                    <p>
                        Beyond my startup, I have volunteered as a convener for <span className="font-semibold text-white">Raspberry Pi Foundation</span> education programs, supporting grassroots technology learning. These experiences collectively shaped my belief that entrepreneurship is a tool for building scalable climate solutions that empower communities and inform better public decision-making.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Projects</h2>
                </div>
                <div>
                    <ul className="group/list space-y-12">
                        {projects.map((project, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
                                    <header className="z-10 mb-2 mt-1text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2 flex flex-col pt-1" aria-label="Project ID">
                                        <div className="font-mono text-xs font-medium tracking-widest text-gray-500 mb-2">
                                            {project.id}
                                        </div>
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-bold text-lg text-white group-hover:text-accent transition-colors leading-snug">
                                            <a className="inline-flex items-baseline gap-1" href={project.link} target="_blank" rel="noreferrer">
                                                <span>{project.name}</span>
                                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                                            </a>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-gray-400">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-col font-mono text-xs text-accent opacity-80 uppercase tracking-wider">
                                            <span>stack: {project.tech}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Horizontal Picture Gallery */}
                    <div className="mt-16 w-full overflow-hidden" ref={carouselRef}>
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
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Mission</h2>
                </div>
                <div className="space-y-4 leading-relaxed font-sans text-gray-300">
                    <p className="border-l-2 border-accent pl-4 text-white font-medium italic">
                        "If you can't measure it, you can't improve it." — William Thomson (Lord Kelvin)
                    </p>
                    <p className="text-lg">
                        We stand at a critical intersection where physical infrastructure meets cryptographic certainty. The systems we build over the next decade will define our relationship with the planet's resource boundary constraints. My work is focused on creating the embedded hardware and decentralized verification protocols necessary for actionable climate insight.
                    </p>
                </div>
            </section>

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

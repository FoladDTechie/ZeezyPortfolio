"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import ChessCard from "@/components/ChessCard";
import PhysicalBenchmark from "@/components/PhysicalBenchmark";
import Gallery from "@/components/Gallery";

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

export default function ContentSections() {
    return (
        <div className="flex flex-col gap-24 text-gray-400">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Introduction</h2>
                </div>
                <div className="space-y-4 leading-relaxed font-['Space_Grotesk'] text-lg text-gray-300">
                    <p>
                        I am an <span className="font-semibold text-white">embedded systems engineer</span>, <span className="font-semibold text-white">blockchain technical writer/dev</span>, <span className="font-semibold text-white">IoT dev</span>, and <span className="font-semibold text-white">smart systems dev</span> from Lagos, Nigeria, working at the intersection of environmental infrastructure, public policy, and innovation. Growing up in a city where air pollution is pervasive yet under-measured shaped my commitment to building practical systems that make environmental risks visible and actionable.
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

            {/* Writing Section */}
            <section id="writing" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Writing</h2>
                </div>
                <ThoughtLeadership />
            </section>

            {/* Extended Profile Section */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Extended Profile</h2>
                </div>
                <div className="space-y-4 leading-relaxed font-sans text-lg text-gray-300">
                    <p>
                        Beyond the surface of my embedded systems engineering work, I spend a significant portion of my time building community initiatives. I grew up in Lagos, Nigeria, witnessing firsthand how the lack of actionable public data stalls environmental policy. My driving force is ensuring the technology we introduce scales to those who need it most.
                    </p>
                </div>
            </section>

            {/* Community & Volunteering Section */}
            <section id="community" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Community & Volunteering</h2>
                </div>
                <ul className="group/list space-y-12">
                    <li>
                        <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2 pt-1">
                                <div className="font-mono text-[11px] font-medium tracking-widest">2023 — Present</div>
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-bold text-lg text-white leading-snug">
                                    Cardano Catalyst Circle
                                </h3>
                                <p className="font-mono text-sm text-accent mb-4 mt-1">Community Reviewer</p>
                                <p className="mt-2 text-sm leading-normal text-gray-400">
                                    Contributing to the governance of the Cardano ecosystem by reviewing technical proposals and ensuring ecosystem growth.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2 pt-1">
                                <div className="font-mono text-[11px] font-medium tracking-widest">2022 — Present</div>
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-bold text-lg text-white leading-snug">
                                    Local STEM Mentorship
                                </h3>
                                <p className="font-mono text-sm text-accent mb-4 mt-1">Embedded Systems Mentor</p>
                                <p className="mt-2 text-sm leading-normal text-gray-400">
                                    Teaching IoT concepts and C++ programming to university students, bridging the gap between hardware theory and practice.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            {/* SDG Commitments Section */}
            <section id="sdg" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">SDG Commitments</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-[#1a1a1a]/50">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-md`} style={{ backgroundColor: "#FD9D24" }}>
                            11
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Sustainable Cities</h3>
                            <p className="text-sm text-gray-400 mt-1">Building IoT networks for smarter, cleaner urban environments.</p>
                        </div>
                    </div>
                    <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-[#1a1a1a]/50">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-md`} style={{ backgroundColor: "#3F7E44" }}>
                            13
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Climate Action</h3>
                            <p className="text-sm text-gray-400 mt-1">Leveraging blockchain for verifiable environmental data.</p>
                        </div>
                    </div>
                    <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all col-span-1 md:col-span-2 hover:bg-[#1a1a1a]/50">
                        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-accent">
                            <Users size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Tech for Good</h3>
                            <p className="text-sm text-gray-400 mt-1">Creating open-source tools for social impact and grass-roots enablement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Stats Section */}
            <section id="stats" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Personal Stats</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ChessCard />
                    <PhysicalBenchmark />
                </div>
            </section>

            {/* Visual Archive Section */}
            <section id="gallery" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Visual Archive</h2>
                </div>
                <Gallery />
            </section>

            </div>
    );
}

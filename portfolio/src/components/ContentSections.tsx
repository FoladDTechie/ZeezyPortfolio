"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThoughtLeadership from "@/components/ThoughtLeadership";

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

            </div>
    );
}

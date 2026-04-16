"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import ChessCard from "@/components/ChessCard";
import PhysicalBenchmark from "@/components/PhysicalBenchmark";
import Gallery from "@/components/Gallery";
import CommunitySection from "@/components/CommunitySection";

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
            {/* Hero Section - Clean Welcome */}
            <section id="about" className="min-h-[60vh] flex items-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="font-mono text-sm text-gray-500"
                        >
                            Hi, welcome to my website.
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="font-mono text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide"
                        >
                            Azeez Bello.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                        >
                            I build deterministic systems across embedded infrastructure, IoT, and digital trust.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Building deterministic architectures for a transparent world. Bridging the gap between physical infrastructure and digital truth.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* About Section with NFT */}
            <section id="about-details" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - About Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-mono text-2xl text-white mb-6">About</h2>
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p className="text-lg">
                                    I am an embedded systems engineer and blockchain technical writer from Lagos, Nigeria, working at the intersection of environmental infrastructure, public policy, and innovation.
                                </p>
                                <p className="text-lg">
                                    My entrepreneurial journey began during my time with Enactus Nigeria, where I was exposed to enterprise-driven approaches to social impact. This experience influenced my decision to found AirChain, a venture developing community-powered environmental monitoring infrastructure for resource-constrained urban contexts.
                                </p>
                                <p className="text-lg">
                                    Beyond my startup, I have volunteered as a convener for Raspberry Pi Foundation education programs, supporting grassroots technology learning. These experiences collectively shaped my belief that entrepreneurship is a tool for building scalable climate solutions that empower communities and inform better public decision-making.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - NFT Image */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] shadow-md p-4 mb-4 group-hover:border-[rgba(255,255,255,0.1)] transition-all duration-300">
                                    <img
                                        src="/images/nft_image.webp"
                                        alt="Azeez Bello - Digital Identity"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-contain"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </Link>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="font-mono text-gray-500 text-sm hover:text-accent transition-colors"
                            >
                                <Link
                                    href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors"
                                >
                                    view in explorer link
                                </Link>
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
                <h2 className="font-mono text-2xl text-white mb-12">Projects</h2>
                <div>
                    <ul className="group/list space-y-12">
                        {projects.map((project, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2 flex flex-col pt-1" aria-label="Project ID">
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
            <section id="mission" className="scroll-mt-24">
                <h2 className="font-mono text-2xl text-white mb-12">Mission</h2>
                <div className="space-y-4 leading-relaxed font-sans text-gray-300">
                    <div className="font-mono text-sm text-gray-500 mb-6">
                        // principle
                        <br />
                        "If you can't measure it, you can't improve it." <span className="text-gray-600">Lord Kelvin</span>
                    </div>
                    <p className="text-lg">
                        We stand at a critical intersection where physical infrastructure meets cryptographic certainty. The systems we build over the next decade will define our relationship with the planet's resource boundary constraints. My work is focused on creating the embedded hardware and decentralized verification protocols necessary for actionable climate insight.
                    </p>
                </div>
            </section>

            {/* Writing Section */}
            <section id="writing" className="scroll-mt-24">
                <h2 className="font-mono text-2xl text-white mb-12">Writing</h2>
                <ThoughtLeadership />
            </section>

            {/* Community Section */}
            <section id="community" className="scroll-mt-24">
                <CommunitySection />
            </section>

            {/* Personal Stats Section */}
            <section id="stats" className="scroll-mt-24">
                <h2 className="font-mono text-2xl text-white mb-12">Personal Stats</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ChessCard />
                    <PhysicalBenchmark />
                </div>
            </section>

            {/* Visual Archive Section */}
            <section id="gallery" className="scroll-mt-24">
                <h2 className="font-mono text-2xl text-white mb-12">Visual Archive</h2>
                <Gallery />
            </section>
        </div>
    );
}

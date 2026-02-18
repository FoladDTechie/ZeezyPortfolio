"use client";

import { motion } from "framer-motion";
import { Users, Heart, Globe, BookOpen, Joystick, Plane, Code, ArrowUpRight } from "lucide-react";

// SDG Icons (Simple SVG representations or placeholders)
const SdgIcon = ({ id, color }: { id: number, color: string }) => (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-md`} style={{ backgroundColor: color }}>
        {id}
    </div>
);

const projects = [
    {
        name: "AirChain",
        role: "Lead Developer",
        tech: "Cardano, Esp32, React",
        description: "Decentralized Air Quality Monitoring Network.",
        year: "2025"
    },
    {
        name: "Smart Irrigation Dashboard",
        role: "Frontend Engineer",
        tech: "React, PWA, Tailwind",
        description: "IoT dashboard for agricultural sensor data.",
        year: "2024"
    },
    {
        name: "Merkle Tree Anchor",
        role: "Blockchain Engineer",
        tech: "Plutus V3, Aiken",
        description: "Cryptographic proof mechanism for sensor data.",
        year: "2024"
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 bg-white selection:bg-accent selection:text-white">
            <div className="max-w-[1200px] mx-auto w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Personal & Professional</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">More than just code.</h1>
                </motion.div>

                {/* Bio Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-20 grid grid-cols-1 gap-8 text-lg text-gray-600 leading-relaxed"
                >
                    <p>
                        I am an <span className="font-semibold text-gray-900">embedded systems engineer</span> and <span className="font-semibold text-gray-900">climate technology entrepreneur</span> from Lagos, Nigeria, working at the intersection of environmental infrastructure, public policy, and innovation. Growing up in a city where air pollution is pervasive yet under-measured shaped my commitment to building practical systems that make environmental risks visible and actionable.
                    </p>
                    <p>
                        My entrepreneurial journey began during my time with <span className="font-semibold text-gray-900">Enactus Nigeria</span>, where I was exposed to enterprise-driven approaches to social impact. This experience influenced my decision to found <span className="font-semibold text-gray-900">AirChain</span>, a venture developing community-powered environmental monitoring infrastructure for resource-constrained urban contexts.
                    </p>
                    <p>
                        Beyond my startup, I have volunteered as a convener for <span className="font-semibold text-gray-900">Raspberry Pi Foundation</span> education programs, supporting grassroots technology learning. These experiences collectively shaped my belief that entrepreneurship is a tool for building scalable climate solutions that empower communities and inform better public decision-making.
                    </p>
                </motion.section>

                {/* Community & Volunteering */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Users className="text-accent" /> Community & Volunteering
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Cardano Catalyst Circle</h3>
                            <p className="text-gray-600 mb-4">Community Reviewer & Proposal Assessor</p>
                            <p className="text-sm text-gray-500">Contributing to the governance of the Cardano ecosystem by reviewing technical proposals and ensuring ecosystem growth.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Local STEM Mentorship</h3>
                            <p className="text-gray-600 mb-4">Embedded Systems Mentor</p>
                            <p className="text-sm text-gray-500">Teaching IoT concepts and C++ programming to university students, bridging the gap between hardware theory and practice.</p>
                        </motion.div>
                    </div>
                </section>

                {/* SDGs & Interests */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Globe className="text-accent" /> SDG Commitments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/40 transition-colors">
                            <SdgIcon id={11} color="#FD9D24" />
                            <div>
                                <h3 className="font-bold text-gray-900">Sustainable Cities</h3>
                                <p className="text-sm text-gray-500 mt-1">Building IoT networks for smarter, cleaner urban environments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/40 transition-colors">
                            <SdgIcon id={13} color="#3F7E44" />
                            <div>
                                <h3 className="font-bold text-gray-900">Climate Action</h3>
                                <p className="text-sm text-gray-500 mt-1">Leveraging blockchain for verifiable environmental data.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/40 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                <Heart size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Tech for Good</h3>
                                <p className="text-sm text-gray-500 mt-1">Creating open-source tools for social impact.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hobbies Grid */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Joystick className="text-accent" /> Offline Mode
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Drone Piloting', 'Technical Writing', 'Travel', 'Gaming'].map((hobby, i) => (
                            <div key={i} className="aspect-square rounded-2xl bg-gray-50 flex flex-col items-center justify-center gap-3 hover:bg-accent/10 hover:text-accent transition-colors cursor-default">
                                {i === 0 && <Plane size={24} />}
                                {i === 1 && <BookOpen size={24} />}
                                {i === 2 && <Globe size={24} />}
                                {i === 3 && <Joystick size={24} />}
                                <span className="font-semibold text-sm">{hobby}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Full Project List */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Code className="text-accent" /> Project Archive
                    </h2>
                    <div className="overflow-hidden rounded-3xl border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-500">
                            <thead className="bg-gray-50 text-gray-900 uppercase font-bold text-xs">
                                <tr>
                                    <th className="px-6 py-4">Year</th>
                                    <th className="px-6 py-4">Project</th>
                                    <th className="px-6 py-4 hidden md:table-cell">Role</th>
                                    <th className="px-6 py-4 hidden md:table-cell">Tech Stack</th>
                                    <th className="px-6 py-4">Link</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {projects.map((project, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-xs">{project.year}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">{project.name}</td>
                                        <td className="px-6 py-4 hidden md:table-cell">{project.role}</td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <div className="flex gap-2">
                                                {project.tech.split(',').map(t => (
                                                    <span key={t} className="px-2 py-0.5 rounded-full bg-gray-100 text-xs border border-gray-200">{t.trim()}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
                                                View <ArrowUpRight size={14} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </main>
    );
}

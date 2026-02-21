"use client";

import { motion } from "framer-motion";
import { Users, Heart, Globe, BookOpen, Joystick, Plane, Code, ArrowUpRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

// SDG Icons (Simple SVG representations or placeholders)
const SdgIcon = ({ id, color }: { id: number, color: string }) => (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-md`} style={{ backgroundColor: color }}>
        {id}
    </div>
);

const allProjects = [
    {
        name: "AirChain",
        role: "Lead Developer",
        tech: "cardano, esp32, react",
        description: "Decentralized Air Quality Monitoring Network.",
        year: "2025"
    },
    {
        name: "Smart Irrigation Dashboard",
        role: "Frontend Engineer",
        tech: "react, pwa, tailwind",
        description: "IoT dashboard for agricultural sensor data.",
        year: "2024"
    },
    {
        name: "Merkle Tree Anchor",
        role: "Blockchain Engineer",
        tech: "plutus v3, aiken",
        description: "Cryptographic proof mechanism for sensor data.",
        year: "2024"
    }
];

export default function AboutPage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <Sidebar />
                <main className="pt-24 lg:w-[52%] lg:py-24 text-gray-400">

                    {/* Header */}
                    <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Full Profile</h2>
                    </div>

                    <div className="flex flex-col gap-24">

                        {/* Bio Review */}
                        <section aria-label="Extended Biograpy">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl font-bold tracking-tight text-white mb-8 sm:hidden"
                            >
                                Extended Profile
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-4 leading-relaxed text-gray-300"
                            >
                                <p>
                                    Beyond the surface of my embedded systems engineering work, I spend a significant portion of my time building community initiatives. I grew up in Lagos, Nigeria, witnessing firsthand how the lack of actionable public data stalls environmental policy. My driving force is ensuring the technology we introduce scales to those who need it most.
                                </p>
                            </motion.div>
                        </section>

                        {/* Community & Volunteering */}
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 mt-2 flex items-center gap-3">
                                <Users size={16} className="text-accent" /> Community & Volunteering
                            </h2>
                            <ul className="group/list space-y-12">
                                {/* Role 1 */}
                                <li>
                                    <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
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
                                {/* Role 2 */}
                                <li>
                                    <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a1a1a]/50 lg:group-hover:drop-shadow-lg"></div>
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

                        {/* SDG Commitments */}
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                                <Globe size={16} className="text-accent" /> SDG Commitments
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-[#1a1a1a]/50">
                                    <SdgIcon id={11} color="#FD9D24" />
                                    <div>
                                        <h3 className="font-bold text-white">Sustainable Cities</h3>
                                        <p className="text-sm text-gray-400 mt-1">Building IoT networks for smarter, cleaner urban environments.</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-[#1a1a1a]/50">
                                    <SdgIcon id={13} color="#3F7E44" />
                                    <div>
                                        <h3 className="font-bold text-white">Climate Action</h3>
                                        <p className="text-sm text-gray-400 mt-1">Leveraging blockchain for verifiable environmental data.</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-start gap-4 p-4 rounded-xl transition-all col-span-1 md:col-span-2 hover:bg-[#1a1a1a]/50">
                                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-accent">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Tech for Good</h3>
                                        <p className="text-sm text-gray-400 mt-1">Creating open-source tools for social impact and grass-roots enablement.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Hobbies Grid */}
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                                <Joystick size={16} className="text-accent" /> Offline Mode
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {['Drone Piloting', 'Technical Writing', 'Travel', 'Gaming'].map((hobby, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-[#0a0a0a] hover:bg-accent/10 hover:border-accent/50 text-gray-300 transition-colors cursor-default text-sm">
                                        {i === 0 && <Plane size={14} />}
                                        {i === 1 && <BookOpen size={14} />}
                                        {i === 2 && <Globe size={14} />}
                                        {i === 3 && <Joystick size={14} />}
                                        <span className="font-mono text-xs uppercase tracking-widest">{hobby}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Full Project List */}
                        <section className="mb-24">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                                <Code size={16} className="text-accent" /> Project Archive
                            </h2>
                            <div className="overflow-x-auto text-left text-sm text-gray-400 font-sans">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-800 text-white text-xs text-left uppercase font-mono tracking-widest">
                                            <th className="py-4 pr-4 font-normal">Year</th>
                                            <th className="py-4 px-4 font-normal">Project</th>
                                            <th className="py-4 px-4 hidden md:table-cell font-normal">Role</th>
                                            <th className="py-4 px-4 hidden lg:table-cell font-normal">Tech</th>
                                            <th className="py-4 pl-4 font-normal text-right">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        {allProjects.map((project, i) => (
                                            <tr key={i} className="group hover:bg-[#1a1a1a]/30 transition-colors">
                                                <td className="py-4 pr-4 font-mono text-xs text-gray-500 whitespace-nowrap">{project.year}</td>
                                                <td className="py-4 px-4 font-bold text-gray-200">{project.name}</td>
                                                <td className="py-4 px-4 hidden md:table-cell text-sm">{project.role}</td>
                                                <td className="py-4 px-4 hidden lg:table-cell font-mono text-[11px] text-accent tracking-widest uppercase">
                                                    {project.tech}
                                                </td>
                                                <td className="py-4 pl-4 text-right">
                                                    <a href="#" className="inline-flex items-center gap-1 text-gray-400 hover:text-accent transition-colors">
                                                        <span>View</span> <ArrowUpRight size={14} />
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
            </div>
        </div>
    );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-20">
            {/* Background Dot Pattern - Darker dots for light mode */}
            <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#E5E7EB 2px, transparent 2px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Ambient Glow - Warm Amber */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
            />

            <div className="max-w-[1800px] mx-auto w-full z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm">
                        👋 Hi, I'm Azeez
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[9vw] leading-[0.9] font-bold tracking-tighter text-gray-900 whitespace-nowrap mb-6"
                >
                    BRIDGING THE
                    <br />
                    <span className="text-accent relative inline-block">
                        eUTXO
                        {/* Underline decoration */}
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-light opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span> GAP.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-2xl mb-10"
                >
                    <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        Embedded Systems Engineer & Climate Tech Entrepreneur building practical <span className="text-gray-900 font-bold decoration-accent/30 underline decoration-4 underline-offset-4">Environmental Infrastructure</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                        View Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
                    </button>

                    <Link href="/about" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
                        More About Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

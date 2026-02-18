"use client";

import { motion } from "framer-motion";

export default function AirChainSpotlight() {
    return (
        <section className="w-full py-12 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto w-full">
                {/* Dashboard Card Container - Light Mode */}
                <div className="w-full bg-white border border-gray-200 rounded-3xl overflow-hidden relative p-8 md:p-16 shadow-xl shadow-gray-200/50">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase">
                                Featured Project
                            </h2>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900">
                            AIRCHAIN
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                        {/* Left: Technical Architecture SVG - Dark on Light */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-full aspect-square border-2 border-gray-100 rounded-3xl p-8 relative overflow-hidden group bg-gray-50"
                        >
                            {/* Abstract SVG Visualization */}
                            <svg
                                viewBox="0 0 400 400"
                                className="w-full h-full stroke-gray-400 group-hover:stroke-accent transition-colors duration-500"
                                fill="none"
                                strokeWidth="2"
                            >
                                <path d="M200 350 V 200" className="opacity-30" />
                                <circle cx="200" cy="350" r="12" className="fill-accent stroke-none" />

                                <path d="M200 200 L 100 100" />
                                <path d="M200 200 L 300 100" />

                                <rect x="70" y="70" width="60" height="60" rx="12" fill="white" className="stroke-current" />
                                <rect x="270" y="70" width="60" height="60" rx="12" fill="white" className="stroke-current" />

                                {/* Data flow particles */}
                                <circle cx="200" cy="200" r="4" className="fill-gray-900 animate-[ping_3s_ease-in-out_infinite]" />
                            </svg>
                            <div className="absolute bottom-6 right-6 font-mono text-xs text-gray-400 font-medium bg-white px-2 py-1 rounded border border-gray-100">
                                ARCH_DIAGRAM_V1.0
                            </div>
                        </motion.div>

                        {/* Right: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">
                                A hybrid sensing network anchoring{" "}
                                <span className="text-gray-900 font-bold bg-accent/20 px-1 rounded">
                                    PM2.5/PM10 cryptographic proofs
                                </span>{" "}
                                (Merkle Roots) to Cardano via Plutus V3.
                            </p>

                            <div className="flex gap-4 pt-4 border-t border-gray-100 mt-8">
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Leveraging embedded sensors to validate environmental data on-chain, creating a trustless layer for climate verification.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#F9FAFB]/80 border-b border-gray-200"
        >
            <Link href="/" className="font-bold text-lg tracking-tight text-gray-900">
                Azeez<span className="text-accent">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link href="/" className="hover:text-accent transition-colors">Overview</Link>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                <Link href="#" className="hover:text-accent transition-colors">Projects</Link>
            </div>

            <button className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-[#D97706] transition-all duration-300 shadow-lg shadow-accent/30 group">
                <span>Let's Talk</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </button>

            {/* Mobile Menu Button - Placeholder */}
            <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
                <div className="w-full h-[2px] bg-gray-900 rounded-full" />
                <div className="w-2/3 h-[2px] bg-gray-900 rounded-full ml-auto" />
            </div>
        </motion.nav>
    );
}

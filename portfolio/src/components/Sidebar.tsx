"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

const navLinks = [
    { name: "about", href: "/about", number: "01." },
    { name: "projects", href: "/#projects", number: "02." },
    { name: "mission", href: "/#mission", number: "03." },
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("");

    const pathname = usePathname();

    // Simple scroll spy setup
    useEffect(() => {
        if (pathname === '/about') {
            setActiveSection('about');
            return;
        }

        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let current = "";
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute("id") || "";
                }
            });
            setActiveSection(current);
        };

        handleScroll(); // Trigger once on mount to set initial state
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between py-12 lg:py-24 px-6 lg:pl-24 lg:pr-12">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3 font-[family-name:var(--font-cy-grotesk)]"
                    style={{ letterSpacing: '-0.05em' }}
                >
                    Azeez Bello
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg sm:text-xl font-medium text-gray-200 mb-4 h-8"
                >
                    <Typewriter
                        words={['Embedded Systems Engineer', 'Hardware Architect', 'Hardware Developer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xs text-sm text-gray-400 mb-16 leading-relaxed font-[family-name:var(--font-poppins)]"
                >
                    Building deterministic architectures for a transparent world. Bridging the gap between physical infrastructure and digital truth.
                </motion.p>

                <nav className="hidden lg:block">
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.name;
                            return (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`group flex items-center gap-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${isActive ? 'text-accent' : 'text-gray-500 hover:text-accent'}`}
                                    >
                                        <span className={`w-8 h-[1px] transition-all duration-300 ${isActive ? 'w-16 bg-accent' : 'bg-gray-700 group-hover:w-16 group-hover:bg-accent'}`}></span>
                                        <span className="opacity-70">{link.number}</span>
                                        <span>[{link.name}]</span>
                                    </Link>
                                </motion.li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 lg:mt-0 flex items-center gap-6 text-gray-400"
            >
                <li>
                    <a href="https://github.com/azeez" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/azeez" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/azeez" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a href="mailto:hello@azeez.com" className="hover:text-white transition-colors">
                        <span className="sr-only">Email</span>
                        <Mail className="w-5 h-5" />
                    </a>
                </li>
            </motion.ul>
        </header>
    );
}

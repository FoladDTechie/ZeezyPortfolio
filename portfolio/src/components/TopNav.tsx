"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Mission", href: "#mission" },
  { name: "Writing", href: "#writing" },
  { name: "Community", href: "#community" },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldHide = scrollDirection === "down" && scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-jetbrains-mono text-accent text-sm tracking-widest hover:text-white transition-colors z-10"
        >
          AB
        </Link>

        {/* Centered pill nav — desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-jetbrains-mono text-xs text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.07)] transition-all px-3 py-1.5 rounded-full"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 z-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-jetbrains-mono text-xs text-gray-400 hover:text-accent transition-colors border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full hover:border-accent"
          >
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden mx-4 mb-2 bg-[rgba(15,15,16,0.95)] border border-[rgba(255,255,255,0.08)] rounded-2xl backdrop-blur-md">
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block font-jetbrains-mono text-sm text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all py-2 px-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-3 mt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-jetbrains-mono text-sm text-gray-400 hover:text-accent transition-colors py-2 px-3 rounded-lg hover:bg-[rgba(255,255,255,0.06)]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

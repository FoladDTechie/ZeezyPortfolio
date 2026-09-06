"use client";

import { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Mission", href: "#mission" },
  { name: "Writing", href: "#writing" },
  { name: "Community", href: "#community" },
  { name: "Quests", href: "#side-quests" },
  { name: "Lab", href: "/lab" },
  { name: "Profile", href: "/about" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/18QR-bdUOj7XQ6p1l4pGC581mTiYsuOO3/view";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const drawerId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Drives off a motion value, so state only updates when the boolean actually
  // flips rather than on every scroll frame.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > 120 && y > previous);
  });

  // Escape closes the drawer and returns focus to the button that opened it.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        !drawerRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="z-10 font-jetbrains-mono text-sm font-semibold tracking-widest text-accent transition-colors hover:text-fg-strong"
        >
          AB
          <span className="sr-only">, Azeez Bello, home</span>
        </Link>

        {/* Desktop: single-line centred pill */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-line bg-white/[0.04] px-1.5 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block rounded-full px-3 py-1.5 font-jetbrains-mono text-xs text-fg-muted transition-colors hover:bg-white/[0.07] hover:text-fg-strong"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="z-10 flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-line px-3 py-1.5 font-jetbrains-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent lg:block"
          >
            Resume
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={drawerId}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-chip p-1.5 text-fg-muted transition-colors hover:text-accent lg:hidden"
            style={{ touchAction: "manipulation" }}
          >
            {isOpen ? (
              <X size={20} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer. Kept mounted-on-open so focus order stays predictable. */}
      {isOpen && (
        <div
          id={drawerId}
          ref={drawerRef}
          className="mx-5 mb-2 rounded-panel border border-line bg-surface/95 backdrop-blur-md sm:mx-8 lg:hidden"
        >
          <ul className="space-y-0.5 p-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-chip px-3 py-2.5 font-jetbrains-mono text-sm text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg-strong"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block rounded-chip px-3 py-2.5 font-jetbrains-mono text-sm text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-accent"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

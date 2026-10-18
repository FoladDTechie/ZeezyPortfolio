"use client";

import { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = { name: string; href: string; desktop?: boolean };

/** `desktop` links make up the flat top row; the mobile drawer lists them all. */
const navLinks: NavLink[] = [
  { name: "Work", href: "#work", desktop: true },
  { name: "Experience", href: "#experience", desktop: true },
  { name: "Community", href: "#community", desktop: true },
  { name: "Physical AI", href: "#physical-ai" },
  { name: "Writing", href: "#writing" },
  { name: "About", href: "#about" },
  { name: "Quests", href: "#side-quests" },
  { name: "Contact", href: "#contact", desktop: true },
  { name: "Lab", href: "/lab" },
  { name: "Profile", href: "/about" },
];

const desktopLinks = navLinks.filter((link) => link.desktop);
const trackedIds = desktopLinks
  .filter((link) => link.href.startsWith("#"))
  .map((link) => link.href.slice(1));

const RESUME_URL =
  "https://drive.google.com/file/d/18QR-bdUOj7XQ6p1l4pGC581mTiYsuOO3/view";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  // Flat links have no backing of their own, so the bar gains one once content scrolls under it.
  const [scrolled, setScrolled] = useState(false);
  const drawerId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Drives off a motion value, so state only updates when the boolean actually
  // flips rather than on every scroll frame.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > 120 && y > previous);
    setScrolled(y > 8);
  });

  // Underline the section currently in the reading band; clear it in sections
  // with no top-level link (hero, mission, side quests, ...).
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(trackedIds.includes(id) ? id : null);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent"}`}
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
          Abdulazeez Bello
          <span className="sr-only">, home</span>
        </Link>

        {/* Desktop: flat uppercase links, accent underline on the active section */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {desktopLinks.map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block py-1.5 font-jetbrains-mono text-xs tracking-[0.12em] whitespace-nowrap uppercase transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-fg-strong after:scale-x-100"
                      : "text-fg-muted after:scale-x-0 hover:text-fg-strong hover:after:scale-x-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
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

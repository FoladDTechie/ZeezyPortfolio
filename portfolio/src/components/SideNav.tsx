"use client";

import { useState, useEffect } from "react";

type Item = { glyph: string; href: string; id: string; label: string };

const navItems: Item[] = [
  { glyph: "⌂", href: "#home", id: "home", label: "Home" },
  { glyph: "0x", href: "#projects", id: "projects", label: "Projects" },
  { glyph: "✦", href: "#writing", id: "writing", label: "Writing" },
  { glyph: "◈", href: "#community", id: "community", label: "Community" },
  { glyph: "⚔", href: "#side-quests", id: "side-quests", label: "Side quests" },
  { glyph: "✉", href: "#contact", id: "contact", label: "Contact" },
  { glyph: "⚗", href: "/lab", id: "lab", label: "The lab" },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 rounded-panel border border-line bg-surface/90 p-2 backdrop-blur-md xl:flex"
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            aria-current={isActive ? "true" : undefined}
            className={`group relative flex h-9 w-9 items-center justify-center rounded-chip font-jetbrains-mono text-xs transition-colors ${
              isActive
                ? "bg-accent text-black"
                : "bg-white/[0.04] text-fg-subtle hover:bg-white/[0.08] hover:text-accent"
            }`}
          >
            <span aria-hidden="true">{item.glyph}</span>
            <span className="sr-only">{item.label}</span>

            {/* Visual-only tooltip; the label above is what AT announces. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-chip border border-line bg-surface px-2 py-1 font-jetbrains-mono text-xs text-fg-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

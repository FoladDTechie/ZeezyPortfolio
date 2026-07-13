"use client";

import { useState, useEffect } from "react";

const navItems = [
  { icon: "⌂", href: "#home", id: "home", label: "home" },
  { icon: "0x", href: "#projects", id: "projects", label: "projects" },
  { icon: "✦", href: "#writing", id: "writing", label: "writing" },
  { icon: "◈", href: "#community", id: "community", label: "community" },
  { icon: "⚔", href: "#side-quests", id: "side-quests", label: "side_quests" },
  { icon: "✉", href: "#contact", id: "contact", label: "contact" },
  { icon: "⚗", href: "/lab", id: "lab", label: "the_lab" },
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
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 p-2 rounded-2xl bg-[rgba(15,15,16,0.85)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md"
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            title={item.label}
            aria-label={item.label}
            className={`group relative flex items-center justify-center w-9 h-9 rounded-lg font-jetbrains-mono text-xs transition-all ${
              isActive
                ? "text-black bg-accent"
                : "text-gray-500 bg-[rgba(255,255,255,0.04)] hover:text-accent hover:bg-[rgba(255,255,255,0.08)]"
            }`}
          >
            {item.icon}
            <span className="absolute right-full mr-3 px-2 py-1 rounded-md bg-[rgba(15,15,16,0.95)] border border-[rgba(255,255,255,0.08)] font-jetbrains-mono text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              [{item.label}]
            </span>
          </a>
        );
      })}
    </nav>
  );
}

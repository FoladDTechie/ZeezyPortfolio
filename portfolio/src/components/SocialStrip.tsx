"use client";

import { Github, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/FoladDTechie",
    icon: <Github className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "X",
    href: "https://x.com/AY_ZED_",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:abdulazeez.bello@airchain.ng",
    icon: <Mail className="h-4 w-4" aria-hidden="true" />,
  },
];

export default function SocialStrip() {
  return (
    <nav
      aria-label="Elsewhere"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1.5 rounded-panel border border-line bg-surface/90 p-2 backdrop-blur-md xl:flex"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="group relative flex h-9 w-9 items-center justify-center rounded-chip bg-white/[0.04] text-fg-subtle transition-colors hover:bg-white/[0.08] hover:text-accent"
        >
          {social.icon}
          <span className="sr-only">{social.label}</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-chip border border-line bg-surface px-2 py-1 font-jetbrains-mono text-xs text-fg-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            {social.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

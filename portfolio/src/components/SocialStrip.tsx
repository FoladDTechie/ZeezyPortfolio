"use client";

import { Github, Mail } from "lucide-react";

const socials = [
  {
    label: "github",
    href: "https://github.com/FoladDTechie",
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: "x",
    href: "https://x.com/AY_ZED_",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "mail",
    href: "mailto:abdulazeez.bello@airchain.ng",
    icon: <Mail className="w-4 h-4" />,
  },
];

export default function SocialStrip() {
  return (
    <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1.5 p-2 rounded-2xl bg-[rgba(15,15,16,0.85)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 bg-[rgba(255,255,255,0.04)] hover:text-accent hover:bg-[rgba(255,255,255,0.08)] transition-all"
        >
          {social.icon}
        </a>
      ))}
      <div className="w-px h-10 bg-[rgba(255,255,255,0.1)] mt-1" />
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type LabProjectLayoutProps = {
  projectId: string;
  status: string;
  category: string;
  title: string;
  hook: ReactNode;
  links: { label: string; href: string }[];
  children: ReactNode;
};

export default function LabProjectLayout({
  projectId,
  status,
  category,
  title,
  hook,
  links,
  children,
}: LabProjectLayoutProps) {
  return (
    <main id="main" className="min-h-screen px-6 py-24 md:px-12">
      <div className="max-w-[720px] mx-auto text-fg-muted">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="font-jetbrains-mono text-xs px-3 py-1 rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-fg-muted">
              [PROJECT_ID: {projectId}]
            </span>
            <span className="font-jetbrains-mono text-xs px-3 py-1 rounded-md border border-[rgba(94,234,212,0.2)] bg-[rgba(94,234,212,0.05)] text-accent">
              [STATUS: {status}]
            </span>
            <span className="font-jetbrains-mono text-xs px-3 py-1 rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-fg-muted">
              [CATEGORY: {category}]
            </span>
          </div>

          <h1 className="font-jetbrains-mono text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            {title}
          </h1>

          <blockquote className="font-jetbrains-mono text-sm text-fg-muted leading-[1.8] border-l-2 border-[rgba(94,234,212,0.3)] pl-6 mb-16 italic">
            {hook}
          </blockquote>

          <div
            className="font-jetbrains-mono text-sm leading-[1.8] space-y-16"
            style={{ lineHeight: 1.8 }}
          >
            {children}
          </div>

          <div className="flex flex-wrap gap-3 mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-jetbrains-mono text-xs px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] text-fg-muted hover:text-accent hover:border-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export function LabSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-jetbrains-mono text-xs text-fg-subtle tracking-widest mb-4">
        <span aria-hidden="true">{"// "}</span>
        {title}
      </h2>
      <div className="text-fg space-y-4">{children}</div>
    </section>
  );
}

export function LabRelated({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-16 p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
      <span className="font-jetbrains-mono text-xs text-fg-subtle">
        <span aria-hidden="true">{"// "}</span>related_build{" "}
        <span aria-hidden="true">→</span>{" "}
      </span>
      <span className="font-jetbrains-mono text-xs text-fg-muted">{label} </span>
      <Link
        href={href}
        className="font-jetbrains-mono text-xs text-accent hover:text-white transition-colors"
      >
        [read →]
      </Link>
    </div>
  );
}

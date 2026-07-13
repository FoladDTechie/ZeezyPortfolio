"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type LabProject = {
  id: string;
  title: string;
  description: string;
  status: "FUNCTIONAL" | "CONCEPT" | "COMPLETE";
  tags: string[];
  href?: string;
};

const labProjects: LabProject[] = [
  {
    id: "[0x01]",
    title: "Cardano Doorbell",
    description:
      "A Pico W that lights an LED when a tagged transaction hits a wallet. Chain state made physical.",
    status: "FUNCTIONAL",
    tags: ["HARDWARE", "CARDANO"],
    href: "/lab/cardano-doorbell",
  },
  {
    id: "[0x02]",
    title: "ADAClock",
    description:
      "A Cardano-native BlockClock. E-ink desk object cycling live network metrics.",
    status: "CONCEPT",
    tags: ["HARDWARE", "CARDANO"],
    href: "/lab/adaclock",
  },
  {
    id: "[0x03]",
    title: "Pico W ADA Ticker",
    description:
      "Live ADA/USD price on an SSD1306 OLED. First hardware + crypto integration.",
    status: "COMPLETE",
    tags: ["HARDWARE"],
  },
];

const statusConfig = {
  FUNCTIONAL: { dot: "bg-green-400" },
  CONCEPT: { dot: "bg-sky-400" },
  COMPLETE: { dot: "bg-accent" },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
});

export default function LabIndexPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-4">
            // the_lab
          </div>
          <p className="font-jetbrains-mono text-sm text-gray-400 leading-relaxed max-w-lg">
            Passion builds. Documented like readmes, written like stories.
          </p>
          <Link
            href="/#home"
            className="inline-block mt-6 font-jetbrains-mono text-xs text-gray-500 hover:text-accent transition-colors"
          >
            ← back_to_site
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labProjects.map((project, i) => {
            const s = statusConfig[project.status];
            const isLinked = Boolean(project.href);
            const CardInner = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-jetbrains-mono text-xs text-gray-700 tabular-nums">
                    {project.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <span className="font-jetbrains-mono text-xs text-gray-600">
                      STATUS: {project.status}
                    </span>
                  </div>
                </div>
                <h2 className="font-jetbrains-mono text-lg text-gray-200 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="font-jetbrains-mono text-xs text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains-mono text-xs px-2 py-0.5 rounded-md border border-[rgba(94,234,212,0.2)] bg-[rgba(94,234,212,0.05)] text-accent/70"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  {isLinked && (
                    <span className="font-jetbrains-mono text-xs text-gray-500 group-hover:text-accent transition-colors shrink-0">
                      read_build →
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <motion.div key={project.id} {...fadeUp(0.1 + i * 0.05)}>
                {isLinked ? (
                  <Link href={project.href!} className="group block bento-card h-full">
                    {CardInner}
                  </Link>
                ) : (
                  <div className="group block bento-card h-full opacity-70 cursor-default">
                    {CardInner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

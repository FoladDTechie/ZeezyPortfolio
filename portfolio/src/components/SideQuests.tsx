"use client";

import { motion, useReducedMotion } from "framer-motion";

type Quest = {
  id: string;
  title: string;
  category: keyof typeof categoryColor;
  status: "active" | "achieved";
  progress: number;
  current?: string;
  target: string;
  deadline: string;
  review: string;
  links?: { label: string; url: string }[];
};

/** All verified at 4.5:1+ against the card surface. */
const categoryColor = {
  PRODUCTIVITY: "#5eead4",
  MENTAL: "#c084fc",
  PHYSICAL: "#fbbf24",
  HARDWARE: "#38bdf8",
  CODE: "#f97316",
  BLOCKCHAIN: "#818cf8",
} as const;

const quests: Quest[] = [
  {
    id: "0x01",
    title: "Obsidian Thinking System",
    category: "PRODUCTIVITY",
    status: "active",
    progress: 30,
    target: "Consistent daily notes + project decision logs",
    deadline: "Q3 2026",
    review:
      "Started the vault, habit is inconsistent. Need the template structure before the habit sticks. Goal is to stop storing project context in my head.",
  },
  {
    id: "0x02",
    title: "Reach 1000 ELO",
    category: "MENTAL",
    status: "active",
    progress: 43,
    current: "629 ELO",
    target: "1000 ELO",
    deadline: "Dec 2026",
    review:
      "Playing regularly but not studying deliberately. Need structured tactics practice, not just games.",
    links: [{ label: "chess.com/ayy_zedd", url: "https://www.chess.com/member/ayy_zedd" }],
  },
  {
    id: "0x03",
    title: "Bench 120kg",
    category: "PHYSICAL",
    status: "active",
    progress: 70,
    current: "105kg",
    target: "120kg",
    deadline: "Q4 2026",
    review: "15kg gap. Progressive overload plus sleep consistency. Close.",
  },
  {
    id: "0x04",
    title: "Sub 30 Min 5K",
    category: "PHYSICAL",
    status: "active",
    progress: 10,
    target: "Under 30:00",
    deadline: "Q4 2026",
    review:
      "Haven't started structured running. Three runs a week for eight weeks is enough to hit this.",
  },
  {
    id: "0x05",
    title: "Learning Rust",
    category: "CODE",
    status: "active",
    progress: 15,
    target: "Build one functional Rust CLI tool",
    deadline: "Q1 2027",
    review:
      "Started Rustlings. The borrow checker is humbling. Goal is one real CLI tool, not just tutorials.",
  },
  {
    id: "0x06",
    title: "Pi Harness, Local Coding Agent",
    category: "HARDWARE",
    status: "active",
    progress: 10,
    target: "Custom Pi harness config on Raspberry Pi 5 with model routing",
    deadline: "Q1 2027",
    review:
      "Pi Harness exists as a platform. The goal is a custom harness with AirChain and Haulink contexts pre-loaded, routing between a local model offline and the Claude API online via Tailscale.",
  },
  {
    id: "0x07",
    title: "Cardano RWA via Haulink",
    category: "BLOCKCHAIN",
    status: "active",
    progress: 55,
    target: "First real freight corridor tokenised on mainnet",
    deadline: "Q3 2026",
    review:
      "Mainnet transactions confirmed. The Gimbalabs hackathon submission is the first milestone. The RWA angle is the long game.",
    links: [{ label: "haulink.xyz", url: "https://haulink.xyz" }],
  },
  {
    id: "0x08",
    title: "Blockchain Fundamentals",
    category: "BLOCKCHAIN",
    status: "active",
    progress: 65,
    target: "Complete structured curriculum",
    deadline: "Q3 2026",
    review: "Practical knowledge is ahead of formal knowledge. Filling the gaps.",
  },
  {
    id: "0x09",
    title: "Pico W ADA Ticker",
    category: "HARDWARE",
    status: "achieved",
    progress: 100,
    target: "Live ADA price on a Pico W display",
    deadline: "Completed",
    review:
      "Done. Raspberry Pi Pico W pulling the live ADA/USD price and displaying it on screen. First hardware and crypto integration. Simple but satisfying.",
  },
];

export default function SideQuests() {
  const reduce = useReducedMotion();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {quests.map((quest, i) => {
        const color = categoryColor[quest.category];
        const achieved = quest.status === "achieved";
        const barColor = achieved ? "#4ade80" : color;

        return (
          <motion.li
            key={quest.id}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: { delay: (i % 3) * 0.08, duration: 0.5 },
                })}
            className="bento-card flex flex-col"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="font-jetbrains-mono text-xs tabular-nums text-fg-subtle">
                {quest.id}
              </span>
              <span
                className="rounded-chip border px-2 py-0.5 font-jetbrains-mono text-xs"
                style={{
                  color,
                  borderColor: `${color}40`,
                  background: `${color}14`,
                }}
              >
                {quest.category}
              </span>
            </div>

            <h3 className="mb-2 flex items-center gap-2 font-jetbrains-mono text-sm font-bold text-fg-strong">
              {quest.title}
              {achieved && (
                <span className="text-status-live">
                  <span aria-hidden="true">✓</span>
                  <span className="sr-only">(achieved)</span>
                </span>
              )}
            </h3>

            <p className="flex-1 text-sm leading-relaxed text-fg-muted">
              {quest.review}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between gap-3 font-jetbrains-mono text-xs">
                <span className="min-w-0 text-fg-muted">
                  {quest.current ? `${quest.current} → ${quest.target}` : quest.target}
                </span>
                <span className="shrink-0 tabular-nums text-fg">{quest.progress}%</span>
              </div>

              <div
                role="progressbar"
                aria-valuenow={quest.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${quest.title} progress`}
                className="h-1 overflow-hidden rounded-full bg-white/[0.08]"
              >
                <motion.div
                  {...(reduce
                    ? { style: { width: `${quest.progress}%`, background: barColor } }
                    : {
                        initial: { width: 0 },
                        whileInView: { width: `${quest.progress}%` },
                        viewport: { once: true },
                        transition: { delay: 0.25, duration: 0.8, ease: "easeOut" as const },
                        style: { background: barColor },
                      })}
                  className="h-full rounded-full"
                />
              </div>

              <div className="flex items-center justify-between gap-3 font-jetbrains-mono text-xs">
                <span className={achieved ? "text-status-live" : "text-fg-subtle"}>
                  {achieved ? "Achieved" : `Due ${quest.deadline}`}
                </span>
                {quest.links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-fg-muted transition-colors hover:text-accent"
                  >
                    {link.label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

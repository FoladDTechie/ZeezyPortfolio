"use client";

import { motion } from "framer-motion";

type Quest = {
  id: string;
  title: string;
  category: string;
  status: "active" | "achieved";
  progress: number;
  current?: string;
  target: string;
  deadline: string;
  review: string;
  links?: { label: string; url: string }[];
};

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
      "Started vault, inconsistent habit. Need to build the template structure before the habit sticks. Goal is to stop storing project context in my head.",
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
    links: [{ label: "chess.com/ayy_zedd →", url: "https://www.chess.com/member/ayy_zedd" }],
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
    review: "15kg gap. Progressive overload + sleep consistency. Close.",
  },
  {
    id: "0x04",
    title: "Sub 30 Min 5K",
    category: "PHYSICAL",
    status: "active",
    progress: 10,
    target: "< 30:00",
    deadline: "Q4 2026",
    review:
      "Haven't started structured running. 3 runs/week for 8 weeks is enough to hit this.",
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
    title: "Pi Harness — Local Coding Agent",
    category: "HARDWARE",
    status: "active",
    progress: 10,
    target: "Custom Pi harness config on Raspberry Pi 5 with model routing",
    deadline: "Q1 2027",
    review:
      "Pi Harness exists as a platform. The goal is a custom harness with AirChain and Haulink contexts pre-loaded, routing between local model (offline) and Claude API (online) via Tailscale.",
  },
  {
    id: "0x07",
    title: "Exploring Cardano RWA via Haulink",
    category: "BLOCKCHAIN",
    status: "active",
    progress: 55,
    target: "First real freight corridor tokenised on mainnet",
    deadline: "Q3 2026",
    review:
      "Mainnet transactions confirmed. Gimbalabs hackathon submission is the first milestone. RWA angle is the long game.",
    links: [{ label: "haulink.xyz →", url: "https://haulink.xyz" }],
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
      "Done. Raspberry Pi Pico W pulling live ADA/USD price and displaying on screen. First hardware + crypto integration. Simple but satisfying.",
  },
];

const categoryColor: Record<string, string> = {
  PRODUCTIVITY: "#5eead4", // teal
  MENTAL: "#c084fc", // purple
  PHYSICAL: "#fbbf24", // amber
  HARDWARE: "#38bdf8", // sky
  CODE: "#f97316", // orange
  BLOCKCHAIN: "#818cf8", // indigo
};

export default function SideQuests() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quests.map((quest, i) => {
        const color = categoryColor[quest.category] ?? "#5eead4";
        const achieved = quest.status === "achieved";
        return (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bento-card flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-jetbrains-mono text-xs text-gray-700 tabular-nums">
                [{quest.id}]
              </span>
              <span
                className="font-jetbrains-mono text-xs px-2 py-0.5 rounded-md border"
                style={{
                  color,
                  borderColor: `${color}40`,
                  background: `${color}0d`,
                }}
              >
                {quest.category}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-jetbrains-mono text-sm text-gray-300 font-bold">
                {quest.title}
              </span>
              {achieved && (
                <span className="font-jetbrains-mono text-xs text-green-400">✓</span>
              )}
            </div>

            <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed flex-1">
              {quest.review}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between font-jetbrains-mono text-xs">
                <span className="text-gray-600">
                  {quest.current ? `${quest.current} → ${quest.target}` : quest.target}
                </span>
                <span className="text-gray-500 tabular-nums">{quest.progress}%</span>
              </div>
              <div className="h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${quest.progress}%` }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ background: achieved ? "#4ade80" : color }}
                />
              </div>
              <div className="flex items-center justify-between font-jetbrains-mono text-xs">
                <span className={achieved ? "text-green-400" : "text-gray-700"}>
                  [{achieved ? "ACHIEVED" : `DUE: ${quest.deadline}`}]
                </span>
                {quest.links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

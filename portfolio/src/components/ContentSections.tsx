"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import CommunitySection from "@/components/CommunitySection";

const projects = [
  {
    id: "[0x01]",
    name: "AirChain",
    description:
      "DePIN air quality monitoring network. ESP32 hardware, MQTT broker, Cardano AIRQ token, Lagos sensor deployment.",
    link: "https://airchain.ng",
    tech: "c++, esp32, react, supabase, cardano",
    status: "live" as const,
  },
  {
    id: "[0x02]",
    name: "Haulink",
    description:
      "Blockchain-anchored freight slot reservation. Atomic booking, SHA-256 proof-of-delivery, CIP-0020 metadata on Cardano.",
    link: "https://haulink.xyz",
    tech: "next.js 14, supabase, mesh sdk, cardano",
    status: "live" as const,
  },
  {
    id: "[0x03]",
    name: "Merkle Tree Anchor",
    description:
      "Cryptographic proof mechanism for sensor data integrity on Cardano.",
    link: "",
    tech: "plutus v3, aiken",
    status: "research" as const,
  },
  {
    id: "[0x04]",
    name: "GroundBase",
    description:
      "Community infrastructure site for makers in Uyo. Notion API-powered opportunity board.",
    link: "https://gndbase.xyz",
    tech: "next.js 14, notion api",
    status: "building" as const,
  },
  {
    id: "[0x05]",
    name: "Pedal Power",
    description:
      "Human-powered generator prototype. ESP32, three OLED displays, INA226 power monitor, 4S2P 21700 battery pack.",
    link: "",
    tech: "arduino c++, esp32",
    status: "prototype" as const,
  },
];

const articles = [
  {
    title: "Life Is Not a Checklist",
    source: "[THE_CONSCIOUS_JOKEMAN]",
    link: "https://abdulazeezfolaranmi.substack.com/p/life-is-not-a-checklist",
  },
  {
    title: "Before the Chain, There Was the Problem",
    source: "[PROJECT_GENIUS]",
    link: "https://projectgenius.substack.com/p/before-the-chain-there-was-the-problem",
  },
  {
    title: "Persistence, Not Disruption",
    source: "[PROJECT_GENIUS]",
    link: "https://projectgenius.substack.com/p/persistence-not-disruption",
  },
];

const statusConfig = {
  live: { dot: "bg-green-400", label: "live" },
  building: { dot: "bg-amber-400", label: "building" },
  prototype: { dot: "bg-sky-400", label: "prototype" },
  research: { dot: "bg-purple-400", label: "research" },
};

const heroTags = ["[embedded]", "[DePIN]", "[Cardano]", "[Uyo]", "[maker]"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
});

export default function ContentSections() {
  return (
    <div className="flex flex-col gap-32 text-gray-400">
      {/* ── Hero — full-width, no card ── */}
      <section
        className="flex flex-col justify-between"
        style={{ minHeight: "80vh", paddingTop: "1rem", paddingBottom: "4rem" }}
      >
        {/* Name + identity */}
        <motion.div {...fadeUp(0.1)} className="space-y-5">
          <p className="font-jetbrains-mono text-xs text-accent tracking-[0.2em] uppercase">
            hi, i&apos;m
          </p>

          <h1
            className="font-jetbrains-mono text-white font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
          >
            Azeez Bello.
          </h1>

          <div className="flex items-center">
            <span className="font-jetbrains-mono text-sm md:text-base text-gray-500">
              &gt; Embedded Systems Engineer. DePIN Builder. Uyo, NG.
            </span>
            <span className="cursor-blink" />
          </div>

          <p className="font-jetbrains-mono text-sm text-gray-400 leading-relaxed max-w-lg">
            Building at the intersection of hardware infrastructure and
            decentralized systems.
          </p>
        </motion.div>

        {/* Tag chips — anchored to bottom of hero */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mt-12">
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="font-jetbrains-mono text-xs px-3 py-1 rounded-md border transition-colors cursor-default"
              style={{
                color: "rgba(94,234,212,0.6)",
                background: "rgba(94,234,212,0.05)",
                borderColor: "rgba(94,234,212,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(94,234,212,0.6)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,0.2)";
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Bento Grid (4 cards) ── */}
      <section>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Projects card */}
            <motion.div
              {...fadeUp(0.1)}
              id="projects"
              className="bento-card scroll-mt-24"
            >
              <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-4">
                // projects
              </div>
              <ul className="space-y-3">
                {projects.map((project) => {
                  const s = statusConfig[project.status];
                  const isLinked = Boolean(project.link);
                  const Wrapper = isLinked ? "a" : "div";
                  const wrapperProps = isLinked
                    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <li key={project.id}>
                      <Wrapper
                        {...(wrapperProps as object)}
                        className={`group flex items-start gap-3 ${isLinked ? "cursor-pointer" : ""}`}
                      >
                        <span className="font-jetbrains-mono text-xs text-gray-700 mt-0.5 shrink-0 tabular-nums">
                          {project.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-jetbrains-mono text-sm text-gray-300 group-hover:text-accent transition-colors">
                              {project.name}
                            </span>
                            <span
                              className={`inline-block w-1.5 h-1.5 rounded-full ${s.dot} shrink-0`}
                            />
                            <span className="font-jetbrains-mono text-xs text-gray-600">
                              {s.label}
                            </span>
                          </div>
                          <p className="font-jetbrains-mono text-xs text-gray-600 mt-0.5 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </Wrapper>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Writing card */}
            <motion.div
              {...fadeUp(0.2)}
              id="writing"
              className="bento-card scroll-mt-24"
            >
              <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-4">
                // writing
              </div>
              <ul className="space-y-4">
                {articles.map((article, i) => (
                  <li key={i}>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="font-jetbrains-mono text-sm text-gray-300 group-hover:text-accent transition-colors leading-snug">
                        {article.title}
                      </div>
                      <div className="font-jetbrains-mono text-xs text-gray-600 mt-0.5">
                        {article.source}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href="https://projectgenius.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains-mono text-xs text-gray-500 hover:text-accent transition-colors"
                >
                  read_all →
                </a>
              </div>
            </motion.div>

            {/* Community card */}
            <motion.div {...fadeUp(0.3)} className="bento-card">
              <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-4">
                // community
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [PI_JAM_UYO]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    Recurring hardware maker event series, Uyo. Vol. 1: May 29 2026, Acceleratez Hub.
                    Sponsors: Raspberry Pi, PCBWay, Hub360, Microscale.ng.
                  </p>
                  <div className="font-jetbrains-mono text-xs text-gray-700 mt-1">
                    [VOL_2: MICROCONTROLLERS &amp; HOME IOT — PENDING]
                  </div>
                </div>
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [GROUNDBASE]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    Builder and maker community infrastructure for Uyo.
                    Discord + Opportunity Board + hardware workshops.
                  </p>
                </div>
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [FOUNDERS_FRIDAY_UYO]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    Regular participant and collaborator.
                  </p>
                </div>
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [INTERSECT_MBO]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    Member of the Cardano ecosystem coordination layer.
                    Credential minted on-chain.
                  </p>
                  <div className="font-jetbrains-mono text-xs text-gray-700 mt-1 break-all">
                    [asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf]
                  </div>
                </div>
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [TEN_JAMAICA_2026]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    AirChain selected as Global Challenge finalist.
                  </p>
                </div>
                <div>
                  <div className="font-jetbrains-mono text-sm text-gray-300 mb-1">
                    [GIMBALABS_HACKATHON]
                  </div>
                  <p className="font-jetbrains-mono text-xs text-gray-600 leading-relaxed">
                    Haulink submission — Piece of Pie hackathon, Draper Dragon venture pitch track.
                  </p>
                  <div className="font-jetbrains-mono text-xs text-gray-700 mt-1">
                    [DEADLINE: 2026-07-19]
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats + Contact card */}
            <motion.div {...fadeUp(0.4)} className="bento-card">
              <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-4">
                // stats + contact
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-jetbrains-mono text-xs text-gray-600">
                    [elo_rating]
                  </span>
                  <a
                    href="https://www.chess.com/member/ayy_zedd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains-mono text-sm font-bold text-white hover:text-accent transition-colors"
                  >
                    629
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-jetbrains-mono text-xs text-gray-600">
                    [bench_press]
                  </span>
                  <a
                    href="https://hevy.com/user/buffzeezy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains-mono text-sm font-bold text-white hover:text-accent transition-colors"
                  >
                    105KG
                  </a>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains-mono text-xs text-gray-600 shrink-0">
                      [mail]
                    </span>
                    <a
                      href="mailto:abdulazeez.bello@airchain.ng"
                      className="font-jetbrains-mono text-xs text-gray-400 hover:text-accent transition-colors truncate"
                    >
                      abdulazeez.bello@airchain.ng
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains-mono text-xs text-gray-600 shrink-0">
                      [x]
                    </span>
                    <a
                      href="https://x.com/azeezbello"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-jetbrains-mono text-xs text-gray-400 hover:text-accent transition-colors"
                    >
                      @azeezbello
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-24 w-full">
        <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-8">
          // about
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 leading-relaxed"
          >
            <p className="font-jetbrains-mono text-base text-gray-300">
              Abdulazeez Bello is an Embedded Systems Engineer and entrepreneur
              based in Uyo, Akwa Ibom, Nigeria. He builds at the intersection
              of hardware infrastructure and decentralized systems —
              co-founding{" "}
              <a
                href="https://airchain.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                AirChain
              </a>
              , a DePIN air quality monitoring network, and{" "}
              <a
                href="https://haulink.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                Haulink
              </a>
              , a blockchain-anchored freight slot platform, both on Cardano.
            </p>
            <p className="font-jetbrains-mono text-base text-gray-300">
              He convenes Pi Jam Uyo, a recurring hardware maker event, and
              runs{" "}
              <a
                href="https://gndbase.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                GroundBase
              </a>{" "}
              — community infrastructure for builders in Uyo. He is a Graduate
              Member of the Nigerian Society of Engineers and an Intersect MBO
              member in the Cardano ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative max-w-[280px] mx-auto">
              <div className="relative block w-full group">
                <div className="relative block w-full rounded-lg bg-accent shadow-lg transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <img
                    src="/images/nft_image.webp"
                    alt="Azeez Bello"
                    className="relative block w-full rounded-lg mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-[#0B0B0C] rounded-lg mix-blend-screen pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 right-3.5 bottom-3.5 border-2 border-accent rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
                </div>
              </div>
              <a
                href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jetbrains-mono text-gray-600 text-xs hover:text-accent transition-colors mt-4 block"
              >
                view in explorer →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission" className="scroll-mt-24 w-full">
        <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-8">
          // mission
        </div>
        <div className="space-y-6">
          <div className="font-jetbrains-mono text-sm text-gray-600 border-l-2 border-[rgba(255,255,255,0.1)] pl-6">
            <span className="text-gray-500 italic">
              "If you can't measure it, you can't improve it."
            </span>
            <span className="block text-gray-700 text-xs mt-1">— Lord Kelvin</span>
          </div>
          <p className="font-jetbrains-mono text-base text-gray-300 leading-relaxed max-w-2xl">
            We stand at a critical intersection where physical infrastructure
            meets cryptographic certainty. The systems we build over the next
            decade will define our relationship with the planet's resource
            boundary constraints. My work is focused on creating the embedded
            hardware and decentralized verification protocols necessary for
            actionable, trustworthy data.
          </p>
        </div>
      </section>

      {/* ── Visual Archive ── */}
      <section id="gallery" className="scroll-mt-24 w-full">
        <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-8">
          // visual archive
        </div>
        <Gallery />
      </section>

      {/* ── Intersect Credential ── */}
      <section id="community" className="scroll-mt-24">
        <CommunitySection />
      </section>
    </div>
  );
}

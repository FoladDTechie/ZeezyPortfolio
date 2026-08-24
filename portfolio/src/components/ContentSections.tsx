"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import CommunitySection from "@/components/CommunitySection";
import SideQuests from "@/components/SideQuests";

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
      "Containerized freight logistics for Nigerian SMEs. Built end-to-end solo over 12 weeks at Gimbalabs Piece of Pie Hackathon 2026. Atomic Postgres slot reservation prevents double-booking under concurrent load — proved on Cardano mainnet with CIP-0020 metadata confirmed in 13 seconds. SHA-256 proof-of-delivery anchored on-chain, box-based cargo estimator (60×60×60cm unit), pilot route Uyo → Lagos.",
    link: "https://haulink.xyz",
    tech: "next.js 14, supabase, mesh sdk, cardano",
    status: "live" as const,
    badge: {
      label: "Featured in Gimbalabs Piece of Pie Yearbook 2026",
      href: "https://gimbalabs.com/piece-of-pie-yearbook/projects/haulink",
    },
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

const stackLayers = [
  {
    label: "INFRA",
    items: [
      "Kubernetes (k3s/k8s, bare metal) · Helm · Docker · GitLab CI/CD",
      "Mosquitto MQTT (multi-listener TLS + ACL) · Keycloak (RBAC, OAuth)",
      "PostgreSQL via CloudNativePG · TLS/PKI + Let's Encrypt",
      "Kubernetes Secrets · ingress/DNS routing",
    ],
  },
  {
    label: "FIRMWARE",
    items: [
      "RP2040/RP2350 (Pico W) · ESP32 · MicroPython + C/C++",
      "Cellular LTE via AT commands (TLS-over-AT) · WiFi/MQTT",
      "Sensor integration (particulate matter, gas, current sensing)",
      "SPI/I²C/UART · watchdog timers · OTA firmware · KiCad",
    ],
  },
  {
    label: "POWER",
    items: [
      "48V LiFePO4 battery systems · Victron BMV-712 (SOC sync)",
      "MPPT solar charge controllers · CC/CV charging",
      "DC-DC buck/boost conversion · custom current-sensing (INA226)",
      "Thermal management · voltage regulation",
    ],
  },
];

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
        id="home"
        className="flex items-center justify-center scroll-mt-24 px-0"
        style={{ minHeight: "100vh" }}
      >
        {/* Name + identity + photo */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-[900px] w-full">
          <motion.div {...fadeUp(0.1)} className="text-center lg:text-left">
            <p className="font-jetbrains-mono text-xs text-accent tracking-[0.2em] uppercase mb-2">
              hi, i&apos;m
            </p>

            <h1
              className="font-jetbrains-mono text-white font-bold leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              Azeez Bello.
            </h1>

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="font-jetbrains-mono text-sm md:text-base text-gray-500">
                &gt; Embedded Systems Engineer. I instrument invisible problems, then fix them.
              </span>
              <span className="cursor-blink" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
              <a
                href="#projects"
                className="font-jetbrains-mono text-xs px-5 py-2.5 rounded-full bg-accent text-black font-bold hover:bg-accent/90 transition-colors"
              >
                [view_projects →]
              </a>
              <a
                href="#writing"
                className="font-jetbrains-mono text-xs px-5 py-2.5 rounded-full border border-[rgba(255,255,255,0.15)] text-gray-400 hover:text-accent hover:border-accent transition-colors"
              >
                [read_writing →]
              </a>
            </div>

            {/* Tag chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="shrink-0"
          >
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: 200,
                height: 200,
                border: "2px dashed var(--accent)",
                boxShadow: "0 0 20px rgba(94,234,212,0.19)",
                padding: 4,
              }}
            >
              <Image
                src="/images/nft_image.webp"
                alt="Azeez Bello"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
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
                      {"badge" in project && project.badge && (
                        <a
                          href={project.badge.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-2 ml-8 font-jetbrains-mono text-xs px-2.5 py-1 rounded-md border border-[rgba(94,234,212,0.2)] bg-[rgba(94,234,212,0.05)] text-accent/80 hover:text-accent hover:border-accent/50 transition-colors"
                        >
                          {project.badge.label} ↗
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href="/lab"
                  className="font-jetbrains-mono text-xs text-gray-500 hover:text-accent transition-colors"
                >
                  more experiments in [the_lab →]
                </a>
              </div>
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
                  <a
                    href="https://drive.google.com/file/d/1Vn8vjOJ4pFEb1hh_J_vwI6Zg8kE-gJok/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/video relative mt-3 flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5 hover:border-accent/40 transition-colors"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/30 shrink-0 group-hover/video:bg-accent/20 transition-colors">
                      <span className="text-accent text-xs ml-0.5">▶</span>
                    </span>
                    <span className="font-jetbrains-mono text-xs text-gray-400 group-hover/video:text-accent transition-colors">
                      Watch the community build session →
                    </span>
                  </a>
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
            <motion.div {...fadeUp(0.4)} id="contact" className="bento-card scroll-mt-24">
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
              Abdulazeez Bello is an Embedded Systems Engineer and technical
              co-founder based in Uyo, Akwa Ibom, Nigeria. He builds physical
              technology end-to-end — from a KiCad schematic and a soldering
              iron, through firmware, up through the Kubernetes cluster the
              hardware reports into.
            </p>
            <p className="font-jetbrains-mono text-base text-gray-300">
              Growing up in Lagos, where air pollution is widespread but
              almost never measured, shaped what he wanted to build:
              technology that makes invisible environmental and
              infrastructure problems visible and actionable. That instinct
              is the origin story behind{" "}
              <a
                href="https://airchain.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                AirChain
              </a>
              , and it shows up in most of his work — don&apos;t theorize
              about a problem, instrument it, then fix it. When something
              breaks, the instinct is to trace the symptom to its root cause,
              not patch around it — whether that&apos;s a UART fault traced
              to a voltage mismatch, or a boost-converter failure traced to a
              thermal issue.
            </p>
            <p className="font-jetbrains-mono text-base text-gray-300">
              He moves comfortably between infrastructure (Kubernetes,
              CI/CD, auth systems), firmware, power electronics, and the
              product side — pitches, technical writing, public speaking,
              and organizing community events. He is a Graduate Member of
              the Nigerian Society of Engineers and an Intersect MBO member.
            </p>
            <p className="font-jetbrains-mono text-base text-gray-300 pt-2 border-t border-[rgba(255,255,255,0.06)]">
              With{" "}
              <a
                href="https://haulink.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                Haulink
              </a>
              , that range extends further: identifying a real ₦2T+ informal
              Nigerian freight market gap, validating pricing against
              informal market rates, and shipping the full product lifecycle
              — schema, auth, booking, payment, tracking, proof-of-delivery,
              on-chain anchoring — solo, over 12 weeks, with a public weekly
              build log. Business development, blockchain engineering, and
              project management, in one build.
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

      {/* ── The Stack ── */}
      <section id="stack" className="scroll-mt-24 w-full">
        <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-2">
          // the_stack
        </div>
        <p className="font-jetbrains-mono text-sm text-gray-500 mb-8">
          infra, firmware, and power, in one product
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stackLayers.map((layer) => (
            <div key={layer.label} className="bento-card">
              <div className="font-jetbrains-mono text-xs text-accent tracking-widest mb-4">
                [{layer.label}]
              </div>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="font-jetbrains-mono text-xs text-gray-500 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="font-jetbrains-mono text-xs text-gray-700">
            all three feed →
          </span>
          <a
            href="https://airchain.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains-mono text-xs px-3 py-1 rounded-md border border-[rgba(94,234,212,0.2)] bg-[rgba(94,234,212,0.05)] text-accent hover:border-accent/50 transition-colors"
          >
            AirChain
          </a>
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

      {/* ── Side Quests ── */}
      <section id="side-quests" className="scroll-mt-24 w-full">
        <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-8">
          // side_quests
        </div>
        <SideQuests />
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

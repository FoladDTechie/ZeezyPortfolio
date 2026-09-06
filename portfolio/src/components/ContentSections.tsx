"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import Gallery from "@/components/Gallery";
import CommunitySection from "@/components/CommunitySection";
import SideQuests from "@/components/SideQuests";

type Status = "live" | "building" | "prototype" | "research";

const projects: {
  id: string;
  name: string;
  description: string;
  link: string;
  tech: string;
  status: Status;
  badge?: { label: string; href: string };
}[] = [
  {
    id: "0x01",
    name: "AirChain",
    description:
      "DePIN air quality monitoring network. ESP32 hardware, MQTT broker, Cardano AIRQ token, Lagos sensor deployment.",
    link: "https://airchain.ng",
    tech: "c++, esp32, react, supabase, cardano",
    status: "live",
  },
  {
    id: "0x02",
    name: "Haulink",
    description:
      "Containerized freight logistics for Nigerian SMEs, built end-to-end solo over 12 weeks at the Gimbalabs Piece of Pie Hackathon 2026. Atomic Postgres slot reservation prevents double-booking under concurrent load, proved on Cardano mainnet with CIP-0020 metadata confirmed in 13 seconds. SHA-256 proof-of-delivery anchored on-chain, box-based cargo estimator (60x60x60cm unit), pilot route Uyo to Lagos.",
    link: "https://haulink.xyz",
    tech: "next.js 14, supabase, mesh sdk, cardano",
    status: "live",
    badge: {
      label: "Featured in Gimbalabs Piece of Pie Yearbook 2026",
      href: "https://gimbalabs.com/piece-of-pie-yearbook/projects/haulink",
    },
  },
  {
    id: "0x03",
    name: "Merkle Tree Anchor",
    description:
      "Cryptographic proof mechanism for sensor data integrity on Cardano.",
    link: "",
    tech: "plutus v3, aiken",
    status: "research",
  },
  {
    id: "0x04",
    name: "GroundBase",
    description:
      "Community infrastructure site for makers in Uyo. Notion API-powered opportunity board.",
    link: "https://gndbase.xyz",
    tech: "next.js 14, notion api",
    status: "building",
  },
  {
    id: "0x05",
    name: "Pedal Power",
    description:
      "Human-powered generator prototype. ESP32, three OLED displays, INA226 power monitor, 4S2P 21700 battery pack.",
    link: "",
    tech: "arduino c++, esp32",
    status: "prototype",
  },
];

const articles = [
  {
    title: "Life Is Not a Checklist",
    source: "The Conscious Jokeman",
    link: "https://abdulazeezfolaranmi.substack.com/p/life-is-not-a-checklist",
  },
  {
    title: "Before the Chain, There Was the Problem",
    source: "Project Genius",
    link: "https://projectgenius.substack.com/p/before-the-chain-there-was-the-problem",
  },
  {
    title: "Persistence, Not Disruption",
    source: "Project Genius",
    link: "https://projectgenius.substack.com/p/persistence-not-disruption",
  },
];

/** Every status colour clears 4.5:1 on the card surface. */
const statusConfig: Record<Status, { dot: string; label: string; text: string }> = {
  live: { dot: "bg-status-live", label: "live", text: "text-status-live" },
  building: { dot: "bg-status-building", label: "building", text: "text-status-building" },
  prototype: { dot: "bg-status-prototype", label: "prototype", text: "text-status-prototype" },
  research: { dot: "bg-status-research", label: "research", text: "text-status-research" },
};

const stackLayers = [
  {
    label: "INFRA",
    items: [
      "Kubernetes (k3s/k8s, bare metal), Helm, Docker, GitLab CI/CD",
      "Mosquitto MQTT (multi-listener TLS + ACL), Keycloak (RBAC, OAuth)",
      "PostgreSQL via CloudNativePG, TLS/PKI + Let's Encrypt",
      "Kubernetes Secrets, ingress/DNS routing",
    ],
  },
  {
    label: "FIRMWARE",
    items: [
      "RP2040/RP2350 (Pico W), ESP32, MicroPython + C/C++",
      "Cellular LTE via AT commands (TLS-over-AT), WiFi/MQTT",
      "Sensor integration (particulate matter, gas, current sensing)",
      "SPI/I²C/UART, watchdog timers, OTA firmware, KiCad",
    ],
  },
  {
    label: "POWER",
    items: [
      "48V LiFePO4 battery systems, Victron BMV-712 (SOC sync)",
      "MPPT solar charge controllers, CC/CV charging",
      "DC-DC buck/boost conversion, custom current-sensing (INA226)",
      "Thermal management, voltage regulation",
    ],
  },
];

const communityEntries = [
  {
    name: "Pi Jam Uyo",
    body: "Recurring hardware maker event series in Uyo. Vol. 1 ran May 29 2026 at Acceleratez Hub, sponsored by Raspberry Pi, PCBWay, Hub360 and Microscale.ng.",
    meta: "Vol. 2, microcontrollers and home IoT, pending",
    action: {
      label: "Watch the community build session",
      href: "https://drive.google.com/file/d/1Vn8vjOJ4pFEb1hh_J_vwI6Zg8kE-gJok/view",
    },
  },
  {
    name: "GroundBase",
    body: "Builder and maker community infrastructure for Uyo. Discord, an opportunity board, and hardware workshops.",
  },
  {
    name: "Founders Friday Uyo",
    body: "Regular participant and collaborator.",
  },
  {
    name: "Intersect MBO",
    body: "Member of the Cardano ecosystem coordination layer, with the credential minted on-chain.",
    meta: "asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf",
  },
  {
    name: "TEN Jamaica 2026",
    body: "AirChain selected as a Global Challenge finalist.",
  },
  {
    name: "Gimbalabs Hackathon",
    body: "Haulink submission for the Piece of Pie hackathon, Draper Dragon venture pitch track.",
    meta: "Deadline 2026-07-19",
  },
];

const heroTags = ["embedded", "DePIN", "Cardano", "Uyo", "maker"];

/**
 * Section heading. Renders as a real <h2> so the page has a heading outline,
 * while keeping the `// label` comment styling that carries the brand.
 */
function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mb-8 font-jetbrains-mono text-xs font-medium tracking-[0.18em] text-fg-subtle"
    >
      <span aria-hidden="true">{"// "}</span>
      {children}
    </h2>
  );
}

export default function ContentSections() {
  const reduce = useReducedMotion();

  // One reveal preset, so motion is consistent and collapses to static when asked.
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <div className="flex flex-col gap-24 lg:gap-32">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="flex min-h-[calc(100dvh-6rem)] scroll-mt-24 items-center"
      >
        <div className="flex w-full flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-16">
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
                })}
            className="text-center lg:text-left"
          >
            <ul className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-chip border border-accent/25 bg-accent/[0.06] px-2.5 py-1 font-jetbrains-mono text-xs text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <h1
              id="hero-heading"
              className="mb-4 font-jetbrains-mono font-bold leading-[1.05] tracking-tight text-fg-strong"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
            >
              Azeez Bello
            </h1>

            <p className="mx-auto mb-7 max-w-[46ch] text-lg leading-relaxed text-fg-muted lg:mx-0">
              Embedded systems engineer. I instrument invisible problems, then fix
              them.
              <span className="cursor-blink" aria-hidden="true" />
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-accent px-5 py-2.5 font-jetbrains-mono text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-accent-dim"
              >
                View projects
              </a>
              <a
                href="#writing"
                className="rounded-full border border-line-strong px-5 py-2.5 font-jetbrains-mono text-sm whitespace-nowrap text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Read writing
              </a>
            </div>
          </motion.div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
                })}
            className="shrink-0"
          >
            <div className="relative h-[168px] w-[168px] rounded-full border-2 border-dashed border-accent/60 p-1 sm:h-[200px] sm:w-[200px]">
              <Image
                src="/images/nft_image.webp"
                alt="Azeez Bello"
                width={200}
                height={200}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────────── */}
      <section id="projects" className="scroll-mt-24">
        <SectionHeading>projects</SectionHeading>

        <motion.ul {...reveal()} className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const s = statusConfig[project.status];
            const linked = Boolean(project.link);
            return (
              <li
                key={project.id}
                className={`bento-card flex flex-col ${
                  i === 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-jetbrains-mono text-xs tabular-nums text-fg-subtle">
                    {project.id}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`}
                    />
                    <span className={`font-jetbrains-mono text-xs ${s.text}`}>
                      {s.label}
                    </span>
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-fg-strong">
                  {linked ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {project.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-fg-muted">
                  {project.description}
                </p>

                <p className="font-jetbrains-mono text-xs text-fg-subtle" translate="no">
                  {project.tech}
                </p>

                {project.badge && (
                  <a
                    href={project.badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-chip border border-accent/25 bg-accent/[0.06] px-2.5 py-1 font-jetbrains-mono text-xs text-accent transition-colors hover:border-accent/60"
                  >
                    {project.badge.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </li>
            );
          })}
        </motion.ul>

        <p className="mt-6">
          <a
            href="/lab"
            className="font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
          >
            More experiments in the lab <span aria-hidden="true">→</span>
          </a>
        </p>
      </section>

      {/* ── Writing + Contact ──────────────────────────────────────────── */}
      <div className="grid gap-4 md:grid-cols-2">
        <section id="writing" className="scroll-mt-24">
          <SectionHeading>writing</SectionHeading>
          <motion.div {...reveal()} className="bento-card h-full">
            <ul className="space-y-5">
              {articles.map((article) => (
                <li key={article.link}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="block font-medium leading-snug text-fg transition-colors group-hover:text-accent">
                      {article.title}
                    </span>
                    <span className="mt-1 block font-jetbrains-mono text-xs text-fg-subtle">
                      {article.source}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4">
              <a
                href="https://projectgenius.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
              >
                Read all <span aria-hidden="true">→</span>
              </a>
            </p>
          </motion.div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <SectionHeading>benchmarks + contact</SectionHeading>
          <motion.div {...reveal(0.1)} className="bento-card h-full">
            <dl className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <dt className="font-jetbrains-mono text-sm text-fg-muted">
                  Chess rating
                </dt>
                <dd>
                  <a
                    href="https://www.chess.com/member/ayy_zedd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains-mono text-base font-bold tabular-nums text-fg-strong transition-colors hover:text-accent"
                  >
                    629
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-jetbrains-mono text-sm text-fg-muted">
                  Bench press
                </dt>
                <dd>
                  <a
                    href="https://hevy.com/user/buffzeezy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains-mono text-base font-bold tabular-nums text-fg-strong transition-colors hover:text-accent"
                  >
                    105&nbsp;kg
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-4 space-y-2 border-t border-line pt-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="w-14 shrink-0 font-jetbrains-mono text-xs text-fg-subtle">
                  Email
                </span>
                <a
                  href="mailto:abdulazeez.bello@airchain.ng"
                  className="min-w-0 truncate font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  abdulazeez.bello@airchain.ng
                </a>
              </div>
              <div className="flex min-w-0 items-center gap-3">
                <span className="w-14 shrink-0 font-jetbrains-mono text-xs text-fg-subtle">
                  X
                </span>
                <a
                  href="https://x.com/AY_ZED_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 truncate font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  @AY_ZED_
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── About ──────────────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24">
        <SectionHeading>about</SectionHeading>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <motion.div {...reveal()} className="space-y-5">
            <p className="prose-body">
              Abdulazeez Bello is an embedded systems engineer and technical
              co-founder based in Uyo, Akwa Ibom, Nigeria. He builds physical
              technology end-to-end: from a KiCad schematic and a soldering iron,
              through firmware, up to the Kubernetes cluster the hardware reports
              into.
            </p>
            <p className="prose-body">
              Growing up in Lagos, where air pollution is widespread but almost
              never measured, shaped what he wanted to build. Technology that
              makes invisible environmental and infrastructure problems visible
              and actionable. That instinct is the origin story behind{" "}
              <a
                href="https://airchain.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-fg-strong"
              >
                AirChain
              </a>
              , and it shows up in most of his work. Don&rsquo;t theorize about a
              problem, instrument it, then fix it. When something breaks, the
              instinct is to trace the symptom to its root cause rather than patch
              around it, whether that is a UART fault traced to a voltage
              mismatch or a boost-converter failure traced to a thermal issue.
            </p>
            <p className="prose-body">
              He moves comfortably between infrastructure (Kubernetes, CI/CD,
              auth systems), firmware, power electronics, and the product side:
              pitches, technical writing, public speaking, and organizing
              community events. He is a Graduate Member of the Nigerian Society
              of Engineers and an Intersect MBO member.
            </p>
            <p className="prose-body border-t border-line pt-5">
              With{" "}
              <a
                href="https://haulink.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-fg-strong"
              >
                Haulink
              </a>
              , that range extends further: identifying a real &#8358;2T+ informal
              Nigerian freight market gap, validating pricing against informal
              market rates, and shipping the full product lifecycle (schema, auth,
              booking, payment, tracking, proof-of-delivery, on-chain anchoring)
              solo, over 12 weeks, with a public weekly build log. Business
              development, blockchain engineering, and project management in one
              build.
            </p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="mx-auto w-full max-w-[280px]">
            <div className="group relative rounded-card bg-accent">
              <Image
                src="/images/nft_image.webp"
                alt="Azeez Bello"
                width={280}
                height={280}
                className="block w-full rounded-card object-cover grayscale mix-blend-multiply transition-[filter] duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-card bg-bg mix-blend-screen"
              />
            </div>
            <a
              href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-jetbrains-mono text-xs text-fg-subtle transition-colors hover:text-accent"
            >
              View in explorer <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stack ──────────────────────────────────────────────────────── */}
      <section id="stack" className="scroll-mt-24">
        <SectionHeading>the stack</SectionHeading>
        <p className="mb-8 -mt-4 text-fg-muted">
          Infra, firmware, and power, in one product.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {stackLayers.map((layer, i) => (
            <motion.div key={layer.label} {...reveal(i * 0.08)} className="bento-card">
              <h3 className="mb-4 font-jetbrains-mono text-xs font-semibold tracking-[0.18em] text-accent">
                {layer.label}
              </h3>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="font-jetbrains-mono text-xs leading-relaxed text-fg-muted"
                    translate="no"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────────────── */}
      <section id="mission" className="scroll-mt-24">
        <SectionHeading>mission</SectionHeading>
        <motion.div {...reveal()} className="space-y-8">
          <blockquote className="border-l-2 border-accent/40 pl-6">
            <p className="text-lg italic leading-relaxed text-fg">
              &ldquo;If you can&rsquo;t measure it, you can&rsquo;t improve
              it.&rdquo;
            </p>
            <footer className="mt-2 font-jetbrains-mono text-xs text-fg-subtle">
              Lord Kelvin
            </footer>
          </blockquote>
          <p className="prose-body">
            We stand at a critical intersection where physical infrastructure
            meets cryptographic certainty. The systems we build over the next
            decade will define our relationship with the planet&rsquo;s resource
            boundary constraints. My work is focused on creating the embedded
            hardware and decentralized verification protocols necessary for
            actionable, trustworthy data.
          </p>
        </motion.div>
      </section>

      {/* ── Community ──────────────────────────────────────────────────── */}
      <section id="community" className="scroll-mt-24">
        <SectionHeading>community</SectionHeading>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communityEntries.map((entry, i) => (
            <motion.li
              key={entry.name}
              {...reveal((i % 3) * 0.08)}
              className="bento-card flex flex-col"
            >
              <h3 className="mb-2 font-jetbrains-mono text-sm font-semibold text-fg-strong">
                {entry.name}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-fg-muted">
                {entry.body}
              </p>
              {entry.meta && (
                <p
                  className="mt-3 font-jetbrains-mono text-xs break-words text-fg-subtle"
                  translate="no"
                >
                  {entry.meta}
                </p>
              )}
              {entry.action && (
                <a
                  href={entry.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-chip border border-line bg-white/[0.03] px-3 py-2 font-jetbrains-mono text-xs text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {entry.action.label}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="mt-12">
          <CommunitySection />
        </div>
      </section>

      {/* ── Side quests ────────────────────────────────────────────────── */}
      <section id="side-quests" className="scroll-mt-24">
        <SectionHeading>side quests</SectionHeading>
        <SideQuests />
      </section>

      {/* ── Gallery ────────────────────────────────────────────────────── */}
      <section id="gallery" className="scroll-mt-24">
        <SectionHeading>visual archive</SectionHeading>
        <Gallery />
      </section>
    </div>
  );
}

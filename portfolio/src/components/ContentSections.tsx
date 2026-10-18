"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import AirChainDiagram from "@/components/AirChainDiagram";
import CopyEmail from "@/components/CopyEmail";
import Gallery from "@/components/Gallery";
import CommunitySection from "@/components/CommunitySection";
import SideQuests from "@/components/SideQuests";
import { otherWork, workCards, type WorkCard } from "@/content/work";

const EMAIL = "babdulazeez3@gmail.com";

const experience = [
  {
    org: "BuildATech Incubator & Workspace",
    role: "Embedded Systems Engineer",
    period: "Aug 2025 to present",
    place: "Uyo, Nigeria",
    body: "A hardware makerspace and incubator that also incubated AirChain. I engineer prototype electronics and maintain a 48 V LiFePO4 lab power system with Victron BMV-712 monitoring, MPPT solar charging and DC-DC conversion. I wrote the company's internal KiCad design SOP, and I write architecture documents, bills of materials and test notes so prototypes can be handed off and reproduced.",
    tags: ["ESP32", "INA226", "KiCad", "LiFePO4", "MPPT", "InvenTree"],
  },
  {
    org: "AirChain",
    role: "Co-Founder & System Engineer",
    period: "Jan 2026 to present",
    body: "Incubated at BuildATech. I own the node hardware, the firmware and the MQTT backend, and I write the product requirements, architecture documents and investor material.",
  },
  {
    org: "Independent contract",
    role: "Drone systems",
    body: "Co-developed a drone payload data pipeline between an onboard camera and a companion single-board computer.",
  },
];

const toolkit = [
  {
    label: "Design",
    items: "Requirements to specification, optimisation and trade-off analysis, datasheet reading, technical documentation",
  },
  {
    label: "Embedded",
    items: "C/C++, MicroPython, ESP32, STM32, Raspberry Pi Pico, UART, SPI, I2C, Linux-based edge computing",
  },
  {
    label: "Power",
    items: "Buck and boost conversion, solar MPPT, CC/CV charging, Li-ion and LiFePO4 packs, motor and battery sizing",
  },
  {
    label: "Hardware",
    items: "KiCad, soldering and rework, Fusion 360, FDM 3D printing, oscilloscope, logic analyzer, JTAG/SWD",
  },
  {
    label: "Infrastructure",
    items: "Linux servers, containers, Kubernetes, VPS, MQTT brokers",
  },
];

type CommunityEntry = {
  eyebrow: string;
  name: string;
  body: string;
  meta?: string;
  actions?: { label: string; href: string; primary?: boolean }[];
  featured?: boolean;
};

const communityEntries: CommunityEntry[] = [
  {
    eyebrow: "Physical AI · one of 20 worldwide",
    name: "Chapter Lead, Cyberwave",
    body: "Running Physical AI workshops, meetups and hackathons through GroundBase. I am one of 20 chapter leads worldwide. In-person meetups are held in Uyo.",
    actions: [
      { label: "gndbase.xyz", href: "https://gndbase.xyz", primary: true },
      { label: "Why Physical AI", href: "/physical-ai" },
    ],
    featured: true,
  },
  {
    eyebrow: "Organizer",
    name: "GroundBase and Pi Jam",
    body: "GroundBase is a community hub with events, an opportunities board, tools and a Discord. Pi Jam is its hands-on build session. Vol. 1 ran in May 2026 at Acceleratez Hub, sponsored by Raspberry Pi, PCBWay, Hub360 and Microscale.ng.",
    // TODO(azeez): Vol. 2 is still listed as pending; the lab doorbell page dates it July 31, 2026. Confirm status.
    meta: "Vol. 2, microcontrollers and home IoT, pending",
    actions: [
      { label: "gndbase.xyz", href: "https://gndbase.xyz" },
      {
        label: "Watch the build session",
        href: "https://drive.google.com/file/d/1Vn8vjOJ4pFEb1hh_J_vwI6Zg8kE-gJok/view",
      },
    ],
  },
  {
    eyebrow: "Global Challenge · 2026",
    name: "TEN Jamaica",
    body: "Finalist in the TEN Jamaica Global Challenge, 2026, with AirChain.",
  },
  {
    eyebrow: "Professional body",
    name: "Nigerian Society of Engineers",
    body: "Graduate Member.",
  },
  {
    eyebrow: "Robotics community",
    name: "ROS Naija",
    body: "Active member.",
  },
  {
    eyebrow: "Cardano · Member",
    name: "Intersect MBO",
    body: "Member of the Cardano ecosystem coordination layer, with the credential minted on-chain.",
    meta: "asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf",
  },
  {
    eyebrow: "Meetup",
    name: "Founders Friday Uyo",
    body: "Regular participant and collaborator.",
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

const contactLinks = [
  { label: "GitHub", value: "FoladDTechie", href: "https://github.com/FoladDTechie" },
  { label: "X", value: "@AY_ZED_", href: "https://x.com/AY_ZED_" },
  { label: "GroundBase", value: "gndbase.xyz", href: "https://gndbase.xyz" },
];

const textLink =
  "text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-fg-strong";

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

/** Small block diagram at the top of a work card. */
function CardFigure({ figure }: { figure: WorkCard["figure"] }) {
  const label = figure.blocks.join(figure.flow ? " to " : ", ");
  return (
    <div
      role="img"
      aria-label={`Diagram: ${label}`}
      className="figure-hatch flex min-h-[8.5rem] flex-wrap content-center items-center justify-center gap-x-2 gap-y-2.5 border-b border-line px-5 py-6"
    >
      {figure.blocks.map((block, i) => (
        <span key={block} className="flex items-center gap-2" aria-hidden="true">
          <span className="rounded-chip border border-line-strong bg-surface px-2.5 py-1.5 font-jetbrains-mono text-[11px] whitespace-nowrap text-fg">
            {block}
          </span>
          {figure.flow && i < figure.blocks.length - 1 && (
            <span className="font-jetbrains-mono text-xs text-accent">→</span>
          )}
        </span>
      ))}
    </div>
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
          viewport: { once: true, amount: 0.15 },
          transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <div className="flex flex-col gap-24 lg:gap-32">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="home" aria-labelledby="hero-heading" className="scroll-mt-24 pt-6 lg:pt-12">
        <div className="mb-14 flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
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
          <p className="panel-eyebrow mb-5 text-accent">
            Embedded systems · Nigeria · B.Eng. 2024
          </p>

          <h1
            id="hero-heading"
            className="mb-6 font-jetbrains-mono font-bold leading-[1.05] tracking-tight text-fg-strong"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
          >
            Azeez Bello
          </h1>

          <p className="mx-auto mb-8 max-w-[62ch] text-lg leading-relaxed text-fg-muted lg:mx-0">
            Abdulazeez Bello is an embedded systems engineer who designs and debugs the
            electronics between a sensor and a server: power, radios, firmware and the boards
            that hold them together. He is an Embedded Systems Engineer at BuildATech Incubator
            &amp; Workspace and co-founder of AirChain, where he built a cellular air quality
            sensor node end to end. He holds a B.Eng. in Mechatronics, Robotics and Automation
            from Ahmadu Bello University.
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 font-jetbrains-mono text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-accent-dim"
            >
              View work
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
              src="/images/portrait.png"
              alt="Portrait of Abdulazeez Bello"
              width={343}
              height={344}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
              })}
        >
          <AirChainDiagram />
        </motion.div>
      </section>

      {/* ── Feature: it reports ────────────────────────────────────────── */}
      <section id="it-reports" aria-labelledby="it-reports-heading" className="scroll-mt-24">
        <p aria-hidden="true" className="mb-4 font-jetbrains-mono text-xs tracking-[0.18em] text-fg-subtle">
          {"// field_data"}
        </p>
        <motion.div
          {...reveal()}
          className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12"
        >
          <div>
            <h2 id="it-reports-heading" className="panel-title mb-5 normal-case">
              It reports.
            </h2>
            <p className="prose-body text-fg-muted">
              The AirChain node reads particulate matter, temperature, humidity and position,
              then publishes one JSON message to an MQTT broker over LTE every 10 seconds. In one
              logged run it made <strong className="text-fg-strong">139 publishes</strong> in
              about <strong className="text-fg-strong">24 minutes</strong> and handled one
              retransmit.
            </p>
            <Link href="/work/airchain" className="panel-cta mt-6">
              How the node is built
              <span aria-hidden="true" className="panel-cta-arrow">→</span>
            </Link>
          </div>

          <figure className="min-w-0">
            <figcaption className="panel-eyebrow mb-2">Message schema · no sample values</figcaption>
            <pre className="overflow-x-auto rounded-card border border-line bg-surface p-5 font-jetbrains-mono text-xs leading-relaxed text-fg">
              <code>
                <span className="text-fg-subtle">topic   </span>air/&lt;sensor_id&gt;/data{"\n"}
                <span className="text-fg-subtle">every   </span>10 s{"\n"}
                <span className="text-fg-subtle">fields  </span>
                {"{\n"}
                {"  sensor_id,   timestamp,\n"}
                {"  temperature, humidity,\n"}
                {"  pm25,        pm10,\n"}
                {"  latitude,    longitude,\n"}
                {"  battery_v,   time_synced\n"}
                {"}"}
              </code>
            </pre>
          </figure>
        </motion.div>
      </section>

      {/* ── Work ───────────────────────────────────────────────────────── */}
      <section id="work" className="scroll-mt-24">
        <SectionHeading>work</SectionHeading>

        {/* id="projects" keeps old /#projects links landing here. */}
        <ul id="projects" className="grid scroll-mt-24 gap-4 md:grid-cols-2">
          {workCards.map((card, i) => (
            <motion.li
              key={card.slug}
              {...reveal((i % 2) * 0.08)}
              className={`bento-card relative flex flex-col overflow-hidden p-0 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <CardFigure figure={card.figure} />
              <div className="flex flex-1 flex-col p-6">
                <p className="panel-eyebrow mb-3">{card.meta}</p>
                <h3 className="panel-title mb-3">{card.title}</h3>
                <p className="mb-4 max-w-[68ch] text-sm leading-relaxed text-fg-muted">
                  {card.summary}
                </p>

                {card.metrics.length > 0 && (
                  <ul className="mb-4 space-y-1.5">
                    {card.metrics.map((m) => (
                      <li key={m.label} className="font-jetbrains-mono text-xs text-fg-muted">
                        <strong className="text-sm font-bold text-accent tabular-nums">{m.value}</strong>{" "}
                        {m.label}
                      </li>
                    ))}
                  </ul>
                )}

                {card.tags && (
                  <ul className="mb-4 flex flex-wrap gap-2" aria-label="Stack">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-chip border border-accent/25 bg-accent/[0.06] px-2.5 py-1 font-jetbrains-mono text-xs text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stretched link: the whole card is clickable, with one accessible name. */}
                <Link
                  href={card.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-2 font-jetbrains-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase after:absolute after:inset-0 after:rounded-card hover:text-fg-strong"
                >
                  Read more
                  <span aria-hidden="true" className="panel-cta-arrow">→</span>
                  <span className="sr-only"> about {card.title}</span>
                </Link>
              </div>
            </motion.li>
          ))}
        </ul>

        <h3 className="mt-14 mb-5 font-jetbrains-mono text-xs font-medium tracking-[0.18em] text-fg-subtle">
          <span aria-hidden="true">{"// "}</span>other work
        </h3>
        <ul className="grid gap-4 md:grid-cols-3">
          {otherWork.map((item) => (
            <li key={item.title} className="bento-card flex flex-col p-5">
              <p className="panel-eyebrow mb-2">{item.meta}</p>
              <h4 className="mb-2 font-jetbrains-mono text-base font-semibold text-fg-strong">
                {item.title}
              </h4>
              <p className="mb-3 flex-1 text-sm leading-relaxed text-fg-muted">{item.summary}</p>
              <p className="mb-3 font-jetbrains-mono text-xs text-fg-subtle" translate="no">
                {item.tech}
              </p>
              {item.badge && (
                <a
                  href={item.badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip border border-accent/25 bg-accent/[0.06] px-2.5 py-1 font-jetbrains-mono text-xs text-accent transition-colors hover:border-accent/60"
                >
                  {item.badge.label}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains-mono text-xs text-fg-muted transition-colors hover:text-accent"
                >
                  {new URL(item.href).host} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> ({item.title}, opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="font-jetbrains-mono text-xs text-fg-muted transition-colors hover:text-accent"
                >
                  Read the note <span aria-hidden="true">→</span>
                  <span className="sr-only"> about {item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-6">
          <Link
            href="/lab"
            className="font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
          >
            More experiments in the lab <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────── */}
      <section id="experience" className="scroll-mt-24">
        <SectionHeading>experience</SectionHeading>

        <ol className="space-y-4">
          {experience.map((job, i) => (
            <motion.li
              key={job.org}
              {...reveal(i * 0.06)}
              className="bento-card grid gap-3 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8"
            >
              <div className="font-jetbrains-mono text-xs leading-relaxed text-fg-subtle">
                {job.period && <p>{job.period}</p>}
                {job.place && <p>{job.place}</p>}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-fg-strong">{job.org}</h3>
                <p className="mb-3 font-jetbrains-mono text-sm text-accent">{job.role}</p>
                <p className="max-w-[70ch] text-sm leading-relaxed text-fg-muted">{job.body}</p>
                {job.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-chip border border-line bg-white/[0.03] px-2.5 py-1 font-jetbrains-mono text-xs text-fg-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        <h3 className="mt-14 mb-5 font-jetbrains-mono text-xs font-medium tracking-[0.18em] text-fg-subtle">
          <span aria-hidden="true">{"// "}</span>toolkit
        </h3>
        <dl className="divide-y divide-line rounded-card border border-line bg-surface">
          {toolkit.map((row) => (
            <div key={row.label} className="grid gap-1 px-5 py-4 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
              <dt className="panel-eyebrow pt-0.5 text-accent">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-fg-muted">{row.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Community ──────────────────────────────────────────────────── */}
      <section id="community" className="scroll-mt-24">
        <SectionHeading>community</SectionHeading>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communityEntries.map((entry, i) => (
            <motion.li
              key={entry.name}
              {...reveal((i % 3) * 0.08)}
              className={`bento-card min-w-0 ${
                entry.featured
                  ? "grid gap-2 sm:p-8 md:col-span-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10 lg:col-span-3"
                  : "flex flex-col"
              }`}
            >
              <div>
                <p className="panel-eyebrow mb-3 break-words">{entry.eyebrow}</p>
                <h3 className="panel-title mb-3">{entry.name}</h3>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="flex-1 text-sm leading-relaxed text-fg-muted">{entry.body}</p>
                {entry.meta && (
                  <p
                    className="mt-3 font-jetbrains-mono text-xs [overflow-wrap:anywhere] text-fg-subtle"
                    translate="no"
                  >
                    {entry.meta}
                  </p>
                )}
                {entry.actions && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {entry.actions.map((action) => {
                      const external = action.href.startsWith("http");
                      return (
                        <a
                          key={action.href}
                          href={action.href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={`panel-cta max-w-full ${action.primary ? "panel-cta--primary" : ""}`}
                        >
                          {action.label}
                          <span aria-hidden="true" className="panel-cta-arrow">→</span>
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12">
          <CommunitySection />
        </div>
      </section>

      {/* ── Physical AI ────────────────────────────────────────────────── */}
      <section id="physical-ai" className="scroll-mt-24">
        <SectionHeading>physical_ai</SectionHeading>
        <motion.div {...reveal()} className="bento-card sm:p-8">
          <p className="panel-eyebrow mb-3">Now exploring</p>
          <h3 className="panel-title mb-4">Physical AI</h3>
          <p className="max-w-[68ch] text-sm leading-relaxed text-fg-muted">
            Physical AI is AI that doesn&rsquo;t stay on a screen. It senses the physical world,
            reasons about what it sees, and acts through motors and machines. AirChain already
            does the &ldquo;sense&rdquo; half. Physical AI adds the &ldquo;decide and act&rdquo;
            half.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/physical-ai" className="panel-cta panel-cta--primary">
              Why I&rsquo;m exploring it
              <span aria-hidden="true" className="panel-cta-arrow">→</span>
            </Link>
            <Link href="/work/scan-rover" className="panel-cta">
              Scan Rover
              <span aria-hidden="true" className="panel-cta-arrow">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Writing ────────────────────────────────────────────────────── */}
      <section id="writing" className="scroll-mt-24">
        <SectionHeading>writing</SectionHeading>
        <motion.div {...reveal()} className="bento-card">
          <ul className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <li key={article.link}>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="group block">
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

      {/* ── About ──────────────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24">
        <SectionHeading>about</SectionHeading>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <motion.div {...reveal()} className="space-y-5">
            <p className="prose-body">
              Abdulazeez Bello is an embedded systems engineer and technical co-founder based in
              Uyo, Akwa Ibom, Nigeria. He builds physical technology end-to-end: from a KiCad
              schematic and a soldering iron, through firmware, up to the Kubernetes cluster the
              hardware reports into.
            </p>
            <p className="prose-body">
              Growing up in Lagos, where air pollution is widespread but almost never measured,
              shaped what he wanted to build. Technology that makes invisible environmental and
              infrastructure problems visible and actionable. That instinct is the origin story
              behind{" "}
              <a href="https://airchain.ng" target="_blank" rel="noopener noreferrer" className={textLink}>
                AirChain
              </a>
              , and it shows up in most of his work. Don&rsquo;t theorize about a problem,
              instrument it, then fix it. When something breaks, the instinct is to trace the
              symptom to its root cause rather than patch around it, whether that is a UART fault
              traced to a voltage mismatch or a boost-converter failure traced to a thermal issue.
            </p>
            <p className="prose-body">
              He moves comfortably between infrastructure (Kubernetes, CI/CD, auth systems),
              firmware, power electronics, and the product side: pitches, technical writing,
              public speaking, and organizing community events. He is a Graduate Member of the
              Nigerian Society of Engineers and an Intersect MBO member.
            </p>
            <p className="prose-body border-t border-line pt-5">
              With{" "}
              <a href="https://haulink.xyz" target="_blank" rel="noopener noreferrer" className={textLink}>
                Haulink
              </a>
              {/* TODO(azeez): the "₦2T+" market size was removed because it had no source.
                  Restore it only with a citation. */}
              , that range extends further: identifying a gap in the informal Nigerian freight
              market, validating pricing against informal market rates, and shipping the full
              product lifecycle (schema, auth, booking, payment, tracking, proof-of-delivery,
              on-chain anchoring) solo, over 12 weeks, with a public weekly build log. Business
              development, blockchain engineering, and project management in one build.
            </p>
            <p>
              <Link
                href="/about"
                className="font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
              >
                Extended profile <span aria-hidden="true">→</span>
              </Link>
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
        <p className="mb-8 -mt-4 text-fg-muted">Infra, firmware, and power, in one product.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {stackLayers.map((layer, i) => (
            <motion.div key={layer.label} {...reveal(i * 0.08)} className="bento-card">
              <h3 className="mb-4 font-jetbrains-mono text-xs font-semibold tracking-[0.18em] text-accent">
                {layer.label}
              </h3>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="font-jetbrains-mono text-xs leading-relaxed text-fg-muted" translate="no">
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
              &ldquo;If you can&rsquo;t measure it, you can&rsquo;t improve it.&rdquo;
            </p>
            <footer className="mt-2 font-jetbrains-mono text-xs text-fg-subtle">Lord Kelvin</footer>
          </blockquote>
          <p className="prose-body">
            We stand at a critical intersection where physical infrastructure meets cryptographic
            certainty. The systems we build over the next decade will define our relationship
            with the planet&rsquo;s resource boundary constraints. My work is focused on creating
            the embedded hardware and decentralized verification protocols necessary for
            actionable, trustworthy data.
          </p>
        </motion.div>
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

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-24">
        <SectionHeading>contact</SectionHeading>
        <motion.div {...reveal()} className="bento-card sm:p-8">
          <p className="panel-eyebrow mb-3">Email</p>
          <CopyEmail email={EMAIL} />

          <ul className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <li key={link.href} className="min-w-0">
                <span className="panel-eyebrow block">{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-jetbrains-mono text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  {link.value} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

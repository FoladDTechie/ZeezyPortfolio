/**
 * Work cards for the home page. Every number here is a measured or documented
 * fact; anything not yet known is a TODO comment, never a placeholder value.
 */

export type WorkCard = {
  slug: string;
  meta: string;
  title: string;
  summary: string;
  /** Bold lead + muted remainder, e.g. { value: "139", label: "LTE publishes in 24 min" }. */
  metrics: { value: string; label: string }[];
  tags?: string[];
  /** Blocks for the card's small diagram; `flow` draws arrows between them. */
  figure: { blocks: string[]; flow: boolean };
  href: string;
};

export const workCards: WorkCard[] = [
  {
    slug: "airchain",
    meta: "Co-founder Â· 2026 to present",
    title: "AirChain node",
    summary:
      "A cellular air quality sensor node on an ESP32, built end to end: sensors, power, modem, firmware and a carrier board.",
    metrics: [
      { value: "139", label: "LTE publishes in 24 min" },
      { value: "3", label: "hardware UARTs mapped" },
      { value: "0", label: "DRC errors on carrier PCB Rev A.1" },
    ],
    figure: { blocks: ["PMS Â· DHT22 Â· GNSS", "ESP32", "EG800Z LTE", "MQTT broker"], flow: true },
    href: "/work/airchain",
  },
  {
    slug: "pedal-power",
    meta: "BuildATech Â· electronics",
    title: "Pedal Power",
    summary:
      "The electronics of a human-powered charging system, from motor sizing to bench testing.",
    metrics: [
      { value: "4S2P", label: "Li-ion pack" },
      { value: "2", label: "INA226 power monitors" },
      { value: "3", label: "SPI displays across three modules" },
    ],
    // Components, not a signal chain: the power topology is not documented yet.
    figure: { blocks: ["ESP32", "2 Ã— INA226", "3 Ã— SPI display", "CC/CV Â· 4S2P"], flow: false },
    href: "/work/pedal-power",
  },
  {
    slug: "scan-rover",
    meta: "In progress Â· Oct 2026 to present Â· Physical AI",
    title: "Scan Rover",
    summary: "A robot that walks a property so buyers can tour it remotely.",
    // No metrics until real numbers exist.
    metrics: [],
    tags: ["Python", "MuJoCo", "Raspberry Pi 5", "Cyberwave"],
    figure: { blocks: ["Digital twin", "Route, room by room", "Rover (planned)"], flow: true },
    href: "/work/scan-rover",
  },
  {
    slug: "estate-access",
    meta: "Design and documentation",
    title: "Estate access control",
    summary:
      "A TOTP hardware token system for estate vehicle barriers and pedestrian strikes.",
    metrics: [
      { value: "RP2350", label: "Raspberry Pi Pico 2 W" },
      { value: "TOTP", label: "with HMAC-SHA1" },
    ],
    figure: { blocks: ["Pico 2 W token", "TOTP code", "Barrier Â· strike"], flow: true },
    href: "/work/estate-access",
  },
  {
    slug: "self-hosted",
    meta: "Ongoing",
    title: "Self-hosted infrastructure",
    summary:
      "Containerised services on on-site mini PCs and a VPS, plus the AirChain MQTT broker on Kubernetes.",
    metrics: [{ value: "3", label: "broker listeners (8883, 443, 8084)" }],
    figure: { blocks: ["Mini PCs", "VPS", "Kubernetes Â· MQTT"], flow: false },
    href: "/work/self-hosted",
  },
];

export type OtherWork = {
  title: string;
  meta: string;
  summary: string;
  tech: string;
  href: string;
  external: boolean;
  badge?: { label: string; href: string };
};

/** Earlier and non-hardware projects, kept below the hardware work. */
export const otherWork: OtherWork[] = [
  {
    title: "Haulink",
    // TODO(azeez): confirm Haulink's dates (build window and submission date).
    // The old community entry said "Deadline 2026-07-19"; the project card had no dates.
    meta: "Live Â· Gimbalabs Piece of Pie Hackathon 2026",
    summary:
      "Containerised freight logistics for Nigerian SMEs, built end to end solo over 12 weeks for the Gimbalabs Piece of Pie Hackathon, on the Draper Dragon venture pitch track. Atomic Postgres slot reservation prevents double-booking under concurrent load; CIP-0020 metadata confirmed on Cardano mainnet in 13 seconds; SHA-256 proof-of-delivery anchored on-chain. Pilot route Uyo to Lagos.",
    tech: "next.js 14, supabase, mesh sdk, cardano",
    href: "https://haulink.xyz",
    external: true,
    badge: {
      label: "Featured in Gimbalabs Piece of Pie Yearbook 2026",
      href: "https://gimbalabs.com/piece-of-pie-yearbook/projects/haulink",
    },
  },
  {
    title: "Merkle Tree Anchor",
    meta: "Research",
    summary: "Cryptographic proof mechanism for sensor data integrity on Cardano.",
    tech: "plutus v3, aiken",
    href: "/work/merkle-tree-anchor",
    external: false,
  },
  {
    title: "GroundBase",
    meta: "Building",
    summary: "Community hub site for makers. Notion API-powered opportunities board.",
    tech: "next.js 14, notion api",
    href: "https://gndbase.xyz",
    external: true,
  },
];

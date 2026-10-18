/**
 * Site-wide content. Moved here verbatim from the old single-page home and the
 * old /about page so each page can import what it needs. Do not reword facts.
 */

export const EMAIL = "babdulazeez3@gmail.com";

export const RESUME_URL =
  "https://drive.google.com/file/d/18QR-bdUOj7XQ6p1l4pGC581mTiYsuOO3/view";

export const socialLinks = [
  { label: "GitHub", value: "FoladDTechie", href: "https://github.com/FoladDTechie" },
  { label: "X", value: "@AY_ZED_", href: "https://x.com/AY_ZED_" },
  {
    label: "LinkedIn",
    value: "Abdulazeez Bello",
    href: "https://www.linkedin.com/in/abdulazeez-folaranmi-bello-38b83419a/",
  },
  { label: "GroundBase", value: "gndbase.xyz", href: "https://gndbase.xyz" },
];

export const articles = [
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

export const experience = [
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
] as { org: string; role: string; period?: string; place?: string; body: string; tags?: string[] }[];

export const toolkit = [
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

export const stackLayers = [
  {
    label: "Infra",
    items: [
      "Kubernetes (k3s/k8s, bare metal), Helm, Docker, GitLab CI/CD",
      "Mosquitto MQTT (multi-listener TLS + ACL), Keycloak (RBAC, OAuth)",
      "PostgreSQL via CloudNativePG, TLS/PKI + Let's Encrypt",
      "Kubernetes Secrets, ingress/DNS routing",
    ],
  },
  {
    label: "Firmware",
    items: [
      "RP2040/RP2350 (Pico W), ESP32, MicroPython + C/C++",
      "Cellular LTE via AT commands (TLS-over-AT), WiFi/MQTT",
      "Sensor integration (particulate matter, gas, current sensing)",
      "SPI/I²C/UART, watchdog timers, OTA firmware, KiCad",
    ],
  },
  {
    label: "Power",
    items: [
      "48V LiFePO4 battery systems, Victron BMV-712 (SOC sync)",
      "MPPT solar charge controllers, CC/CV charging",
      "DC-DC buck/boost conversion, custom current-sensing (INA226)",
      "Thermal management, voltage regulation",
    ],
  },
];

export type CommunityEntry = {
  eyebrow: string;
  name: string;
  body: string;
  meta?: string;
  actions?: { label: string; href: string }[];
};

export const communityEntries: CommunityEntry[] = [
  {
    eyebrow: "Physical AI · one of 20 worldwide",
    name: "Chapter Lead, Cyberwave",
    body: "Running Physical AI workshops, meetups and hackathons through GroundBase. I am one of 20 chapter leads worldwide. In-person meetups are held in Uyo.",
    actions: [
      { label: "gndbase.xyz", href: "https://gndbase.xyz" },
      { label: "Why Physical AI", href: "/physical-ai" },
    ],
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
    actions: [
      {
        label: "View the credential",
        href: "https://cexplorer.io/asset/asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf",
      },
    ],
  },
  {
    eyebrow: "Meetup",
    name: "Founders Friday Uyo",
    body: "Regular participant and collaborator.",
  },
];

/** From the old /about "Community & volunteering" list. */
export const volunteering = [
  {
    period: "2023 to present",
    title: "Cardano Catalyst Circle",
    role: "Community Reviewer",
    body: "Contributing to the governance of the Cardano ecosystem by reviewing technical proposals and supporting ecosystem growth.",
  },
  {
    period: "2022 to present",
    title: "Local STEM Mentorship",
    role: "Embedded Systems Mentor",
    body: "Teaching IoT concepts and C++ programming to university students, bridging the gap between hardware theory and practice.",
  },
];

export const sdgs = [
  {
    id: 11,
    color: "#FD9D24",
    title: "Sustainable Cities",
    body: "Building IoT networks for smarter, cleaner urban environments.",
  },
  {
    id: 13,
    color: "#3F7E44",
    title: "Climate Action",
    body: "Leveraging blockchain for verifiable environmental data.",
  },
];

export const hobbies = ["Drone Piloting", "Technical Writing", "Travel"];

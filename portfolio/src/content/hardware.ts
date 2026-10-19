/**
 * Hardware designs catalogue: six open-source KiCad power electronics
 * reference designs. `hardware` is hardware-designs.json converted to
 * TypeScript with every value unchanged. Do not reword it: the status,
 * licence and warning lines are deliberate.
 *
 * Images are served from public/hardware/<slug>/ (schematic.png, sim.png,
 * photo.jpg). A null image, or a path whose file is missing, renders a
 * placeholder.
 */

export type HardwareCategory = "Sensing" | "Power path" | "Power conversion" | "Battery";

export type HardwareSpec = { label: string; value: string };

export type HardwareImages = {
  schematic: string | null;
  plot: string | null;
  photo: string | null;
};

export type HardwareDesign = {
  slug: string;
  order: number;
  featured: boolean;
  title: string;
  tagline: string;
  summary: string;
  category: HardwareCategory;
  specs: HardwareSpec[];
  parts: string[];
  checks: string[];
  limits: string[];
  liIon: boolean;
  images: HardwareImages;
};

export type HardwareCatalogue = {
  repo: string;
  status: string;
  aiNote: string;
  licence: string;
  warning: string;
  designs: HardwareDesign[];
};

export const hardware: HardwareCatalogue = {
  repo: "https://github.com/FoladDTechie/Power-Electrronics",
  status: "Design only, not fabricated, not bench-tested",
  aiNote: "Schematic generated with AI assistance at my direction; I reviewed pin assignments against the datasheets.",
  licence: "Free to use: scripts MIT, hardware CERN-OHL-P-2.0",
  warning: "Reference design. Test first with a current-limited supply and protection. Not for unattended use.",
  designs: [
    {
      slug: "adc-input-scaler",
      order: 1,
      featured: true,
      title: "ADC input scaler",
      tagline: "0–30 V into an ESP32-S3 ADC pin",
      summary: "Scales a battery or bus voltage into one ESP32-S3 ADC channel, filters it for the sampler and clamps the pin against wiring faults. An optional high-side switch disconnects the divider between readings so a battery isn't drained.",
      category: "Sensing",
      specs: [
        { label: "Input", value: "0–30 V" },
        { label: "Ratio", value: "1/21, 0.1 % thin film" },
        { label: "Accuracy", value: "±0.21 V at the input" },
        { label: "Bandwidth", value: "167 Hz" },
      ],
      parts: ["RT0805 0.1 %", "BAT54S", "BSS84", "BSS138"],
      checks: ["ERC 0/0", "Netlist PASS", "ngspice"],
      limits: [
        "No TVS or reverse-polarity protection on the input",
        "Clamp current can lift the 3.3 V rail while the ESP32 sleeps",
      ],
      liIon: true,
      images: {
        schematic: "/hardware/adc-input-scaler/schematic.png",
        plot: "/hardware/adc-input-scaler/sim.png",
        photo: null,
      },
    },
    {
      slug: "solar-oring",
      order: 2,
      featured: false,
      title: "Solar OR-ing",
      tagline: "Ideal diode vs Schottky, on one board",
      summary: "A solar panel and a 12 V battery share one 3 A load. The panel side uses an LTC4412 ideal diode, the battery side a plain Schottky, so the two can be compared on the bench.",
      category: "Power path",
      specs: [
        { label: "Load", value: "up to 3 A" },
        { label: "Ideal diode drop", value: "≤ 48 mV at 3 A" },
        { label: "Schottky drop", value: "≤ 0.5 V, 1.5 W at 3 A" },
        { label: "Host signals", value: "STAT, CTL" },
      ],
      parts: ["LTC4412", "SiS443DN", "SS34", "SMAJ24A"],
      checks: ["ERC 0/0", "Netlist PASS", "No SPICE model"],
      limits: [
        "TVS clamp 38.9 V is above the LTC4412's 36 V maximum",
        "No reverse-panel protection or load fuse",
      ],
      liIon: true,
      images: { schematic: "/hardware/solar-oring/schematic.png", plot: null, photo: null },
    },
    {
      slug: "bus-5v",
      order: 3,
      featured: false,
      title: "5 V bus",
      tagline: "9–24 V buck or 1S Li-ion boost",
      summary: "Two ways to make 5 V on one sheet: a synchronous buck from 9–24 V, or a boost from a single Li-ion cell. Both have a fuse and reverse-polarity protection.",
      category: "Power conversion",
      specs: [
        { label: "Buck", value: "9–24 V to 5 V, 2.5 A" },
        { label: "Boost", value: "3.0–4.2 V to 5 V, 1 A" },
        { label: "Buck peak", value: "3.23 A vs 3.85 A limit" },
        { label: "Protection", value: "Fuse, P-FET, TVS" },
      ],
      parts: ["LMR33630A", "MT3608", "SiS443DN", "XAL6060"],
      checks: ["ERC 0/0", "Netlist PASS", "ngspice"],
      limits: [
        "TVS clamp 38.9 V is just above the LMR33630's 38 V maximum",
        "MT3608 datasheet gives typical values only",
      ],
      liIon: true,
      images: {
        schematic: "/hardware/bus-5v/schematic.png",
        plot: "/hardware/bus-5v/sim.png",
        photo: null,
      },
    },
    {
      slug: "solar-charger",
      order: 4,
      featured: false,
      title: "Solar charger",
      tagline: "1S Li-ion at 2 A from a 36-cell panel",
      summary: "A BQ24650 synchronous charger that holds the panel at a fixed voltage near its maximum power point and charges one Li-ion cell, with a thermistor window of 0–45 °C.",
      category: "Battery",
      specs: [
        { label: "Charge", value: "2 A to 4.159 V" },
        { label: "Worst-case max", value: "4.194 V" },
        { label: "Panel set point", value: "17.83 V" },
        { label: "Temperature", value: "0–45 °C" },
      ],
      parts: ["BQ24650", "BUK9M14-40E", "XAL6060", "103AT NTC"],
      checks: ["ERC 0/0", "Netlist PASS", "ngspice"],
      limits: [
        "TVS clamp 38.9 V is above the BQ24650's 33 V VCC maximum",
        "Fixed set point; doesn't track panel temperature",
      ],
      liIon: true,
      images: {
        schematic: "/hardware/solar-charger/schematic.png",
        plot: "/hardware/solar-charger/sim.png",
        photo: null,
      },
    },
    {
      slug: "drone-pdb",
      order: 5,
      featured: true,
      title: "Drone power board",
      tagline: "4S/6S, anti-spark, current sense, BECs",
      summary: "A drone power distribution board with an XT60 input, a low-side anti-spark switch with precharge, INA226 current sensing on I²C, 5 V and 12 V BECs, and a low-voltage buzzer that works without the flight controller.",
      category: "Battery",
      specs: [
        { label: "Bus", value: "30 A continuous, 60 A burst" },
        { label: "Plug-in peak", value: "2.5 A vs 619 A without precharge" },
        { label: "BECs", value: "5 V 2 A, 12 V 1.5 A" },
        { label: "Alarm", value: "3.5 V per cell" },
      ],
      parts: ["IPT012N08N5", "INA226", "TPS54360", "MCP65R41"],
      checks: ["ERC 0/0", "Netlist PASS", "ngspice"],
      limits: [
        "TVS clamp 42.1 V is above the INA226's 40 V input maximum",
        "Disarming with motors running isn't supported",
      ],
      liIon: true,
      images: {
        schematic: "/hardware/drone-pdb/schematic.png",
        plot: "/hardware/drone-pdb/sim.png",
        photo: null,
      },
    },
    {
      slug: "bms-6s",
      order: 6,
      featured: false,
      title: "6S BMS",
      tagline: "BQ76930 protection board, host on I²C",
      summary: "A protection board for a 6-series lithium pack around TI's BQ76930. It carries the charge and discharge MOSFETs and a 1 mΩ sense resistor, and needs a microcontroller on I²C to configure it.",
      category: "Battery",
      specs: [
        { label: "Pack", value: "6S, 15–25.2 V" },
        { label: "Discharge", value: "20 A continuous" },
        { label: "Trips", value: "30.6 A / 320 ms, 66.6 A / 100 µs" },
        { label: "Cell limits", value: "4.25 V / 3.0 V" },
      ],
      parts: ["BQ76930", "IPT012N08N5", "2N7002", "WSK2512"],
      checks: ["ERC 0/0", "Netlist PASS", "ngspice"],
      limits: [
        "Needs host firmware, which isn't part of the design",
        "External cell balancing not fitted",
      ],
      liIon: true,
      images: {
        schematic: "/hardware/bms-6s/schematic.png",
        plot: "/hardware/bms-6s/sim.png",
        photo: null,
      },
    },
  ],
};

/** Section copy shared by the home page, the Lab index and the catalogue. */
export const HARDWARE_TITLE = "Hardware designs";
export const HARDWARE_INTRO =
  "Open-source KiCad reference designs, from a sensor input to a 6S battery protector.";

export const HARDWARE_PATH = "/lab/hardware";
export const hardwareHref = (slug: string) => `${HARDWARE_PATH}/${slug}`;

export const hardwareDesigns = [...hardware.designs].sort((a, b) => a.order - b.order);
export const featuredHardware = hardwareDesigns.filter((d) => d.featured);
/** Filter chips, in the order the categories first appear. */
export const hardwareCategories = [...new Set(hardwareDesigns.map((d) => d.category))];

export const getHardwareDesign = (slug: string) => hardwareDesigns.find((d) => d.slug === slug);

/**
 * Links into the GitHub repo. Each design's files sit one folder deeper than
 * its slug (<slug>/<slug>/README.md); if the repo is flattened, change `dir`.
 */
export function hardwareRepoLinks(slug: string) {
  const dir = `${slug}/${slug}`;
  return {
    files: `${hardware.repo}/tree/main/${dir}`,
    pdf: `${hardware.repo}/blob/main/${dir}/docs/${slug}-schematic.pdf`,
    readme: `${hardware.repo}/blob/main/${dir}/README.md`,
  };
}

/**
 * "Drone power board" -> "drone power board" for use mid-sentence, while
 * "ADC input scaler", "5 V bus" and "6S BMS" keep their capitals.
 */
export function inSentence(title: string) {
  return /^[A-Z][a-z]/.test(title) ? title[0].toLowerCase() + title.slice(1) : title;
}

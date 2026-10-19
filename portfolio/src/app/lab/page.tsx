import Link from "next/link";
import { PageShell } from "@/components/Page";
import { HARDWARE_INTRO, HARDWARE_PATH, HARDWARE_TITLE, hardware, hardwareDesigns } from "@/content/hardware";

export const metadata = {
  title: "Lab",
  description: `Small hardware builds, documented like readmes: Cardano Doorbell, ADAClock, Hardware TOTP Token, the Pico W ADA Ticker and ${hardwareDesigns.length} open-source KiCad power electronics reference designs.`,
};

type LabProject = {
  title: string;
  description: string;
  /** "Functional", "Concept", "Complete", or the hardware catalogue's status line. */
  status: string;
  tags: string[];
  href?: string;
  /** Footer link text; defaults to "Read the build →". */
  cta?: string;
};

const labProjects: LabProject[] = [
  {
    title: HARDWARE_TITLE,
    description: HARDWARE_INTRO,
    status: hardware.status,
    tags: ["Hardware", "KiCad"],
    href: HARDWARE_PATH,
    cta: `See all ${hardwareDesigns.length} designs →`,
  },
  {
    title: "Cardano Doorbell",
    description:
      "A Pico W that lights an LED when a tagged transaction hits a wallet. Chain state made physical.",
    status: "Functional",
    tags: ["Hardware", "Cardano"],
    href: "/lab/cardano-doorbell",
  },
  {
    title: "ADAClock",
    description: "A Cardano-native BlockClock. E-ink desk object cycling live network metrics.",
    status: "Concept",
    tags: ["Hardware", "Cardano"],
    href: "/lab/adaclock",
  },
  {
    title: "Hardware TOTP Token",
    description:
      "A five-dollar microcontroller generating real 2FA codes. No app, no internet, no external crypto libraries — HMAC-SHA1 hand-rolled from scratch.",
    status: "Functional",
    tags: ["Hardware", "Cryptography"],
    href: "/lab/hardware-totp-token",
  },
  {
    title: "Pico W ADA Ticker",
    description: "Live ADA/USD price on an SSD1306 OLED. First hardware + crypto integration.",
    status: "Complete",
    tags: ["Hardware"],
  },
];

const statusDot: Record<string, string> = {
  Functional: "bg-status-live",
  Concept: "bg-status-prototype",
  Complete: "bg-accent",
  [hardware.status]: "bg-status-building",
};

export default function LabIndexPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "Lab" }]}
      title="Lab"
      intro="Passion builds. Documented like readmes, written like stories."
    >
      <section aria-label="Lab builds">
        <ul className="grid gap-4 md:grid-cols-2">
          {labProjects.map((p) => (
            <li key={p.title} className={`card flex flex-col ${p.href ? "card-link" : ""}`}>
              <p className="meta flex items-center gap-2">
                <span aria-hidden="true" className={`inline-block h-2 w-2 rounded-full ${statusDot[p.status]}`} />
                {p.status} · {p.tags.join(" · ")}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-fg-strong">
                {p.href ? (
                  <Link href={p.href} className="stretched-link">
                    {p.title}
                  </Link>
                ) : (
                  p.title
                )}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{p.description}</p>
              <p className="mt-auto pt-6 text-sm">
                {p.href ? (
                  <span aria-hidden="true" className="font-medium text-accent">
                    {p.cta ?? "Read the build →"}
                  </span>
                ) : (
                  <span className="meta">No write-up yet</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="prose-body">
        Larger projects with full case studies are on the{" "}
        <Link href="/work" className="text-link">
          Work
        </Link>{" "}
        page.
      </p>
    </PageShell>
  );
}

import Link from "next/link";
import { PageShell } from "@/components/Page";

export const metadata = {
  title: "Lab",
  description:
    "Small hardware builds, documented like readmes: Cardano Doorbell, ADAClock, Hardware TOTP Token and the Pico W ADA Ticker.",
};

type LabProject = {
  title: string;
  description: string;
  status: "Functional" | "Concept" | "Complete";
  tags: string[];
  href?: string;
};

const labProjects: LabProject[] = [
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

const statusDot = {
  Functional: "bg-status-live",
  Concept: "bg-status-prototype",
  Complete: "bg-accent",
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
                    Read the build →
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

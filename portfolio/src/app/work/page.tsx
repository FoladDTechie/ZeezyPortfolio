import Link from "next/link";
import { PageShell, Section } from "@/components/Page";
import { OtherWorkCard, WorkCard } from "@/components/WorkCard";
import { otherWork, workCards } from "@/content/work";

export const metadata = {
  title: "Work",
  description:
    "Hardware and systems projects by Abdulazeez Bello: the AirChain cellular sensor node, Pedal Power, Scan Rover, estate access control and self-hosted infrastructure.",
};

export default function WorkPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
      title="Work"
      intro="Hardware first: sensors, power, radios and firmware. Each project has its own page."
    >
      <Section id="projects" title="Projects">
        <ul className="grid gap-4 md:grid-cols-2">
          {workCards.map((card) => (
            <WorkCard key={card.slug} card={card} />
          ))}
        </ul>
      </Section>

      <Section
        id="other-work"
        title="Other work"
        intro="Software and research projects, kept here below the hardware work."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {otherWork.map((item) => (
            <OtherWorkCard key={item.title} item={item} />
          ))}
        </ul>
      </Section>

      <p className="prose-body">
        Smaller experiments live in{" "}
        <Link href="/lab" className="text-link">
          the lab
        </Link>
        .
      </p>
    </PageShell>
  );
}

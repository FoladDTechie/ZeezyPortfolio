import { PageShell, Section } from "@/components/Page";
import Gallery from "@/components/Gallery";
import SideQuests from "@/components/SideQuests";
import { hobbies } from "@/content/site";

export const metadata = {
  title: "Side quests",
  description: "Personal goals, offline benchmarks and a photo archive.",
};

const benchmarks = [
  { label: "Chess rating", value: "629", href: "https://www.chess.com/member/ayy_zedd", linkLabel: "Play me" },
  { label: "Bench press", value: "105kg", href: "https://hevy.com/user/buffzeezy", linkLabel: "View stats" },
];

export default function SideQuestsPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Side quests" }]}
      title="Side quests"
      intro="Goals outside work, tracked in public, plus a few photos."
    >
      <Section id="quests" title="Goals">
        <SideQuests />
      </Section>

      <Section id="offline" title="Offline mode">
        <dl className="grid gap-4 sm:grid-cols-2">
          {benchmarks.map((b) => (
            <div key={b.label} className="card">
              <dt className="meta">{b.label}</dt>
              <dd className="mt-2 font-jetbrains-mono text-3xl font-bold text-fg-strong tabular-nums">{b.value}</dd>
              <dd className="mt-3">
                <a href={b.href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                  {b.linkLabel} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <p className="prose-body mt-6 text-fg-muted">Also: {hobbies.join(", ")}.</p>
      </Section>

      <Section id="gallery" title="Visual archive">
        <Gallery />
      </Section>
    </PageShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import { PageShell, Section } from "@/components/Page";
import { communityEntries, volunteering } from "@/content/site";

export const metadata = {
  title: "Community",
  description:
    "Chapter Lead, Cyberwave; organizer of GroundBase and Pi Jam; TEN Jamaica Global Challenge finalist; Nigerian Society of Engineers; ROS Naija; Intersect MBO.",
};

export default function CommunityPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "Community" }]}
      title="Community"
      intro="Where I organise, take part and volunteer."
    >
      <Section id="roles" title="Roles and memberships">
        <ul className="grid gap-4 md:grid-cols-2">
          {communityEntries.map((entry) => (
            <li key={entry.name} className="card flex flex-col">
              <p className="meta">{entry.eyebrow}</p>
              <h3 className="mt-2 text-xl font-semibold text-fg-strong">{entry.name}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{entry.body}</p>
              {entry.meta && (
                <p className="meta mt-3 [overflow-wrap:anywhere]" translate="no">
                  {entry.meta}
                </p>
              )}
              {entry.actions && (
                <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-5">
                  {entry.actions.map((a) => {
                    const external = a.href.startsWith("http");
                    return (
                      <li key={a.href}>
                        {external ? (
                          <a href={a.href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                            {a.label} <span aria-hidden="true">↗</span>
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          <Link href={a.href} className="text-link text-sm">
                            {a.label} <span aria-hidden="true">→</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="physical-ai" title="Physical AI">
        <p className="prose-body">
          Physical AI is AI that doesn&rsquo;t stay on a screen. It senses the physical world,
          reasons about what it sees, and acts through motors and machines. AirChain already does
          the &ldquo;sense&rdquo; half. Physical AI adds the &ldquo;decide and act&rdquo; half.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/physical-ai" className="text-link">
            Why I&rsquo;m exploring it <span aria-hidden="true">→</span>
          </Link>
          <Link href="/work/scan-rover" className="text-link">
            Scan Rover, my first Physical AI build <span aria-hidden="true">→</span>
          </Link>
        </p>
      </Section>

      <Section id="volunteering" title="Volunteering">
        <ul className="divide-y divide-rule border-y border-rule">
          {volunteering.map((v) => (
            <li key={v.title} className="grid gap-2 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
              <p className="meta">{v.period}</p>
              <div>
                <h3 className="font-semibold text-fg-strong">{v.title}</h3>
                <p className="meta mt-1 text-accent">{v.role}</p>
                <p className="prose-body mt-2 text-fg-muted">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="intersect-credential" title="Intersect credential">
        <figure className="grid items-center gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
          <Image
            src="/images/intersect_image.png"
            alt="Intersect individual member credential"
            width={280}
            height={280}
            className="w-full max-w-[220px] rounded-card border border-edge"
          />
          <figcaption>
            <p className="text-lg font-semibold text-fg-strong">
              <a
                href="https://cexplorer.io/asset/asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Intersect, individual member <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <p className="prose-body mt-3">
              Participant in the coordination layer of the Cardano ecosystem, contributing to
              infrastructure, governance, and network growth.
            </p>
            <dl className="meta mt-4 space-y-1">
              <div className="flex gap-2">
                <dt className="shrink-0">Minted</dt>
                <dd>
                  <time dateTime="2026-04-08">2026-04-08</time>
                </dd>
              </div>
              <div className="flex min-w-0 gap-2">
                <dt className="shrink-0">Fingerprint</dt>
                <dd className="min-w-0 break-all" translate="no">
                  asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf
                </dd>
              </div>
            </dl>
          </figcaption>
        </figure>
      </Section>
    </PageShell>
  );
}

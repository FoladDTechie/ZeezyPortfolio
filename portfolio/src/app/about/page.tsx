import Image from "next/image";
import Link from "next/link";
import { PageShell, Section } from "@/components/Page";
import { experience, RESUME_URL, sdgs, stackLayers, toolkit } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "About Abdulazeez Bello: embedded systems engineer and technical co-founder. Experience, toolkit, stack and mission.",
};

export default function AboutPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      title="About"
      intro="Background, experience and the tools I use."
    >
      <section aria-label="Biography" className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
        <div className="space-y-5">
          <p className="prose-body">
            Abdulazeez Bello is an embedded systems engineer and technical co-founder based in Uyo,
            Akwa Ibom, Nigeria. He builds physical technology end-to-end: from a KiCad schematic
            and a soldering iron, through firmware, up to the Kubernetes cluster the hardware
            reports into.
          </p>
          <p className="prose-body">
            Growing up in Lagos, where air pollution is widespread but almost never measured,
            shaped what he wanted to build. Technology that makes invisible environmental and
            infrastructure problems visible and actionable. That instinct is the origin story
            behind{" "}
            <a href="https://airchain.ng" target="_blank" rel="noopener noreferrer" className="text-link">
              AirChain
            </a>
            , and it shows up in most of his work. Don&rsquo;t theorize about a problem, instrument
            it, then fix it. When something breaks, the instinct is to trace the symptom to its
            root cause rather than patch around it, whether that is a UART fault traced to a
            voltage mismatch or a boost-converter failure traced to a thermal issue.
          </p>
          <p className="prose-body">
            He moves comfortably between infrastructure (Kubernetes, CI/CD, auth systems),
            firmware, power electronics, and the product side: pitches, technical writing, public
            speaking, and organizing community events. He is a Graduate Member of the Nigerian
            Society of Engineers and an Intersect MBO member.
          </p>
          <p className="prose-body">
            With{" "}
            <a href="https://haulink.xyz" target="_blank" rel="noopener noreferrer" className="text-link">
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
        </div>

        <figure className="mx-auto w-full max-w-[240px]">
          <Image
            src="/images/nft_image.webp"
            alt="Azeez Bello"
            width={280}
            height={280}
            className="block w-full rounded-card border border-edge"
          />
          <figcaption className="meta mt-3">
            <a
              href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              View in explorer <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      </section>

      <Section id="experience" title="Experience">
        <ol className="divide-y divide-rule border-y border-rule">
          {experience.map((job) => (
            <li key={job.org} className="grid gap-2 py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
              <div className="meta">
                {job.period && <p>{job.period}</p>}
                {job.place && <p>{job.place}</p>}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-fg-strong">{job.org}</h3>
                <p className="meta mt-1 text-accent">{job.role}</p>
                <p className="prose-body mt-3 text-fg-muted">{job.body}</p>
                {job.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
                    {job.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-link">
            Resume <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </Section>

      <Section id="toolkit" title="Toolkit">
        <dl className="divide-y divide-rule border-y border-rule">
          {toolkit.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
              <dt className="font-semibold text-fg-strong">{row.label}</dt>
              <dd className="prose-body text-fg-muted">{row.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="stack" title="The stack" intro="Infra, firmware, and power, in one product.">
        <div className="grid gap-8 md:grid-cols-3">
          {stackLayers.map((layer) => (
            <div key={layer.label}>
              <h3 className="font-semibold text-fg-strong">{layer.label}</h3>
              <ul className="mt-3 space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="meta leading-relaxed text-fg-muted" translate="no">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="mission" title="Mission">
        <blockquote className="border-l-2 border-accent pl-6">
          <p className="text-lg leading-relaxed text-fg italic">
            &ldquo;If you can&rsquo;t measure it, you can&rsquo;t improve it.&rdquo;
          </p>
          <footer className="meta mt-2">Lord Kelvin</footer>
        </blockquote>
        <p className="prose-body mt-6">
          We stand at a critical intersection where physical infrastructure meets cryptographic
          certainty. The systems we build over the next decade will define our relationship with
          the planet&rsquo;s resource boundary constraints. My work is focused on creating the
          embedded hardware and decentralized verification protocols necessary for actionable,
          trustworthy data.
        </p>
        <p className="prose-body mt-4">
          Beyond the embedded systems engineering work, I spend a significant portion of my time
          building community initiatives. I grew up in Lagos, Nigeria, watching first-hand how the
          lack of actionable public data stalls environmental policy. My driving force is ensuring
          the technology we introduce reaches the people who need it most.
        </p>

        <h3 className="mt-10 font-semibold text-fg-strong">SDG commitments</h3>
        <ul className="mt-4 grid gap-6 md:grid-cols-3">
          {sdgs.map((sdg) => (
            <li key={sdg.id} className="border-l-4 pl-4" style={{ borderColor: sdg.color }}>
              <p className="meta">UN Sustainable Development Goal {sdg.id}</p>
              <p className="mt-1 font-semibold text-fg-strong">{sdg.title}</p>
              <p className="mt-1 text-sm text-fg-muted">{sdg.body}</p>
            </li>
          ))}
          <li className="border-l-4 border-accent pl-4">
            <p className="meta">Open source</p>
            <p className="mt-1 font-semibold text-fg-strong">Tech for good</p>
            <p className="mt-1 text-sm text-fg-muted">
              Creating open-source tools for social impact and grass-roots enablement.
            </p>
          </li>
        </ul>
      </Section>

      <p className="prose-body">
        Off the clock:{" "}
        <Link href="/side-quests" className="text-link">
          side quests, benchmarks and photos
        </Link>
        .
      </p>
    </PageShell>
  );
}

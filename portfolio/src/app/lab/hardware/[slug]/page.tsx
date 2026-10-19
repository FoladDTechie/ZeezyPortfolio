import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { ChipList, DesignFrame, StatusPill } from "@/components/HardwareDesign";
import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { MethodNote, PlainList } from "@/components/WorkDetail";
import {
  HARDWARE_PATH,
  HARDWARE_TITLE,
  getHardwareDesign,
  hardware,
  hardwareDesigns,
  hardwareRepoLinks,
  inSentence,
} from "@/content/hardware";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return hardwareDesigns.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const design = getHardwareDesign((await params).slug);
  if (!design) return {};
  return { title: `${design.title} · ${HARDWARE_TITLE}`, description: design.summary };
}

/** One figure: links to the file itself, which opens full size in a new tab. */
function Figure({
  src,
  alt,
  caption,
  ratio,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  ratio: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-chip transition-opacity hover:opacity-90"
      >
        <DesignFrame
          image={{ src, alt }}
          title=""
          ratio={ratio}
          sizes="(max-width: 1023px) 100vw, 960px"
          priority={priority}
        />
        <span className="sr-only"> (opens full size in a new tab)</span>
      </a>
      <figcaption className="meta mt-2">
        {caption} · select the image to open it full size <span aria-hidden="true">↗</span>
      </figcaption>
    </figure>
  );
}

export default async function HardwareDesignPage({ params }: Params) {
  const design = getHardwareDesign((await params).slug);
  if (!design) notFound();

  const { photo, schematic, plot } = design.images;
  const t = inSentence(design.title);
  const links = hardwareRepoLinks(design.slug);
  const buttons = [
    { label: "View files on GitHub", href: links.files, primary: true },
    { label: "Schematic PDF", href: links.pdf, primary: false },
    { label: "Read the full write-up", href: links.readme, primary: false },
  ];

  return (
    <LabProjectLayout
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Lab", href: "/lab" },
        { label: HARDWARE_TITLE, href: HARDWARE_PATH },
        { label: design.title },
      ]}
      category={design.category}
      title={design.title}
      hook={
        <>
          <p>{design.tagline}</p>
          <p className="mt-4">
            <StatusPill>{hardware.status}</StatusPill>
          </p>
        </>
      }
      links={[{ label: "← All hardware designs", href: HARDWARE_PATH }]}
      width="wide"
    >
      <section aria-label="Images" className="space-y-8">
        {photo && <Figure src={photo} alt={`Photo of the ${t}`} caption="Photo" ratio="aspect-[3/2]" priority />}
        {schematic ? (
          <Figure
            src={schematic}
            alt={`Schematic of the ${t}`}
            caption="Schematic"
            ratio="aspect-[7/5]"
            priority={!photo}
          />
        ) : (
          <DesignFrame image={null} title={design.title} sizes="" ratio="aspect-[5/2]" />
        )}
        {plot && (
          <Figure src={plot} alt={`Simulation plot for the ${t}`} caption="Simulation" ratio="aspect-[5/2]" />
        )}
      </section>

      <LabSection title="Summary">
        <p className="text-base leading-relaxed">{design.summary}</p>
      </LabSection>

      <LabSection title="Specs">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Specs of the {t}</caption>
          <tbody>
            {design.specs.map((s) => (
              <tr key={s.label} className="border-b border-rule last:border-b-0">
                <th scope="row" className="w-2/5 py-2 pr-4 align-top font-normal text-fg-subtle">
                  {s.label}
                </th>
                <td className="py-2 align-top text-fg">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LabSection>

      <div className="grid gap-14 md:grid-cols-2 md:gap-8">
        <LabSection title="Key parts">
          <ChipList items={design.parts} label="Key parts" kind="part" />
        </LabSection>
        <LabSection title="Checks">
          <ChipList items={design.checks} label="Checks" kind="check" />
        </LabSection>
      </div>

      {/*
        Article slot. When the site gains MDX support, render
        content/hardware/<slug>.mdx here, below the specs, and skip it when the
        file does not exist. The site has no markdown pipeline yet.
      */}

      <LabSection title="Known limits">
        <PlainList items={design.limits} />
      </LabSection>

      {design.liIon && (
        <div
          role="note"
          aria-label="Warning"
          className="flex gap-3 rounded-card border border-status-building bg-surface p-4 text-base leading-relaxed"
        >
          <TriangleAlert size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-status-building" />
          <p>
            <strong className="font-semibold text-fg-strong">Warning. </strong>
            {hardware.warning}
          </p>
        </div>
      )}

      <ul className="flex flex-wrap gap-3">
        {buttons.map((b) => (
          <li key={b.label}>
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className={b.primary ? "btn" : "btn btn-secondary"}
            >
              {b.label} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <MethodNote>{hardware.aiNote}</MethodNote>
    </LabProjectLayout>
  );
}

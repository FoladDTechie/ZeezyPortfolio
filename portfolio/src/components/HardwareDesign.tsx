import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { hardware, hardwareHref, inSentence, type HardwareDesign } from "@/content/hardware";

/** Status line as a small label: amber dot (same as "building" elsewhere) plus text. */
export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-chip border border-edge bg-surface px-2 py-0.5 font-jetbrains-mono text-xs text-fg">
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-status-building" />
      {children}
    </span>
  );
}

export function LicenceBadge() {
  return <span className="tag border-edge bg-surface text-fg-muted">{hardware.licence}</span>;
}

/** The image a card or page leads with: the photo once there is one, else the schematic. */
export function leadImage(design: HardwareDesign) {
  const { photo, schematic } = design.images;
  const t = inSentence(design.title);
  if (photo) return { src: photo, alt: `Photo of the ${t}` };
  if (schematic) return { src: schematic, alt: `Schematic of the ${t}` };
  return null;
}

/**
 * Fixed-ratio frame on a white ground, so schematics stay readable on the dark
 * page. With no image it shows the design's title instead.
 */
export function DesignFrame({
  image,
  title,
  sizes,
  ratio = "aspect-[7/5]",
  priority,
}: {
  image: { src: string; alt: string } | null;
  title: string;
  sizes: string;
  ratio?: string;
  priority?: boolean;
}) {
  if (!image) {
    return (
      <div
        className={`${ratio} flex flex-col items-center justify-center gap-1 rounded-chip border border-dashed border-edge bg-surface-hi p-4 text-center`}
      >
        <span className="font-jetbrains-mono text-sm font-semibold text-fg">{title}</span>
        <span className="meta">No image yet</span>
      </div>
    );
  }
  return (
    <div className={`${ratio} relative overflow-hidden rounded-chip border border-rule bg-white`}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-contain" />
    </div>
  );
}

/** Label/value pairs, compact. */
export function SpecList({ specs }: { specs: HardwareDesign["specs"] }) {
  return (
    <dl className="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] gap-x-4 gap-y-1 text-sm">
      {specs.map((s) => (
        <div key={s.label} className="contents">
          <dt className="meta">{s.label}</dt>
          <dd className="text-fg tabular-nums">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Parts are plain tags; checks are a brighter tag so the two rows read apart. */
export function ChipList({ items, label, kind }: { items: string[]; label: string; kind: "part" | "check" }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className={kind === "check" ? "tag border-edge bg-surface-hi text-fg" : "tag"}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Design card, used on the home page and the catalogue. Same anatomy as the
 * project cards: the whole card is the link target via .stretched-link.
 */
export function HardwareCard({
  design,
  headingLevel = 3,
  sizes,
}: {
  design: HardwareDesign;
  headingLevel?: 2 | 3;
  sizes: string;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <li className="card card-link flex flex-col">
      <DesignFrame image={leadImage(design)} title={design.title} sizes={sizes} />

      <p className="meta mt-4">{design.category}</p>
      <H className="mt-1 text-xl leading-snug font-semibold text-fg-strong">
        <Link href={hardwareHref(design.slug)} className="stretched-link">
          {design.title}
        </Link>
      </H>
      <p className="mt-1 font-medium text-fg">{design.tagline}</p>
      <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-fg-muted">{design.summary}</p>

      <div className="mt-4">
        <SpecList specs={design.specs.slice(0, 3)} />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex gap-3">
          <span className="meta w-12 shrink-0 pt-0.5">Parts</span>
          <ChipList items={design.parts} label="Key parts" kind="part" />
        </div>
        <div className="flex gap-3">
          <span className="meta w-12 shrink-0 pt-0.5">Checks</span>
          <ChipList items={design.checks} label="Checks" kind="check" />
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="border-t border-rule pt-4">
          <span aria-hidden="true" className="text-sm font-medium text-accent">
            View design →
          </span>
        </div>
      </div>
    </li>
  );
}

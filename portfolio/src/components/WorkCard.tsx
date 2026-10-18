import Link from "next/link";
import type { OtherWork, WorkCard as WorkCardData } from "@/content/work";

/**
 * The project card. One anatomy everywhere: meta line, linked title, summary,
 * metrics, tags, then a footer row. The whole card is the link target.
 */
export function WorkCard({ card, headingLevel = 3 }: { card: WorkCardData; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const path = card.figure.blocks.join(card.figure.flow ? " → " : " · ");
  return (
    <li className="card card-link flex flex-col">
      <p className="meta">{card.meta}</p>
      <H className="mt-2 text-xl leading-snug font-semibold text-fg-strong">
        <Link href={card.href} className="stretched-link">
          {card.title}
        </Link>
      </H>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{card.summary}</p>

      {card.metrics.length > 0 && (
        <ul className="mt-4 space-y-1">
          {card.metrics.map((m) => (
            <li key={m.label} className="text-sm text-fg-muted">
              <strong className="font-jetbrains-mono font-semibold text-accent tabular-nums">{m.value}</strong>{" "}
              {m.label}
            </li>
          ))}
        </ul>
      )}

      {card.tags && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
          {card.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-rule pt-4">
          <span className="meta min-w-0">{path}</span>
          <span aria-hidden="true" className="text-sm font-medium text-accent">
            Case study →
          </span>
        </div>
      </div>
    </li>
  );
}

/** Compact variant for the "Other work" list. Same edge, tighter padding. */
export function OtherWorkCard({ item }: { item: OtherWork }) {
  return (
    <li className="card card--compact card-link flex flex-col">
      <p className="meta">{item.meta}</p>
      <h3 className="mt-1 text-base font-semibold text-fg-strong">
        {item.external ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="stretched-link">
            {item.title} <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link href={item.href} className="stretched-link">
            {item.title}
          </Link>
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.summary}</p>
      <p className="meta mt-3" translate="no">
        {item.tech}
      </p>
      {item.badge && (
        <a
          href={item.badge.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link relative z-10 mt-3 w-fit text-sm"
        >
          {item.badge.label} <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </li>
  );
}

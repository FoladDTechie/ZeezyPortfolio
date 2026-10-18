import type { ReactNode } from "react";

/**
 * Building blocks for /work/* detail pages, used inside LabProjectLayout.
 *
 * ThreeColumnList renders rows as a <dl> per item: on md+ it reads as a table
 * with one visual header row; on phones each row stacks and every cell carries
 * its own small label. The <dt> labels stay in the accessibility tree at every
 * width, so the visual header row is aria-hidden.
 */

type Columns = [string, string, string];
export type Row = [ReactNode, ReactNode, ReactNode];

/**
 * Keep a value and its unit on one line ("3.80 V", "30 s", "158 × 95 mm") and
 * stop a leading hyphen ("-CN") from wrapping away from its word.
 */
function keepUnits(node: ReactNode): ReactNode {
  if (typeof node !== "string") return node;
  return node
    .replace(/(\d) (V|A|s|mm|baud)\b/g, "$1 $2")
    .replace(/(\d) × (\d)/g, "$1 × $2")
    .replace(/(^|\s)-(\w)/g, "$1‑$2");
}

export function ThreeColumnList({ columns, rows }: { columns: Columns; rows: Row[] }) {
  return (
    <div className="text-sm">
      <div
        aria-hidden="true"
        className="hidden grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_minmax(0,1fr)] gap-6 border-b border-edge pb-2 md:grid"
      >
        {columns.map((c) => (
          <span key={c} className="meta">
            {c}
          </span>
        ))}
      </div>
      <ul>
        {rows.map((row, i) => (
          <li key={i} className="border-b border-rule py-4 last:border-b-0">
            <dl className="grid gap-3 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_minmax(0,1fr)] md:gap-6">
              {row.map((cell, j) => (
                <div key={j} className="min-w-0">
                  <dt className="meta mb-1 md:sr-only">{columns[j]}</dt>
                  <dd
                    className={`leading-relaxed ${
                      j === 0 ? "font-jetbrains-mono font-semibold text-fg-strong" : "text-fg-muted"
                    }`}
                  >
                    {keepUnits(cell)}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StatusBlock({ working, open }: { working: ReactNode[]; open: ReactNode[] }) {
  const column = (title: string, items: ReactNode[], dot: string) => (
    <div className="card">
      <h3 className="meta mb-3 flex items-center gap-2">
        <span aria-hidden="true" className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
        {title}
      </h3>
      <ul className="space-y-2.5 font-sans text-sm leading-relaxed text-fg-muted">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-fg-subtle">
              -
            </span>
            <span>{keepUnits(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {column("Working", working, "bg-status-live")}
      {column("Open", open, "bg-status-building")}
    </div>
  );
}

/** Small, muted note on how the work was produced. */
export function MethodNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-edge pl-4 font-jetbrains-mono text-xs leading-relaxed text-fg-subtle">
      {children}
    </p>
  );
}

/** Plain bulleted list in the page's body style. */
export function PlainList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 text-fg-muted">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden="true" className="text-fg-subtle">
            -
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

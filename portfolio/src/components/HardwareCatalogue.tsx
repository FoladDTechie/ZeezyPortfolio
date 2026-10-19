"use client";

import { useState } from "react";
import { HardwareCard } from "@/components/HardwareDesign";
import type { HardwareCategory, HardwareDesign } from "@/content/hardware";

type Filter = "All" | HardwareCategory;

/** Category chips plus the card grid. Filtering is local state; the URL does not change. */
export default function HardwareCatalogue({
  designs,
  categories,
}: {
  designs: HardwareDesign[];
  categories: HardwareCategory[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? designs : designs.filter((d) => d.category === filter);

  return (
    <section aria-label="Designs">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {(["All", ...categories] as Filter[]).map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(c)}
                className={`inline-flex min-h-9 items-center rounded-chip border px-3 font-jetbrains-mono text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent font-semibold text-accent-ink"
                    : "border-edge bg-surface text-fg-muted hover:border-fg-muted hover:text-fg-strong"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {c}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="meta">
          {filter === "All"
            ? `Showing all ${designs.length} designs`
            : `Showing ${shown.length} of ${designs.length} designs`}
        </p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((d) => (
          <HardwareCard
            key={d.slug}
            design={d}
            headingLevel={2}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 320px"
          />
        ))}
      </ul>
    </section>
  );
}

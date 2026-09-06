"use client";

/**
 * Single benchmark tile (chess rating, bench press, ...).
 *
 * Replaces the near-identical ChessCard / PhysicalBenchmark pair. The old
 * version ran a `flicker` keyframe at 0.1s infinite on hover, which is ten
 * flashes per second and fails WCAG 2.3.1. Hover feedback is now a border and
 * lift, which reads as tactile without the strobe.
 */
export default function StatCard({
  label,
  value,
  href,
  linkLabel,
}: {
  label: string;
  value: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="rounded-card border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong">
        <p className="mb-4 font-jetbrains-mono text-xs tracking-[0.18em] text-fg-subtle uppercase">
          {label}
        </p>

        <p className="mb-6 text-center font-jetbrains-mono text-5xl font-bold tabular-nums text-fg-strong">
          {value}
        </p>

        <div className="flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-chip border border-line px-4 py-2 font-jetbrains-mono text-xs whitespace-nowrap text-fg-muted transition-[color,border-color,transform] duration-200 hover:border-accent hover:text-accent active:translate-y-px"
          >
            {linkLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

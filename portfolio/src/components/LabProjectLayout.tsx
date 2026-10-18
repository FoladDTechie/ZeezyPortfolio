import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumb, type Crumb } from "@/components/Page";

type LabProjectLayoutProps = {
  /** Where this page sits. The last crumb is the page itself. */
  crumbs: Crumb[];
  /** Kept for older call sites; no longer displayed (decorative numbering). */
  projectId?: string;
  status?: string;
  category: string;
  title: string;
  hook: ReactNode;
  links: { label: string; href: string }[];
  children: ReactNode;
  /** "wide" (960px) for pages with three-column tables, e.g. /work/*. */
  width?: "default" | "wide";
};

/**
 * Case-study and lab write-up layout (readme style):
 * breadcrumb -> meta line -> title -> lead -> sections -> links.
 */
export default function LabProjectLayout({
  crumbs,
  status,
  category,
  title,
  hook,
  links,
  children,
  width = "default",
}: LabProjectLayoutProps) {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6 lg:pt-16">
      <div className={width === "wide" ? "max-w-[960px]" : "max-w-[720px]"}>
        <Breadcrumb crumbs={crumbs} />

        <p className="meta mb-3 lowercase">
          {status && (
            <>
              <span className="text-accent">[{status}]</span>{" "}
            </>
          )}
          [{category}]
        </p>

        <h1 className="text-4xl leading-tight font-semibold tracking-tight text-fg-strong sm:text-5xl">
          {title}
        </h1>

        <div className="prose-body mt-5 text-lg text-fg-muted">{hook}</div>

        <div className="mt-12 space-y-14 font-jetbrains-mono text-sm" style={{ lineHeight: 1.8 }}>
          {children}
        </div>

        {links.length > 0 && (
          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-8">
            {links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  {external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                      {link.label} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={link.href} className="text-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}

export function LabSection({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  /** Anchor target. */
  id?: string;
}) {
  return (
    <section id={id}>
      <h2 className="mb-4 font-jetbrains-mono text-base font-semibold text-fg-strong">
        <span aria-hidden="true" className="mr-2 text-accent">
          {"//"}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-fg">{children}</div>
    </section>
  );
}

export function LabRelated({ href, label }: { href: string; label: string }) {
  return (
    <p className="border-l-2 border-accent pl-4">
      <span className="meta block">Related build</span>
      <Link href={href} className="text-link">
        {label} <span aria-hidden="true">→</span>
      </Link>
    </p>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumb: "you are here" and "the way back" in one line, at the top.
 * The last crumb is the current page and is not a link.
 */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="meta mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="text-fg-muted underline-offset-4 hover:text-accent hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className="text-fg">
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Standard page shell: breadcrumb, one h1, a one-line intro, then content. */
export function PageShell({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs?: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6 lg:pt-16">
      {crumbs && <Breadcrumb crumbs={crumbs} />}
      <h1 className="text-4xl leading-tight font-semibold tracking-tight text-fg-strong sm:text-5xl">
        {title}
      </h1>
      {intro && <p className="prose-body mt-4 text-lg text-fg-muted">{intro}</p>}
      <div className="mt-12 flex flex-col gap-16">{children}</div>
    </main>
  );
}

/** A titled section. Headings carry the single terminal nod: a // marker. */
export function Section({
  id,
  title,
  intro,
  children,
  action,
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  action?: { label: string; href: string };
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId}>
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 id={headingId} className="section-title">
          <span className="slash" aria-hidden="true">
            {"//"}
          </span>
          {title}
        </h2>
        {action && (
          <Link href={action.href} className="text-link text-sm">
            {action.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      {intro && <p className="prose-body -mt-2 mb-6 text-fg-muted">{intro}</p>}
      {children}
    </section>
  );
}

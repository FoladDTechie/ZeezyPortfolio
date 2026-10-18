import { PageShell } from "@/components/Page";
import { articles } from "@/content/site";

export const metadata = {
  title: "Writing",
  description: "Essays by Abdulazeez Bello on Project Genius and The Conscious Jokeman.",
};

export default function WritingPage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "Writing" }]}
      title="Writing"
      intro="Essays published on Substack. Each link opens the full post."
    >
      <section aria-label="Posts">
        <ul className="divide-y divide-rule border-y border-rule">
          {articles.map((a) => (
            <li key={a.link}>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5"
              >
                <span className="text-lg font-medium text-fg-strong group-hover:text-accent">
                  {a.title} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <span className="meta">{a.source}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <a
            href="https://projectgenius.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            All posts on Project Genius <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </section>
    </PageShell>
  );
}

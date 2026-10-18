import Link from "next/link";
import { EMAIL, RESUME_URL, socialLinks } from "@/content/site";

const pages = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "Lab", href: "/lab" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-edge bg-bg">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-jetbrains-mono font-semibold text-fg-strong">Azeez Bello</p>
          <p className="mt-2 text-sm text-fg-muted">Based in Uyo, Akwa Ibom, Nigeria.</p>
          <p className="meta mt-2 select-all">{EMAIL}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="meta mb-3">Pages</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-fg-muted transition-colors hover:text-fg-strong">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="meta mb-3">Elsewhere</h2>
          <ul className="space-y-2 text-sm">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted transition-colors hover:text-fg-strong"
                >
                  {s.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-fg-strong"
              >
                Resume <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

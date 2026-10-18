"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/content/site";

/**
 * One header for every page. Five page links plus Resume (six items).
 * The current page is marked with aria-current="page", a bar under the link
 * and stronger text: it reflects the page you are on, not your scroll position.
 */
const navItems = [
  { label: "Work", href: "/work", match: ["/work"] },
  { label: "Writing", href: "/writing", match: ["/writing"] },
  { label: "Lab", href: "/lab", match: ["/lab"] },
  { label: "Community", href: "/community", match: ["/community", "/physical-ai"] },
  { label: "About", href: "/about", match: ["/about", "/side-quests"] },
];

const isCurrent = (pathname: string, match: string[]) =>
  match.some((m) => pathname === m || pathname.startsWith(`${m}/`));

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const linkClass = (current: boolean) =>
    `relative flex h-full items-center px-1 text-[0.9375rem] transition-colors ${
      current
        ? "font-semibold text-fg-strong after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-accent"
        : "text-fg-muted hover:text-fg-strong"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-bg">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-4 sm:px-6"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-jetbrains-mono text-[0.9375rem] font-semibold text-fg-strong transition-colors hover:text-accent"
        >
          Azeez Bello
        </Link>

        <ul className="hidden h-full items-stretch gap-6 md:flex">
          {navItems.map((item) => {
            const current = isCurrent(pathname, item.match);
            return (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={linkClass(current)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="flex h-full items-center">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] text-fg-muted transition-colors hover:text-fg-strong"
            >
              Resume <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          className="btn btn-secondary md:hidden"
          style={{ touchAction: "manipulation" }}
        >
          {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          Menu
        </button>
      </nav>

      {open && (
        <div ref={panelRef} id={menuId} className="border-t border-edge bg-surface md:hidden">
          <ul className="mx-auto max-w-5xl px-4 py-2 sm:px-6">
            <li>
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                className={`flex items-center justify-between border-b border-rule py-3 ${
                  pathname === "/" ? "font-semibold text-fg-strong" : "text-fg-muted"
                }`}
              >
                Home
                {pathname === "/" && <span className="meta text-accent">You are here</span>}
              </Link>
            </li>
            {navItems.map((item) => {
              const current = isCurrent(pathname, item.match);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-rule py-3 ${
                      current ? "font-semibold text-fg-strong" : "text-fg-muted"
                    }`}
                  >
                    {item.label}
                    {current && <span className="meta text-accent">You are here</span>}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-3 text-fg-muted"
              >
                Resume <span aria-hidden="true" className="ml-1">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

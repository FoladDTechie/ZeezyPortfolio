"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useId, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

/**
 * Targets are the section ids that actually exist on the home page.
 * Previously pointed at #hero and #stats, neither of which is rendered.
 */
const navLinks = [
  { name: "home", href: "/#home", number: "01." },
  { name: "projects", href: "/#projects", number: "02." },
  { name: "about", href: "/#about", number: "03." },
  { name: "mission", href: "/#mission", number: "04." },
  { name: "writing", href: "/#writing", number: "05." },
  { name: "community", href: "/#community", number: "06." },
  { name: "contact", href: "/#contact", number: "07." },
  { name: "gallery", href: "/#gallery", number: "08." },
];

const socials = [
  { label: "GitHub", href: "https://github.com/FoladDTechie", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulazeez-folaranmi-bello-38b83419a/",
    Icon: Linkedin,
  },
  { label: "Email", href: "mailto:abdulazeez.bello@airchain.ng", Icon: Mail },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuId = useId();
  const reduce = useReducedMotion();

  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay },
        };

  return (
    <header className="px-6 py-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 lg:pr-12 lg:pl-24">
      <div>
        <motion.p {...enter()} className="mb-4">
          <Link
            href="/"
            className="font-jetbrains-mono text-xs text-fg-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">← </span>Back to home
          </Link>
        </motion.p>

        {/* Site identity, not the page heading: /about supplies its own h1. */}
        <motion.p
          {...enter(0.05)}
          className="mb-3 text-4xl font-black tracking-tight text-fg-strong sm:text-5xl font-[family-name:var(--font-cy-grotesk)]"
          style={{ letterSpacing: "-0.05em" }}
        >
          Azeez Bello
        </motion.p>

        <motion.p
          {...enter(0.1)}
          className="mb-4 h-8 text-lg font-medium text-fg sm:text-xl"
        >
          {reduce ? (
            "Embedded Systems Engineer"
          ) : (
            <Typewriter
              words={[
                "Embedded Systems Engineer",
                "Blockchain Technical Writer",
                "IoT Developer",
                "Smart Systems Developer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          )}
        </motion.p>

        <motion.p
          {...enter(0.15)}
          className="mb-12 max-w-xs text-sm leading-relaxed text-fg-muted font-[family-name:var(--font-poppins)]"
        >
          Building deterministic architectures for a transparent world. Bridging
          the gap between physical infrastructure and digital truth.
        </motion.p>

        <nav aria-label="Home sections" className="hidden lg:block">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.25 + index * 0.06 },
                    })}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 py-1 font-jetbrains-mono text-xs tracking-widest text-fg-muted uppercase transition-colors hover:text-accent"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-fg-subtle transition-all duration-300 group-hover:w-16 group-hover:bg-accent"
                  />
                  <span className="text-fg-subtle">{link.number}</span>
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile */}
        <div className="mt-8 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
            className="flex items-center gap-2 font-jetbrains-mono text-xs tracking-widest text-fg-muted uppercase transition-colors hover:text-accent"
            style={{ touchAction: "manipulation" }}
          >
            <span>Menu</span>
            {isMobileMenuOpen ? (
              <X size={16} aria-hidden="true" />
            ) : (
              <Menu size={16} aria-hidden="true" />
            )}
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                id={menuId}
                initial={reduce ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                className="mt-4 space-y-1"
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 rounded-chip px-2 py-2.5 font-jetbrains-mono text-xs tracking-widest text-fg-muted uppercase transition-colors hover:bg-white/[0.06] hover:text-accent"
                    >
                      <span className="text-fg-subtle">{link.number}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.ul
        {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 } })}
        className="mt-12 flex items-center gap-5 lg:mt-0"
      >
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="block text-fg-muted transition-colors hover:text-accent"
            >
              <span className="sr-only">{label}</span>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://x.com/AY_ZED_"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted transition-colors hover:text-accent"
          >
            <span className="sr-only">X</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </li>
      </motion.ul>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import HashRedirect from "@/components/HashRedirect";
import { HardwareCard, LicenceBadge } from "@/components/HardwareDesign";
import { Section } from "@/components/Page";
import { WorkCard } from "@/components/WorkCard";
import {
  HARDWARE_INTRO,
  HARDWARE_PATH,
  HARDWARE_TITLE,
  featuredHardware,
  hardwareDesigns,
} from "@/content/hardware";
import { withAvailableImages } from "@/content/hardware-files";
import { articles, EMAIL, socialLinks } from "@/content/site";
import { workCards } from "@/content/work";

const featured = workCards.slice(0, 3);

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <HashRedirect />

      {/* Who I am, in one screen. */}
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="flex flex-col-reverse items-center gap-8 py-16 md:flex-row md:items-center md:justify-between md:gap-12 lg:py-24"
      >
        <div className="text-center md:text-left">
          <p className="meta mb-4 text-accent">Embedded systems · Nigeria · B.Eng. 2024</p>
          <h1
            id="hero-heading"
            className="mb-6 font-jetbrains-mono leading-[1.05] font-bold tracking-tight text-fg-strong"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Azeez Bello
          </h1>
          <p className="prose-body mx-auto mb-8 text-lg text-fg-muted md:mx-0">
            Abdulazeez Bello is an embedded systems engineer who designs and debugs the
            electronics between a sensor and a server: power, radios, firmware and the boards
            that hold them together. He is an Embedded Systems Engineer at BuildATech Incubator
            &amp; Workspace and co-founder of AirChain, where he built a cellular air quality
            sensor node end to end. He holds a B.Eng. in Mechatronics, Robotics and Automation
            from Ahmadu Bello University.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
            <Link href="/work" className="btn">
              View work <span aria-hidden="true">→</span>
            </Link>
            <Link href="/writing" className="text-link text-sm">
              Read writing
            </Link>
          </div>
        </div>

        <div className="h-[160px] w-[160px] shrink-0 rounded-full border-2 border-dashed border-accent p-1 sm:h-[200px] sm:w-[200px]">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Abdulazeez Bello"
            width={343}
            height={344}
            priority
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </section>

      <div className="flex flex-col gap-16">
        <Section
          id="featured-work"
          title="Featured work"
          action={{ label: `All ${workCards.length} projects`, href: "/work" }}
        >
          <ul className="grid gap-4 md:grid-cols-3">
            {featured.map((card) => (
              <WorkCard key={card.slug} card={card} />
            ))}
          </ul>
        </Section>

        <Section
          id="hardware-designs"
          title={HARDWARE_TITLE}
          intro={HARDWARE_INTRO}
          action={{ label: `See all ${hardwareDesigns.length} designs`, href: HARDWARE_PATH }}
        >
          <p className="-mt-2 mb-6">
            <LicenceBadge />
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {featuredHardware.map((d) => (
              <HardwareCard
                key={d.slug}
                design={withAvailableImages(d)}
                sizes="(max-width: 767px) 100vw, 480px"
              />
            ))}
          </ul>
        </Section>

        <Section id="home-writing" title="Writing" action={{ label: "All writing", href: "/writing" }}>
          <ul className="divide-y divide-rule border-y border-rule">
            {articles.map((a) => (
              <li key={a.link}>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                >
                  <span className="font-medium text-fg-strong group-hover:text-accent">
                    {a.title} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                  <span className="meta">{a.source}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="community-line" title="Community" action={{ label: "All community work", href: "/community" }}>
          <p className="prose-body">
            Chapter Lead, Cyberwave: running Physical AI workshops, meetups and hackathons
            through GroundBase.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card">
            <p className="meta mb-3">Email</p>
            <CopyEmail email={EMAIL} />
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <span className="meta block">{s.label}</span>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                    {s.value} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </main>
  );
}

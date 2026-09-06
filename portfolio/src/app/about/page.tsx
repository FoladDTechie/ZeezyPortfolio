"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Heart, Globe, BookOpen, Joystick, Plane } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import Gallery from "@/components/Gallery";

const roles = [
  {
    period: "2023 to present",
    title: "Cardano Catalyst Circle",
    role: "Community Reviewer",
    body: "Contributing to the governance of the Cardano ecosystem by reviewing technical proposals and supporting ecosystem growth.",
  },
  {
    period: "2022 to present",
    title: "Local STEM Mentorship",
    role: "Embedded Systems Mentor",
    body: "Teaching IoT concepts and C++ programming to university students, bridging the gap between hardware theory and practice.",
  },
];

/**
 * SDG marks. Official SDG colours, with black glyphs on the light ones:
 * white on SDG 11 orange is roughly 2:1 and fails AA.
 */
const sdgs = [
  {
    id: 11,
    color: "#FD9D24",
    onColor: "text-black",
    title: "Sustainable Cities",
    body: "Building IoT networks for smarter, cleaner urban environments.",
  },
  {
    id: 13,
    color: "#3F7E44",
    onColor: "text-white",
    title: "Climate Action",
    body: "Leveraging blockchain for verifiable environmental data.",
  },
];

const hobbies = [
  { label: "Drone Piloting", Icon: Plane },
  { label: "Technical Writing", Icon: BookOpen },
  { label: "Travel", Icon: Globe },
];

export default function AboutPage() {
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
    <div className="mx-auto min-h-screen max-w-screen-xl px-0 lg:px-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main
          id="main"
          className="px-6 pt-8 pb-20 lg:w-[52%] lg:py-24 lg:pr-24 lg:pl-0"
        >
          <div className="flex flex-col gap-20">
            <section aria-labelledby="profile-heading">
              {/* Single h1 for the page, visible at every breakpoint. */}
              <motion.h1
                {...enter()}
                id="profile-heading"
                className="mb-8 text-3xl font-bold tracking-tight text-fg-strong"
              >
                Extended profile
              </motion.h1>

              <motion.p {...enter(0.1)} className="prose-body">
                Beyond the embedded systems engineering work, I spend a
                significant portion of my time building community initiatives. I
                grew up in Lagos, Nigeria, watching first-hand how the lack of
                actionable public data stalls environmental policy. My driving
                force is ensuring the technology we introduce reaches the people
                who need it most.
              </motion.p>
            </section>

            <section aria-labelledby="community-heading">
              <h2
                id="community-heading"
                className="mb-8 flex items-center gap-3 font-jetbrains-mono text-sm font-semibold tracking-widest text-fg-strong uppercase"
              >
                <Users size={16} className="text-accent" aria-hidden="true" />
                Community &amp; volunteering
              </h2>

              <ul className="space-y-10">
                {roles.map((item) => (
                  <li key={item.title}>
                    <div className="group relative grid gap-2 sm:grid-cols-8 sm:gap-8">
                      <div
                        aria-hidden="true"
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-card transition-colors lg:-inset-x-6 lg:block lg:group-hover:bg-surface"
                      />
                      <p className="z-10 font-jetbrains-mono text-[11px] font-medium tracking-widest text-fg-subtle uppercase sm:col-span-2 sm:pt-1">
                        {item.period}
                      </p>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="text-lg leading-snug font-bold text-fg-strong">
                          {item.title}
                        </h3>
                        <p className="mt-1 mb-3 font-jetbrains-mono text-sm text-accent">
                          {item.role}
                        </p>
                        <p className="text-sm leading-relaxed text-fg-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sdg-heading">
              <h2
                id="sdg-heading"
                className="mb-8 flex items-center gap-3 font-jetbrains-mono text-sm font-semibold tracking-widest text-fg-strong uppercase"
              >
                <Globe size={16} className="text-accent" aria-hidden="true" />
                SDG commitments
              </h2>

              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {sdgs.map((sdg) => (
                  <li
                    key={sdg.id}
                    className="flex items-start gap-4 rounded-card p-4 transition-colors hover:bg-surface"
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-chip font-jetbrains-mono font-bold ${sdg.onColor}`}
                      style={{ backgroundColor: sdg.color }}
                    >
                      <span aria-hidden="true">{sdg.id}</span>
                      <span className="sr-only">
                        UN Sustainable Development Goal {sdg.id}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-bold text-fg-strong">{sdg.title}</h3>
                      <p className="mt-1 text-sm text-fg-muted">{sdg.body}</p>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4 rounded-card p-4 transition-colors hover:bg-surface md:col-span-2">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-chip bg-surface-hi text-accent">
                    <Heart size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-fg-strong">Tech for good</h3>
                    <p className="mt-1 text-sm text-fg-muted">
                      Creating open-source tools for social impact and
                      grass-roots enablement.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section aria-labelledby="offline-heading">
              <h2
                id="offline-heading"
                className="mb-8 flex items-center gap-3 font-jetbrains-mono text-sm font-semibold tracking-widest text-fg-strong uppercase"
              >
                <Joystick size={16} className="text-accent" aria-hidden="true" />
                Offline mode
              </h2>

              <div className="mb-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
                <motion.div {...enter(0.15)}>
                  <StatCard
                    label="Chess rating"
                    value="629"
                    href="https://www.chess.com/member/ayy_zedd"
                    linkLabel="Play me"
                  />
                </motion.div>
                <motion.div {...enter(0.2)}>
                  <StatCard
                    label="Bench press"
                    value="105kg"
                    href="https://hevy.com/user/buffzeezy"
                    linkLabel="View stats"
                  />
                </motion.div>
              </div>

              <ul className="flex flex-wrap items-start gap-3">
                {hobbies.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-fg-muted"
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span className="font-jetbrains-mono text-xs tracking-widest uppercase">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="archive-heading">
              <h2
                id="archive-heading"
                className="mb-8 font-jetbrains-mono text-sm font-semibold tracking-widest text-fg-strong uppercase"
              >
                Visual archive
              </h2>
              <Gallery />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

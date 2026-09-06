"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function CommunitySection() {
  const reduce = useReducedMotion();

  const slide = (x: number, delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, x },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, delay },
        };

  return (
    <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <h3 className="mb-8 font-jetbrains-mono text-xs font-medium tracking-[0.18em] text-fg-subtle">
        <span aria-hidden="true">{"// "}</span>intersect credential
      </h3>

      <div className="grid items-center gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <motion.div {...slide(-20)} className="mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="group relative rounded-card bg-accent">
            <Image
              src="/images/intersect_image.png"
              alt="Intersect individual member credential"
              width={280}
              height={280}
              className="block w-full rounded-card object-cover grayscale mix-blend-multiply transition-[filter] duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-card bg-bg mix-blend-screen"
            />
          </div>
        </motion.div>

        <motion.div {...slide(20, 0.15)}>
          <h4 className="mb-5 text-2xl leading-tight font-semibold text-fg-strong md:text-3xl">
            <a
              href="https://cexplorer.io/asset/asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Intersect, individual member
            </a>
          </h4>
          <p className="prose-body">
            Participant in the coordination layer of the Cardano ecosystem,
            contributing to infrastructure, governance, and network growth.
          </p>
          <dl className="mt-6 space-y-1.5 font-jetbrains-mono text-xs text-fg-subtle">
            <div className="flex gap-2">
              <dt className="shrink-0">Minted</dt>
              <dd>
                <time dateTime="2026-04-08">2026-04-08</time>
              </dd>
            </div>
            <div className="flex min-w-0 gap-2">
              <dt className="shrink-0">Fingerprint</dt>
              <dd className="min-w-0 break-all" translate="no">
                asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-[#0B0B0C]">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Intersect Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Link
              href="https://cexplorer.io/asset/asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] shadow-md p-4 mb-4 group-hover:border-[rgba(255,255,255,0.1)] transition-all duration-300">
                <Image
                  src="/images/intersect_image.png"
                  alt="Intersect Community Recognition"
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-white text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight tracking-wide"
            >
              Intersect <span className="text-accent">-</span> Individual Member
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 leading-relaxed"
            >
              <p className="text-gray-300 text-lg">
                Participant in the coordination layer of the Cardano ecosystem.
              </p>
              <p className="text-gray-300 text-lg">
                Contributing to infrastructure, governance, and network growth.
              </p>
              
              <div className="font-mono text-sm text-gray-500 mt-8 space-y-2">
                <div>[MINTED: 2026-04-08]</div>
                <div>[FINGERPRINT: asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf]</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

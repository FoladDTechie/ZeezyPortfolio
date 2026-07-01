"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <div className="w-full">
      <div className="font-jetbrains-mono text-xs text-gray-600 tracking-widest mb-8">
        // intersect credential
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="relative max-w-[280px] mx-auto lg:mx-0">
            <div className="relative block w-full group">
              <div className="relative block w-full rounded-lg bg-accent shadow-lg transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <img
                  src="/images/intersect_image.png"
                  alt="Intersect Member Credential"
                  className="relative block w-full rounded-lg mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-[#0B0B0C] rounded-lg mix-blend-screen pointer-events-none" />
                <div className="absolute top-3.5 left-3.5 right-3.5 bottom-3.5 border-2 border-accent rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://cexplorer.io/asset/asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <h3 className="font-jetbrains-mono text-white text-2xl md:text-3xl mb-6 leading-tight tracking-wide group-hover:text-accent transition-colors">
              Intersect{" "}
              <span className="text-accent">—</span> Individual Member
            </h3>
            <div className="space-y-4">
              <p className="font-jetbrains-mono text-gray-400 text-base">
                Participant in the coordination layer of the Cardano ecosystem.
                Contributing to infrastructure, governance, and network growth.
              </p>
              <div className="font-jetbrains-mono text-xs text-gray-600 space-y-1 mt-6">
                <div>[MINTED: 2026-04-08]</div>
                <div>[FINGERPRINT: asset1208naa7vtm9k6tqwnuad8kasfy0kdnhagxs3uf]</div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Subtle particle-noise background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43IiBudW1PY3RhdmVzPSIxMCIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjMiLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjgwIiByPSIwLjMiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSI0MCIgcj0iMC40IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43Ii8+CiAgPGNpcmNsZSBjeD0iMTgwIiBjeT0iMTYwIiByPSIwLjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjUiLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjEyMCIgcj0iMC4zIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+Cjwvc3ZnPgo=')]"></div>
      </div>

      {/* Original Theme Layout - Avatar beside name */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Avatar - Left */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Link
                  href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900 group-hover:ring-2 group-hover:ring-accent/50 transition-all duration-300">
                    <Image
                      src="/images/nft_image.webp"
                      alt="Azeez Bello - Digital Identity"
                      width={200}
                      height={200}
                      className="w-full h-auto object-contain"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                </Link>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-center text-gray-500 text-xs mt-3 hover:text-accent transition-colors"
                >
                  <Link
                    href="https://cexplorer.io/asset/asset1wgftmyerdhrretts2y5a7nxe4q2e6azz7czq9h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    view in explorer ↗
                  </Link>
                </motion.p>
              </motion.div>
            </div>

            {/* Name and Intro - Right */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight"
              >
                Azeez Bello
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 leading-relaxed"
              >
                Building deterministic architectures for a transparent world. Bridging the gap between physical infrastructure and digital truth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Before the Chain, There Was the Problem",
    subtext: "A practical editorial on building blockchain infrastructure for Africa.",
    link: "https://projectgenius.substack.com/p/before-the-chain-there-was-the-problem"
  },
  {
    id: 2,
    title: "Persistence, Not Disruption",
    subtext: "What Living Systems Teach Us About Building Technology That Endures.",
    link: "https://projectgenius.substack.com/p/persistence-not-disruption"
  },
  {
    id: 3,
    title: "If You Think Crypto Is Just Gambling...",
    subtext: "Someone you know has definitely lost money in crypto.",
    link: "https://projectgenius.substack.com/p/if-you-think-crypto-is-just-gambling"
  }
];

export default function ThoughtLeadership() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative bg-transparent border border-[#222] rounded-[8px] p-6 transition-all duration-300 hover:border-[#5eead4] hover:shadow-[0_0_20px_rgba(94,234,212,0.2)] overflow-hidden group"
            onMouseEnter={() => setHoveredCard(article.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Interactive Noise Background on Hover */}
            {hoveredCard === article.id && (
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-full bg-noise animate-noise"></div>
              </div>
            )}
            
            <div className="relative z-10 h-full flex flex-col">
              {/* Article Title */}
              <h3 
                className="text-xl font-black text-white leading-tight mb-4 font-['Inter'] group-hover:text-[#5eead4] transition-colors"
                style={{ fontWeight: 900 }}
              >
                {article.title}
              </h3>
              
              {/* Subtext */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6 font-['Inter'] flex-grow">
                {article.subtext}
              </p>
              
              {/* Author/Brand */}
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mb-4 font-['IBM_Plex_Mono']">
                [PROJECT_GENIUS]
              </div>
              
              {/* CTA Button */}
              <Link 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] rounded-[4px] text-[11px] font-mono text-gray-400 hover:text-white hover:border-[#5eead4] hover:bg-[#5eead4]/10 transition-all duration-200 font-['IBM_Plex_Mono'] group"
              >
                <span>[read_on_substack</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                <span>]</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, 1%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-1%, 0); }
          60% { transform: translate(1%, 0); }
          70% { transform: translate(0, -1%); }
          80% { transform: translate(0, 1%); }
          90% { transform: translate(1%, -1%); }
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        
        .animate-noise {
          animation: noise 0.2s steps(10) infinite;
        }
      `}</style>
    </div>
  );
}

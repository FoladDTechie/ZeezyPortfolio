"use client";

import { useState } from "react";

export default function PhysicalBenchmark() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-[320px] mx-auto">
      <div
        className="relative bg-gradient-to-br from-gray-900 to-black border border-[#222] rounded-[8px] p-6 transition-all duration-300 hover:border-[#333] hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Interactive Noise Background on Hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full bg-noise animate-noise"></div>
          </div>
        )}
        
        {/* Header */}
        <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mb-4 font-['IBM_Plex_Mono'] relative z-10">
          [physical_performance_status]
        </div>
        
        {/* Primary Stat */}
        <div className="mb-4 relative z-10">
          <div 
            className="text-3xl font-black text-white leading-tight font-['Inter']"
            style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
          >
            105KG
            <br />
            BENCH PRESS
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-full h-[2px] bg-gray-800 rounded-full mb-4 relative z-10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-1000 ease-out" 
               style={{ width: isHovered ? '100%' : '95%' }}>
          </div>
        </div>
        
        {/* Subtext */}
        <div className="text-sm text-gray-400 leading-relaxed font-['Inter'] relative z-10">
          Discipline is a cross-platform trait. Whether it's firmware or iron, persistence is the core variable.
        </div>
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

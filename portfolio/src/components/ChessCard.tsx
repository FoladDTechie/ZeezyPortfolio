"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChessCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-[320px] mx-auto">
      <div
        className="relative bg-[#0a0a0a] border border-[#222] rounded-[8px] p-6 transition-all duration-300 hover:border-[#333] hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scanline effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[8px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scanline"></div>
          </div>
        )}
        
        {/* ELO Rating Label */}
        <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mb-4 font-['IBM_Plex_Mono']">
          [elo_rating]
        </div>
        
        {/* ELO Rating Number */}
        <div className="text-center mb-6">
          <div 
            className={`text-6xl font-black text-white transition-all duration-200 ${isHovered ? 'animate-flicker' : ''} font-['Inter']`}
            style={{ fontWeight: 900 }}
          >
            629
          </div>
        </div>
        
        {/* Play Button */}
        <div className="flex justify-center">
          <Link 
            href="https://www.chess.com/member/ayy_zedd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 border border-[#333] rounded-[4px] text-[11px] font-mono text-gray-400 hover:text-white hover:border-[#555] transition-all duration-200 font-['IBM_Plex_Mono']"
          >
            <span>[play_me</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            <span>]</span>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
        
        .animate-flicker {
          animation: flicker 0.1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

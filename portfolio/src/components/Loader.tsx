"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 2000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0C]">
      <div className="relative">
        {/* NFT Image with animation */}
        <div className={`relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] shadow-lg p-4 transition-all duration-1000 ${
          isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <Image
            src="/images/nft_image.webp"
            alt="Loading..."
            width={200}
            height={200}
            className={`w-full h-auto object-contain transition-all duration-1000 ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        {/* Loading dots */}
        <div className={`flex justify-center gap-2 mt-6 transition-all duration-1000 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}

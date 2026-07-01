"use client";

import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import ContentSections from "@/components/ContentSections";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <TopNav />
          <main className="px-12 pt-20 pb-32">
            <ContentSections />
          </main>
        </>
      )}
    </div>
  );
}

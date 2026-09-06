"use client";

import { useState } from "react";
import TopNav from "@/components/TopNav";
import SideNav from "@/components/SideNav";
import SocialStrip from "@/components/SocialStrip";
import ContentSections from "@/components/ContentSections";
import Loader from "@/components/Loader";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      {/* Overlay, not a gate: the page below is in the DOM from first paint. */}
      {!introDone && <Loader onDone={() => setIntroDone(true)} />}

      <TopNav />
      <SideNav />
      <SocialStrip />

      <main
        id="main"
        className="mx-auto w-full max-w-6xl px-5 pt-24 pb-28 sm:px-8 lg:px-12 lg:pt-28"
      >
        <ContentSections />
      </main>
    </div>
  );
}

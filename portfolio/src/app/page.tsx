import TopNav from "@/components/TopNav";
import ContentSections from "@/components/ContentSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      <TopNav />
      <main className="mx-auto max-w-screen-xl px-6 py-24 font-sans md:px-12 lg:px-24">
        <ContentSections />
      </main>
    </div>
  );
}

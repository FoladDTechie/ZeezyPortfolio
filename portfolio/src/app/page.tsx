import Sidebar from "@/components/Sidebar";
import ContentSections from "@/components/ContentSections";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <ContentSections />
        </main>
      </div>
    </div>
  );
}

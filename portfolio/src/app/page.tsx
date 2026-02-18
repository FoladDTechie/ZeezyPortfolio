import Hero from "@/components/Hero";
import AirChainSpotlight from "@/components/AirChainSpotlight";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-accent selection:text-white">
      <Hero />
      <AirChainSpotlight />
      <TechStack />
      <Footer />
    </main>
  );
}

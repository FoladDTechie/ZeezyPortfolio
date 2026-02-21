import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

const cyGrotesk = localFont({
  src: "../../public/fonts/cygroteskkey-light-1771656875-0/CyGrotesk-KeyLight.otf",
  variable: "--font-cy-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Azeez | Embedded Systems Engineer",
  description: "Bridging the eUTXO Gap. Specialized in Decentralized Data Anchoring.",
};

import Spotlight from "@/components/Spotlight";
import Particles from "@/components/Particles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} ${poppins.variable} ${cyGrotesk.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-black min-h-screen relative`}
      >
        <Particles />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}



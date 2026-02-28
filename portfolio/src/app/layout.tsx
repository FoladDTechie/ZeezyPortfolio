import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Poppins, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Azeez | Embedded Systems Engineer",
  description: "Bridging the eUTXO Gap. Specialized in Decentralized Data Anchoring.",
};

import Spotlight from "@/components/Spotlight";
import Particles from "@/components/Particles";
import FloatingTerminal from "@/components/FloatingTerminal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} ${poppins.variable} ${cyGrotesk.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-black min-h-screen relative`}
      >
        <Particles />
        <Spotlight />
        {children}
        <FloatingTerminal />
      </body>
    </html>
  );
}



import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Spotlight from "@/components/Spotlight";
import Particles from "@/components/Particles";
import FloatingTerminal from "@/components/FloatingTerminal";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const cyGrotesk = localFont({
  src: "../../public/fonts/cygroteskkey-light-1771656875-0/CyGrotesk-KeyLight.otf",
  variable: "--font-cy-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azeez Bello | Embedded Systems Engineer",
  description:
    "Embedded systems engineer building DePIN infrastructure. Hardware, firmware, and the Kubernetes clusters they report into.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${poppins.variable} ${cyGrotesk.variable} antialiased bg-bg text-fg selection:bg-accent selection:text-black min-h-screen relative`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Particles />
        <Spotlight />
        {children}
        <FloatingTerminal />
      </body>
    </html>
  );
}

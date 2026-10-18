import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// next/font downloads these at build time and serves them from the site itself.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteTitle = "Azeez Bello, embedded systems engineer";
const siteDescription =
  "Abdulazeez Bello, embedded systems engineer in Nigeria. I design and debug the electronics between a sensor and a server: power, radios, firmware and the board that holds them together. Co-founder of AirChain.";

export const metadata: Metadata = {
  title: { default: siteTitle, template: "%s · Azeez Bello" },
  description: siteDescription,
  openGraph: { title: siteTitle, description: siteDescription, type: "website" },
  twitter: { card: "summary", title: siteTitle, description: siteDescription },
};

export const viewport: Viewport = {
  themeColor: "#111316",
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
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} min-h-screen bg-bg text-fg antialiased selection:bg-accent selection:text-accent-ink`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

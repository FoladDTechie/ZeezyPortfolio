import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Abdullazeez Bello | Creative Developer & Embedded Systems Engineer",
  description: "Bridging the eUTXO Gap. Specialized in Decentralized Data Anchoring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-[#050505] text-[#F5F5F7]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

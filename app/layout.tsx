import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/nav-bar";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Detai",
  description: "Data Analysis",
};
const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.className} bg-[#1C1917] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}

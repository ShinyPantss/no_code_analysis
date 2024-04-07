import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Detai",
  description: "Data Analysis",
};
const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});
const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} bg-[#1C1917] overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

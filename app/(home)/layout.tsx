"use client"
import React from "react";
import HomePage from "./page";
import Navbar from "@/components/nav-bar";
import { Quicksand } from "next/font/google";
import InsightRoll from "@/components/insightroll";

const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${quickSand.className} h-full w-full bg-stone-900`}>
      <InsightRoll insights={insights} />
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;

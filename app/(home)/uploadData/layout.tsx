"use client";
import React from "react";
import { Quicksand } from "next/font/google";
import { Montserrat } from "next/font/google";

import { Provider } from "react-redux";

const quickSand = Montserrat({
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
      {children}
    </div>
  );
};

export default HomeLayout;

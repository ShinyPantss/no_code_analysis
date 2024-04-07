"use client"
import React from "react";
import HomePage from "./page";
import Navbar from "@/components/nav-bar";
import { Quicksand } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
    <Provider store={store}>
      <div className={`${quickSand.className} h-full w-full bg-stone-900 `}>
        <Navbar />
        {children}
      </div>
    </Provider>
  );
};

export default HomeLayout;

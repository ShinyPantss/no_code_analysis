"use client";
import React from "react";
import Navbar from "@/components/nav-bar";
import { Quicksand } from "next/font/google";

import Footer from "@/components/main/footer";


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
    <div className={`${quickSand.className} h-full w-full bg-stone-900`}>

      <Provider store={store}>
        <Navbar />
        {children}
      <Footer />
        
      </Provider>

    </div>
  );
};

export default HomeLayout;

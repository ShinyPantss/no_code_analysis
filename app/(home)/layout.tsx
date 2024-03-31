import React from "react";
import HomePage from "./page";
import Navbar from "@/components/nav-bar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full h-full bg-stone-900
  ">
    <Navbar/>
    {children}</div>;
};

export default HomeLayout;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hero from "./main/Hero";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const router = usePathname();
  const [isActive, setActive] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(
    // TODO: Her Link icin fixle
    () => setActive(router === "/datasets" ? true : false),
    [isActive, router]
  );

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolling(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div className="w-full h-[65px] sticky top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
            href="/"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              DETAI
            </span>
          </Link>
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <Link
                className={`${
                  isActive
                    ? "text-stone-200 bg-black border-stone-500 border rounded-lg px-2 mt-1 bg-transparent"
                    : "mt-1 text-stone-500"
                } hover:text-yellow-400,`}
                href={"/datasets"}
              >
                Data Sets
              </Link>

              <Link href="/uploadData" className="cursor-pointer">
                Upload Data
              </Link>
              <a href="#skills" className="cursor-pointer">
                Plots
              </a>
              <a href="#projects" className="cursor-pointer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

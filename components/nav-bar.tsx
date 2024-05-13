import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hero from "./main/Hero";
import { Socials } from "@/constants";
import Image from "next/image";
import AuthButton from "./auth-btn";

const Navbar = () => {
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
          <Link href="/" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/DETAI-Logo.png"
              alt="logo"
              width={220}
              height={140}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              
            </span>
          </Link>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#e6e3efb4] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-300">

              <Link
                className={`${
                  isActive
                    ? "text-white rounded-lg px-2 mt-1 bg-transparent  "
                    : "mt-1 text-stone-500"
                } hover:text-yellow-400,`}
                href={"/datasets"}
              >
                Data Sets
              </Link>
              <Link href="/uploadData" className="cursor pointer">
                Upload Data
              </Link>

              <Link href="/plots" className="cursor-pointer">
                Plots
              </Link>
              <Link href="/contact" className="cursor-pointer">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

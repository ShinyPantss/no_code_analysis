"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const [isActive, setActive] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(
    () => setActive(router === "/datasets" ? true : false),
    [isActive, router]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-stone-900 border-b border-black flex p-7 px-16 relative top-0 justify-between shadow-md  shadow-black ">
      <div className="flex justify-between w-full xl:mx-32 ">
        <Link href={"/"}>
          <p className="text-emerald-400 text-2xl max-md:text-sm">
            {" "}
            No Code Analyze
          </p>
        </Link>

        <ul className="text-1xl  text-stone-400 flex align-baseline justify-between w-3/8  max-md:hidden space-x-6">
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

          <li className="text-stone-500 mt-1"> Upload Data</li>

          <li className="text-stone-500 mt-1">Plots</li>

          <li className="text-stone-500 mt-1">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

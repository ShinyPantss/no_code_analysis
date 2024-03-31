"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const [isActive, setActive] = useState(false);

  useEffect(
    () => setActive(router === "/datasets" ? true : false),
    [isActive, router]
  );

  return (
    <div className="w-full bg-black flex p-10 px-16  justify-between">
      <div className="flex justify-between w-full xl:mx-32 ">
        <Link href={"/"}>
          <p className="text-yellow-400 text-2xl max-md:text-sm"> No Code Analyze</p>
        </Link>

        <ul className="text-1xl text-stone-400 flex justify-between w-2/6 max-md:hidden space-x-6">
          <Link
            className={`${
              isActive ? "text-white" : "text-stone-400"
            } hover:text-yellow-400,`}
            href={"/datasets"}
          >
            Data Sets
          </Link>

          <li>Upload Data</li>

          <li>Plots</li>

          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

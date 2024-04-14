"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div>
      <Link
        className="bg-stone-900  text-white text-4xl border border-white rounded-xl overflow-hidden shadow-lg relative max-sm:h-28 max-sm:w-36 md:h-52 md:w-60 flex justify-center items-center z-20"
        href={"/"}
      >
        <Image
          src="/deneme.jpeg"
          alt=""
          width={300}
          height={200}
          className="h-full w-full absolute opacity-70  hover:opacity-90 transition-all  "
        />
        <p className="relative  mb-4 max-sm:text-xl">Corona</p>
      </Link>
    </div>
  );
};

export default Card;

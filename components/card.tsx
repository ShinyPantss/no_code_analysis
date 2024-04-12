"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img src="https://www.sserc.org.uk/wp-content/uploads/2023/12/Data-sets-tile.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">The King's Man</h1>
            <p className="my-2">9.0 Rating</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat error ea iusto et cupiditate animi dicta, fuga suscipit odio perferendis provident officiis asperiores odit eligendi velit corrupti iure! Inventore velit eos excepturi earum aliquam. Eos nobis, adipisci voluptatem nulla eaque quia, in harum facilis deleniti quam vero! Nostrum, minima sunt.</p>
            <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;

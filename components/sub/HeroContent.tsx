"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-44 w-full z-[30]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start mt-6">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box  px-[7px]  border-[#7042f88] opacity-[0.9]"
        >
          <h1 className="Welcome-text text-[20px] text-cyan-500">
            Data analysis made easy with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
              {" "}
              DETAI{" "}
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6  text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-purple-500 my-5 max-w-[600px] font-bold"
        >
          Easily Analyze Your Customized Data with our Artificial Intelligence
          and IT Development Solutions
        </motion.p>
        <div className="w-full h-full  flex gap-2 ">
          <Button className="w-1/2 h-20 bg-transparent border hover:bg-cyan-500 z-50 text-2xl">
            DATA SETS
          </Button>

          <Link
            href={"/uploadData"}
            className="w-1/2 h-20 text-2xl bg-transparent border flex items-center justify-center text-white rounded-lg hover:bg-indigo-800"
          >
            {" "}
            UPLOAD DATA
          </Link>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-[-30px]"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;




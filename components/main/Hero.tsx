import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full mb-24">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-420px]  left-0 z-1 bg-transparent w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-3/4 mt-10 top-0  z-10 w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      
    </div>
  )
}

export default Hero
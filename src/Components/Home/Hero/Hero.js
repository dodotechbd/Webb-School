import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div class="hero zero md:py-48 lg:py-44 lg:min-h-full md:min-h-full min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-7xl text-[#F04A7D] font-mono drop-shadow-lg">Webb</h1>
            <h1 class="text-7xl text-primary font-mono drop-shadow-lg">School</h1>
            <p class="py-6 font-sans text-3xl text-[#0D90C5] drop-shadow-lg">
            "If kids can be super engaged in video games, there’s a way for them to be super engaged in education as well."
            </p>
            <button class="btn border-none rounded-2xl btn-sm  hover:bg-gradient-to-t bg-gradient-to-b from-[#494FC1] to-[#F04A7D] text-white font-thin shadow-lg">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

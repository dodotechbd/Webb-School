import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div class="hero zero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-7xl text-[#F04A7D] font-mono">Webb</h1>
            <h1 class="text-7xl text-primary font-mono">School</h1>
            <p class="py-6 font-sans font-bold text-lg text-[#0D90C5]">
            If kids can be super engaged in video games, there’s a way for them to be super engaged in education as well.
            </p>
            <button class="btn border-none rounded-full btn-md hover:bg-gradient-to-l bg-gradient-to-r from-[#4828A9] to-[#A25BF7] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

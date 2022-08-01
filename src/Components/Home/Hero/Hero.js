import React from "react";
import "./Hero.css";
import hero from '../../../Assets/hero.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div class="zero hero lg:py-36 md:py-10 py-10 bg-base-100">
        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
        <img className="lg:w-7/12" src={hero} />
          <div className="w-10/12">
            <h1 class="text-7xl font-mono drop-shadow-lg">Webb</h1>
            <h1 class="text-7xl text-primary font-mono drop-shadow-lg">School</h1>
            <p class="py-6 font-sans text-3xl drop-shadow-lg">
            "If kids can be super engaged in video games, there’s a way for them to be super engaged in education as well."
            </p>
            <Link to={'signup'} class="btn btn-primary rounded-2xl btn-sm text-white font-thin shadow-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

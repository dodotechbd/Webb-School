import React from "react";
import "./Hero.css";
import hero from '../../../Assets/hero.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div class="zero hero -mt-12 lg:pb-36 lg:pt-48 md:pb-10 md:pt-24 pb-10 pt-24 bg-base-100 border-b border-neutral">
        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
        <img className="lg:w-7/12" src={hero} />
          <div className="w-10/12">
            <h1 class="text-7xl text-warning font-mono drop-shadow-lg">Webb</h1>
            <h1 class="text-7xl text-info font-mono drop-shadow-lg">School</h1>
            <p class="py-6 font-sans text-3xl drop-shadow-lg">
            "If kids can be super engaged in video games, there’s a way for them to be super engaged in education as well."
            </p>
            <Link to={'signup'} class="btn btn-accent normal-case font-semibold rounded-2xl btn-sm text-white shadow-lg">Get Started<i class="ml-2 fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

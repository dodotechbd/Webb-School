import React from "react";
import "./Hero.css";
import hero from '../../../Assets/hero.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div class="zero hero -mt-12 pt-12 min-h-screen bg-base-100 border-b border-neutral">
        <div class="hero-content p-0 flex-col-reverse lg:flex-row-reverse">
        <img className="lg:w-7/12" src={hero} />
          <div className="w-10/12">
            <h1 class="text-7xl text-warning font-mono drop-shadow-lg text-center lg:text-left">Webb</h1>
            <h1 class="text-7xl text-info font-mono drop-shadow-lg text-center lg:text-left">School</h1>
            <p class="py-6 font-sans text-3xl drop-shadow-lg text-center lg:text-left">
            "If kids can be super engaged in video games, there’s a way for them to be super engaged in education as well."
            </p>
            <div className="flex mx-auto lg:mx-0 items-center w-80 justify-between bg-gray-600 bg-opacity-40 backdrop-filter backdrop-blur-lg p-2 rounded-2xl">
              <p>Start Your Learning</p>
              <div className="flex">
              <i class="btn btn-accent btn-circle btn-sm text-white shadow-lg mr-2 fa-solid fa-arrow-right-long"></i>
              <Link to={'signup'} class="btn btn-accent font-thin rounded-2xl btn-sm text-white shadow-lg">Enroll Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

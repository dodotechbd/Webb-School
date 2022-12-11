import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { ReactComponent as HeroImage } from "../../../Assets/hero.svg";
import auth from "../../../firebase.init";
import "./Hero.css";

const Hero = () => {
  const [user] = useAuthState(auth);
  return (
    <div id="top">
      <div className="zero hero -mt-12 pt-12 min-h-screen bg-base-100 border-b border-neutral">
        <div className="container mx-auto hero-content w-10/12 p-0 flex-col-reverse lg:flex-row-reverse">
          <div className="w-full">
            <HeroImage />
          </div>
          <div className="w-full">
            <h1 className="text-7xl text-warning font-mono drop-shadow-lg text-center lg:text-left">
              Webb
            </h1>
            <h1 className="text-7xl text-info font-mono drop-shadow-lg text-center lg:text-left">
              School
            </h1>
            <p className="py-6 font-sans text-3xl drop-shadow-lg text-center lg:text-left">
              The online learning industry is growing by 15% annually e-Learning
              is quickly becoming the preferred way to learn.
            </p>
            <div className="flex lg:mx-0 mx-auto items-center w-80 justify-between bg-base-100 bg-opacity-20 backdrop-filter backdrop-blur-lg p-2 rounded-2xl">
              <p>Start Your Learning</p>
              <div className="flex">
                <i className="btn btn-accent btn-circle btn-sm text-white shadow-lg mr-2 fa-solid fa-arrow-right-long"></i>
                {user ? (
                  <Link
                    to={"courses"}
                    className="btn btn-accent font-thin rounded-xl btn-sm text-white shadow-lg"
                  >
                    Enroll Now
                  </Link>
                ) : (
                  <Link
                    to={"signup"}
                    className="btn btn-accent font-thin rounded-2xl btn-sm text-white shadow-lg"
                  >
                    Enroll Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

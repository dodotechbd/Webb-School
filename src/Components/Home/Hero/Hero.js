import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
 
const Hero = () => {
  const [user, loading, error] = useAuthState(auth);

  //CountDown Timer Add 
  var countDownDate = new Date("Aug 20,2022 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  //CountDown Timer End

  return (
    <div>
      <div id="top">
        <div className="zero hero -mt-12 pt-12 min-h-screen bg-base-100 border-b border-neutral">
          <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse">
            <img
              className="lg:w-7/12"
              src="https://raw.githubusercontent.com/MShafiMS/admission/eeb6c9456e6bec86eeddaf072a43cd089f371637/hero.svg"
            />
            <div className="w-11/12">
              <h1 className="text-7xl text-warning font-mono drop-shadow-lg text-center lg:text-left">
                Webb
              </h1>
              <h1 className="text-7xl text-info font-mono drop-shadow-lg text-center lg:text-left">
                School
              </h1>
              <p className="py-6 font-sans text-3xl drop-shadow-lg text-center lg:text-left">
                "If kids can be super engaged in video games, there’s a way for
                them to be super engaged in education as well."
              </p>
              <span className="font-bold text-gold-500">The last time off enrollment see below : </span>

              <div class="mt-2 grid grid-flow-col gap-5 text-center auto-cols-max">
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <p id="days">00</p>
                  <span>Days</span>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <p id="hours">00</p>
                  <span>Hours</span>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <p id='minutes'>00</p>
                  <span>Minutes</span>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <p id='seconds'>00</p>
                  <span>Seconds</span>
                </div>
              </div>
              {/* Count Downn Timer End*/}
              <p className="mt-2 font-bold text-red-500">Start Your Journey With Us</p>
              <div className="flex mt-2">
                <i className="btn btn-accent btn-circle btn-sm text-white shadow-lg mr-2 fa-solid fa-arrow-right-long"></i>
                {user ? (
                  <Link
                    to={"courses"}
                    className="btn btn-accent font-thin rounded-2xl btn-sm text-white shadow-lg"
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
      <img src="https://www.freeiconspng.com/thumbs/rocket-png/red-rocket-png-5.png" className='rocket' alt="" />
    </div >
  );
};

export default Hero;

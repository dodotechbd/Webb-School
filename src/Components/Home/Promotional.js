import React from "react";
import video from "../../Assets/video/promotion.mp4";
import vdo from "../../Assets/vdo.jpg";
const Promotional = () => {
  return (
    <div className="my-16">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div
              class="hero h-48 md:h-72 lg:h-80 rounded-xl"
              style={{ backgroundImage: `url(${vdo})` }}
            >
              <div class=""></div>
              <div class="hero-content text-center text-neutral-content">
              <label for="my-modal-5" class="w-full modal-button">
            <h1 className="btn btn-secondary btn-lg btn-circle text-white text-4xl"><i class="fa-solid fa-circle-play"></i></h1>
            </label>
              </div>
            </div>
          <div className="lg:w-10/12 text-center lg:text-start">
            <h1 class="lg:text-4xl md:text-3xl text-2xl font-sub">
              We are simply one click away!
            </h1>
            <p class="py-6 m-2 font-sub text-lg">
              We are making sure each learner get best knowledge they deserve.
              We provide easiest formula, notes and guidelines to ensure best
              education. Enroll yours now.
            </p>
            <button class="btn btn-primary btn-sm font-thin text-white">Join Us</button>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box max-w-2xl bg-base-300">
          <video width="700" controls>
            <source src={video} type="video/mp4" />
          </video>
          <div class="modal-action">
            <label for="my-modal-5" class="btn btn-secondary text-white">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
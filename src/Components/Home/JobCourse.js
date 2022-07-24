import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner/Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const JobCourse = () => {
  return (
    <div className="my-16" id="job">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center">
        Job Exam Preparation
      </h1>
      <h2 className="lg:text-xl text-md mb-5 mt-2 text-center text-gray-500">
        Which job are you preparing for?
      </h2>

      <div className="my-10 grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4">
        <a
          href="#"
          class=" card card-compact hidden lg:block md:block w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
        >
          <figure>
            <img src="https://i.postimg.cc/8zh9KJp3/Bank-Job.png" alt="Shoes" />
          </figure>
          <div class="card-body ">
            <h2 class="text-2xl text-center">Bank Job</h2>

            <div class="card-actions justify-center">
              <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                See Details
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="card card-compact hidden lg:block md:block w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
        >
          <figure>
            <img
              src="https://i.postimg.cc/vZfT0z6s/Bank-Job-3.png"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="text-2xl text-center">Developer Job</h2>

            <div class="card-actions justify-center">
              <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                See Details
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="card card-compact hidden lg:block md:block w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
        >
          <figure>
            <img
              src="https://i.postimg.cc/tJnpYq3j/Bank-Job-4.png"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="text-2xl text-center">Corporate Job</h2>

            <div class="card-actions justify-center">
              <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                See Details
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="card card-compact hidden lg:block md:block w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
        >
          <figure>
            <img src="https://i.postimg.cc/P5WfW5Bf/job-2.png" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-2xl text-center">Self Skill Develop</h2>

            <div class="card-actions justify-center">
              <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                See Details
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="lg:hidden md:hidden">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesPerGroup: 3,
            },
            "@1.25": {
              slidesPerView: 0,
              spaceBetween: 40,
              slidesPerGroup: 0,
            },
            "@1.50": {
              slidesPerView: 0,
              spaceBetween: 50,
              slidesPerGroup: 0,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              href="#"
              class=" card card-compact w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
            >
              <figure>
                <img
                  src="https://i.postimg.cc/8zh9KJp3/Bank-Job.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body ">
                <h2 class="text-2xl text-center">Bank Job</h2>

                <div class="card-actions justify-center">
                  <div className="text-center mt-4 text-lg uppercase text-primary border-t w-full border-gray pt-3">
                    See Details
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              class="card card-compact w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
            >
              <figure>
                <img
                  src="https://i.postimg.cc/vZfT0z6s/Bank-Job-3.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-2xl text-center">Developer Job</h2>

                <div class="card-actions justify-center">
                  <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                    See Details
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              class="card card-compact w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
            >
              <figure>
                <img
                  src="https://i.postimg.cc/tJnpYq3j/Bank-Job-4.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-2xl text-center">Corporate Job</h2>

                <div class="card-actions justify-center">
                  <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                    See Details
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              class="card card-compact w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
            >
              <figure>
                <img
                  src="https://i.postimg.cc/P5WfW5Bf/job-2.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-2xl text-center">Self Skill Develop</h2>

                <div class="card-actions justify-center">
                  <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                    See Details
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default JobCourse;

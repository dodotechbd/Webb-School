import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Banner = () => {
  return (
    <div>
      <div className="px-12 lg:py-10 lg:pb-24 py-10 pt-2 banner  bg-gradient-to-r from-base-300 to-base-200 border-b border-neutral">
        <h1
          className="lg:text-4xl md:text-3xl text-2xl lg:mb-0 my-6 font-header font-bold text-center"
        >
          Discounts On Our Exclusives!
        </h1>
        <p
          className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub hidden lg:block"
        >
          Various courses on across site wide can be done more cost-effectively throughout the month of July on the occasion of Eid-Al-Adha!
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.25": {
              slidesPerView: 3,
              spaceBetween: -80,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.25": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/15mtNtxx/21.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/HLcjsPqV/22.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/T3SYSJKG/233.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/MHxG5ZvQ/24.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/mg6t4G6v/25.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/PfzJxDRz/26.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/26n6nL8Y/27.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/X7svKb3r/28.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/3NBxcMvb/29.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src="https://i.postimg.cc/JztzP24P/30.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};SwiperCore.use([Autoplay]);

export default Banner;

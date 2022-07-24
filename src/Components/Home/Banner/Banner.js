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
      <div className="px-12 lg:pt-6 lg:pb-12 pb-5 pt-2 banner">
        <h1
          className="font-bold lg:text-4xl md:text-3xl text-2xl text-white text-center
        my-4 "
        >
          Special Discount!
        </h1>
        <p
          className="text-xl hidden lg:block text-white text-center
        mb-12"
        >
          On the occasion of Eid, various courses of Webb School can be done
          more cost-effectively throughout the month of July!
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
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
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.25": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.25": {
              slidesPerView: 3,
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

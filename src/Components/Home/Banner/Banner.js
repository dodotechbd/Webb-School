import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
 
import "./Banner.css";

// import required module
import { EffectCoverflow, Pagination } from "swiper";

const Banner = () => {
  return (
    <div className=" banner">
      <div className="px-12 lg:py-10 lg:pb-16 py-10 pt-2  bg-base-100 border-b border-neutral hero-overlay bg-opacity-50">
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
              slidesPerView: 2,
              spaceBetween: -100,
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
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/J0XQf9dR/18899221.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/MTd507f8/18899230.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/T1vbDhCX/18899243.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/252Pjhct/18899245.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/jSWtfc9y/Black-Friday-Instagram-Story-01.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/QNg9z8fH/Black-Friday-Instagram-Story-05.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/fy2QtSfH/Black-Friday-Instagram-Story-10.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/fRshrsgT/Black-Friday-Instagram-Story-14.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/dVPfV98W/Black-Friday-Instagram-Story-18.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <img src="https://i.postimg.cc/RZCnxkW4/Black-Friday-Instagram-Story-20.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};SwiperCore.use([Autoplay]);

export default Banner;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <div className="px-12 py-12 bg-neutral pt-20">
        <h1 className="font-bold text-4xl text-white text-center
        my-4">Special Discount!</h1>
        <p className="text-xl hidden lg:block text-white text-center
        mb-12">On the occasion of Eid, various courses of Webb School can be done more cost-effectively throughout the month of July!</p>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.25": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/NamazShikkha.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/FacebookMarketing.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/BankJobs.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/HSC23.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/MSBundle.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/VideoMaking.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="http://cdn.10minuteschool.com/md/images/GBSE.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/GBF.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/KidsEnglish.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src="https://cdn.10minuteschool.com/md/images/DEDF.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};SwiperCore.use([Autoplay])

export default Banner;

import React, { useRef, useState } from "react";
import img1 from "../../../Assets/banner/21.png";
import img2 from "../../../Assets/banner/22.png";
import img3 from "../../../Assets/banner/233.png";
import img4 from "../../../Assets/banner/24.png";
import img5 from "../../../Assets/banner/25.png";
import img6 from "../../../Assets/banner/26.png";
import img7 from "../../../Assets/banner/27.png";
import img8 from "../../../Assets/banner/28.png";
import img9 from "../../../Assets/banner/29.png";
import img10 from "../../../Assets/banner/30.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

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
      <div className="px-12 pt-20 banner">
        <h1 className="font-bold text-4xl text-white text-center
        my-4 ">Special Discount!</h1>
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
            disableOnInteraction: false,
          }}
          navigation={true}
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
              slidesPerView: 4,
              spaceBetween: 40,
              slidesPerGroup: 4,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
              slidesPerGroup: 5,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="card">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={img10} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
SwiperCore.use([Autoplay]);

export default Banner;

import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Reviews = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="lg:mx-4 mb-10">
      <p className="lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center mb-12 uppercase">
        Our students reviews!
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
        }}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          "@0.25": {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 1,
            slidesPerGroup: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 1,
            slidesPerGroup: 2,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 2,
            slidesPerGroup: 2,
          },
          "@1.25": {
            slidesPerView: 3,
            spaceBetween: 1,
            slidesPerGroup: 3,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 1,
            slidesPerGroup: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course) => (
            <SwiperSlide>
              <ReviewCard key={course.id} course={course}></ReviewCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="my-custom-pagination-div text-center mt-10" />
    </div>
  );
};

export default Reviews;
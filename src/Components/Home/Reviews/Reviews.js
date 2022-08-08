import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";

// import required modules
import { Pagination } from "swiper";
const Reviews = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="lg:px-4 py-16 bg-base-100 border-b border-neutral">
      <p className="lg:text-4xl md:text-3xl mb-16 mt-8 text-2xl uppercase font-sub font-bold text-center">
        Our students reviews!
      </p>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        centeredSlides= {true}
        loop={true}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.25": {
            slidesPerView: 1,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          "@1.25": {
            slidesPerView: 3,
            spaceBetween: 1,
            removeClippedSubviews: false,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 1,
            removeClippedSubviews: false,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="mx-auto">
          {courses.map((course) => (
            <SwiperSlide>
              <ReviewCard key={course._id} course={course}></ReviewCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="my-custom-pagination-div text-center mt-10" />
    </div>
  );
};

export default Reviews;

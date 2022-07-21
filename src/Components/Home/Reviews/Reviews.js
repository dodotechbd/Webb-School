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
    <div className="mx-10">
      <p className="text-center text-2xl my-12">
        Our students and their parents love us!
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          "@0.25": {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          "@1.25": {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
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
    </div>
  );
};

export default Reviews;

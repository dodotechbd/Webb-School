import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Reviews.css";

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
    <div>
      <p className="text-center text-xl">
        Our students and their parents love us!
      </p>

      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {courses.map((course) => (
            <SwiperSlide>
              <ReviewCard key={course.id} course={course}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

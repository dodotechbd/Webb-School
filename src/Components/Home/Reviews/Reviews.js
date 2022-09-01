import React from "react";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Review.css";

// import required modules
import { Pagination } from "swiper";
const Reviews = () => {
  const {
    data: allreviews,
    isLoading,
    refetch,
  } = useQuery(["allreviewsData"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/allreviews`).then((res) =>
      res.json()
    )
  );
  return (
    <div className="lg:px-4 py-16 bg-base-100 border-b border-neutral">
      <p className="lg:text-4xl md:text-3xl mt-8 text-2xl uppercase font-sub font-bold text-center">
        Our students reviews
      </p>
      <Swiper
        slidesPerGroup={2}
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
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.25": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 2, 
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="mx-auto">
          {allreviews?.map((course) => (
            <SwiperSlide className="h-full" key={course._id}>
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

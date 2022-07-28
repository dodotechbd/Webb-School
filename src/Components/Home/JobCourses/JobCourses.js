import React from "react";
import useJobCourses from "../../../Hooks/useJobCourse";
import JobCard from "./JobCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Banner/Banner.css";

// import required modules
import { Pagination } from "swiper";

const JobCourses = () => {
  const [jobCourse] = useJobCourses();
  return (
    <div className="my-16" id="job">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">
        Job Exam Preparation
      </h1>
      <h2 className="lg:text-xl text-md mt-2 text-center text-indigo-400">
        Which job are you preparing for?
      </h2>
      <div className="mt-3 mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={-25}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.25": {
            slidesPerView: 1,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: -80,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: -64,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: -84,
          },
          "@1.25": {
            slidesPerView: 4,
            spaceBetween: -20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: -20,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: -10,
          },
          "@2.00": {
            slidesPerView: 4,
            spaceBetween: -10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {jobCourse.map((jobCourse) => (
          <SwiperSlide>
          <JobCard key={jobCourse._id} jobCourse={jobCourse}></JobCard>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default JobCourses;

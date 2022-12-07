import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import useAllCourse from "../../Hooks/useAllCourse";
import AllCourseCard from "../AllCourses/AllCourseCard";
import "./CoursesTab.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner/Banner.css";

// import required modules
import { Pagination } from "swiper";

const CoursesTabs = () => {
  const [course, setCourse] = useState("language");
  const [admission, job, language] = useAllCourse();
  const handleCourse = (courses) => {
    setCourse(courses);
  };
  return (
    <div className="py-16 md:block bg-base-100 border-b border-neutral">
      <div className="container mx-auto">
        <div className="">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
            Skill Development Courses
          </h1>
          <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
            Which skill will you develop today?
          </p>
        </div>
        <div className="mx-10 my-8">
          <div className="flex border-b overflow-auto border-neutral my-8">
            <button
              type="button"
              onClick={() => handleCourse("language")}
              className={`hover:bg-neutral p-3 rounded-t-lg ${
                course === "language" && "bg-primary text-white"
              }`}
            >
              Language Learning
            </button>
            <button
              type="button"
              onClick={() => handleCourse("job")}
              className={`hover:bg-neutral p-3 rounded-t-lg ${
                course === "job" && "bg-primary text-white"
              }`}
            >
              Jobs Requirments
            </button>
            <button
              type="button"
              onClick={() => handleCourse("admission")}
              className={`hover:bg-neutral p-3 rounded-t-lg ${
                course === "admission" && "bg-primary text-white"
              }`}
            >
              Admission Preparation
            </button>
          </div>
          {course === "language" && (
            <Swiper
              slidesPerView={4}
              spaceBetween={-25}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: -80,
                },
                "@0.25": {
                  slidesPerView: 1,
                  spaceBetween: -70,
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
                  spaceBetween: -10,
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
              {language?.data?.slice(0, 4).map((allcard) => (
                <SwiperSlide key={allcard._id}>
                  <AllCourseCard
                    key={allcard._id}
                    allcard={allcard}
                  ></AllCourseCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {course === "job" && (
            <Swiper
              slidesPerView={4}
              spaceBetween={-25}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: -80,
                },
                "@0.25": {
                  slidesPerView: 1,
                  spaceBetween: -70,
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
                  spaceBetween: -10,
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
              {job?.data?.slice(0, 4).map((allcard) => (
                <SwiperSlide key={allcard._id}>
                  <AllCourseCard
                    key={allcard._id}
                    allcard={allcard}
                  ></AllCourseCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {course === "admission" && (
            <Swiper
              slidesPerView={4}
              spaceBetween={-25}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: -80,
                },
                "@0.25": {
                  slidesPerView: 1,
                  spaceBetween: -70,
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
                  spaceBetween: -10,
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
              {admission?.data?.slice(0, 4).map((allcard) => (
                <SwiperSlide key={allcard._id}>
                  <AllCourseCard
                    key={allcard._id}
                    allcard={allcard}
                  ></AllCourseCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesTabs;

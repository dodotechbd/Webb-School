import React from "react";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import Navigation from "./Navigation";
import Review from './Review/Review'
import Reviews from "./Reviews/Reviews";
import JobCourses from "./JobCourses/JobCourses";
import CoursesTabs from "./CoursesTabs";
import Hero from "./Hero/Hero";
import Promotional from "./Promotional";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Navigation></Navigation>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourses></JobCourses>
      <CoursesTabs></CoursesTabs>
      <Reviews></Reviews>
      <Review></Review>
      <Promotional></Promotional>
    </div>
  );
};

export default Home;
import React from "react";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import JobCourse from "./JobCourse";
import Navigation from "./Navigation";
import Review from './Review/Review'
import Reviews from "./Reviews/Reviews";
import Header from '../Shared/Header/Header';
import JobCourses from "./JobCourses/JobCourses";

const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Navigation></Navigation>
      <Admission></Admission>
      <JobCourse></JobCourse>
      <Courses></Courses>
      <Reviews></Reviews>
      <Review></Review>
    </div>
  );
};

export default Home;
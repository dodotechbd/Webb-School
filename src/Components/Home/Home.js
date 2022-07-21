import React from "react";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import JobCourse from "./JobCourse";
import Navigation from "./Navigation";
import Review from './Review/Review'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Navigation></Navigation>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourse></JobCourse>
      <Review></Review>
    </div>
  );
};

export default Home;
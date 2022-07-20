import React from "react";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import JobCourse from "./JobCourse";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Navigation></Navigation>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourse></JobCourse>
    </div>
  );
};

export default Home;

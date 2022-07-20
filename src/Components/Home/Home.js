import React from "react";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import JobCourse from "./JobCourse";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourse></JobCourse>
    </div>
  );
};

export default Home;

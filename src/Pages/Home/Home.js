import React, { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Support from "../../Pages/../Support/Support";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import CoursesTabs from "./CoursesTabs";
import Hero from "./Hero/Hero";
import JobCourses from "./JobCourses/JobCourses";
import Navigation from "./Navigation";
import Promotional from "./Promotional";
import Question from "./Question/Question";
import Review from './Review/Review';
import Reviews from "./Reviews/Reviews";
const Home = () => {
  useTitle("Home Page");
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetDiv = document.querySelector(hash);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (

    <div>
      <Hero></Hero>
      {/* messenger chat */}
      <Navigation></Navigation>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourses></JobCourses>
      <CoursesTabs></CoursesTabs>
      <Reviews></Reviews>
      <Review></Review>
      <Promotional></Promotional>
      <Support></Support>
      <Question></Question>
      <Link to='/#top' className='fixed z-50 bottom-4 right-4 text-info text-2xl'>
        <BsArrowUp />
      </Link>
      {/* messenger chat --- */}
    </div>

  );
};

export default Home;
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowUp } from "react-icons/bs";
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
      <AnchorLink href='#top' className='fixed z-50 bottom-4 right-4 text-info text-2xl'>
        <BsArrowUp />
      </AnchorLink>
      {/* messenger chat --- */}
    </div>

  );
};

export default Home;
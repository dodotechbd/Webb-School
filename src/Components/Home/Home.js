import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
import Question from "./Question/Question";
import Support from "../../Components/../Support/Support"
import AnchorLink from "react-anchor-link-smooth-scroll";
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
      <Support></Support>
      <Question></Question>
      <AnchorLink href='#top' className='bg-blue-700 rounded-full px-2 fixed  z-50 bottom-4 right-4  text-lg  ring-2'><i className="fa-solid fa-arrow-up-long text-white "></i></AnchorLink>
      {/* messenger chat */}
      <MessengerCustomerChat
        pageId="101878912628102" appId="3150275291906230"
      />
    </div>
  );
};

export default Home;
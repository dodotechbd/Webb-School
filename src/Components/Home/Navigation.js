import React from "react";
import { ImBooks, ImBriefcase, ImRocket } from "react-icons/im";
import { MdSchool } from "react-icons/md";
const Navigation = () => {
  return (
    <div className="lg:mx-10 mx-3">
      <div className="my-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center">
          We have everything you <br /> need to learn anything
        </h1>
        <p className="lg:text-xl text-md my-5 text-center text-gray-500">
          Choose your topic from our vast library to get started
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 lg:grid-cols-4 gap-4 bg-gray-100 px-3 py-3 rounded-xl">
        <a
          href="#store"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex py-6 lg:py-0">
              <span className="text-4xl pr-3 hidden lg:block md:block text-sky-500 py-6">
                <ImBooks />
              </span>{" "}
              <span className="lg:pt-7 md:pt-7">Book Store</span>
            </p>
          </div>
        </a>
        <a
          href="#admission"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex py-6 lg:py-0">
              <span className="text-4xl pr-3 hidden lg:block md:block text-green-600 py-6">
                <MdSchool />
              </span>{" "}
              <span className="lg:pt-7 md:pt-7">Admission</span>
            </p>
          </div>
        </a>
        <a
          href="#job"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex py-6 lg:py-0">
              <span className="text-4xl pr-3 hidden lg:block md:block text-sky-700 py-6">
                <ImBriefcase />
              </span>{" "}
              <span className="lg:pt-7 md:pt-7">Job Exam</span>
            </p>
          </div>
        </a>
        <a
          href="#courses"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex py-6 lg:py-0">
              <span className="text-4xl pr-3 hidden lg:block md:block text-purple-600 py-6">
                <ImRocket />
              </span>{" "}
              <span className="lg:pt-7 md:pt-7">Courses</span>
            </p>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Video%20lecture.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Watch video lectures</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
              Learn at your own pace from our 20,000+ videos
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Exercise.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Practice anytime</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
            Instant scores, explanations and leaderboards!
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/LIve%20Class.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Attend live classes</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
            Daily live classes help you maintain your routine
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Lecture%20sheet.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Every note you will ever need</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
            Access our lecture sheets and interactive books
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Daily%20result%20and%20leaderboard.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Daily results and leaderboards</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
            See where you stand among your friends
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/ask%20question.svg" />
              </div>
            </div>
            <h2 class="text-md lg:text-xl font-bold text-center">Ask your teacher</h2>
            <p className="text-lg text-gray-500 text-center hidden lg:block">
            Get your doubts solved within our platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

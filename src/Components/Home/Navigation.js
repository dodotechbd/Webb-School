import React from "react";
import { ImBooks, ImBriefcase, ImRocket } from "react-icons/im";
import { MdSchool } from "react-icons/md";
const Navigation = () => {
  return (
    <div className="mx-10">
      <div className="my-10">
        <h1 className="text-3xl font-semibold text-center">
          We have everything you <br /> need to learn anything
        </h1>
        <p className="text-xl text-center text-gray-500">
          Choose your topic from our vast library to get started
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 px-3 py-3 rounded-xl">
        <a
          href="#store"
          class="hover:border hover:border-primary hover:text-primary text-lg font-bold bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex">
              <span className="text-4xl pr-3 text-sky-500 py-6">
                <ImBooks />
              </span>{" "}
              <span className="pt-7">Book Store</span>
            </p>
          </div>
        </a>
        <a
          href="#admission"
          class="hover:border hover:border-primary hover:text-primary text-lg font-bold bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex">
              <span className="text-4xl pr-3 text-green-600 py-6">
                <MdSchool />
              </span>{" "}
              <span className="pt-7">Admission</span>
            </p>
          </div>
        </a>
        <a
          href="#job"
          class="hover:border hover:border-primary hover:text-primary text-lg font-bold bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex">
              <span className="text-4xl pr-3 text-sky-700 py-6">
                <ImBriefcase />
              </span>{" "}
              <span className="pt-7">Job Exam Preparation</span>
            </p>
          </div>
        </a>
        <a
          href="#courses"
          class="hover:border hover:border-primary hover:text-primary text-lg font-bold bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center flex">
              <span className="text-4xl pr-3 text-purple-600 py-6">
                <ImRocket />
              </span>{" "}
              <span className="pt-7">Courses</span>
            </p>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Video%20lecture.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Watch video lectures</h2>
            <p className="text-lg text-gray-500 text-center">
              Learn at your own pace from our 20,000+ videos
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Exercise.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Practice anytime</h2>
            <p className="text-lg text-gray-500 text-center">
            Instant scores, explanations and leaderboards!
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/LIve%20Class.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Attend live classes</h2>
            <p className="text-lg text-gray-500 text-center">
            Daily live classes help you maintain your routine
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Lecture%20sheet.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Every note you will ever need</h2>
            <p className="text-lg text-gray-500 text-center">
            Access our lecture sheets and interactive books
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Daily%20result%20and%20leaderboard.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Daily results and leaderboards</h2>
            <p className="text-lg text-gray-500 text-center">
            See where you stand among your friends
            </p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="avatar mx-auto my-6">
              <div class="w-18 rounded-full">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/ask%20question.svg" />
              </div>
            </div>
            <h2 class="text-xl font-bold text-center">Ask your teacher</h2>
            <p className="text-lg text-gray-500 text-center">
            Get your doubts solved within our platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

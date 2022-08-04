import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import vdo from "../../Assets/vdo.jpg";
import video from "../../Assets/video/promotion.mp4";
import ReactPlayer from "react-player";

const AllCourseView = () => {
  const { id } = useParams();
  const [admission] = useAdmission([]);

  const courseData = admission.find((allcard) => allcard._id === id);
  console.log(courseData);
  return (
    <div className="hero bg-base-100 my-10">
      <div className="hero-content gap-10 flex-col-reverse lg:flex-row-reverse items-start">
        <div class="card lg:w-1/3 bg-[#354795] lg:sticky lg:top-20 shadow-xl text-white">
          <div class="card-body">
            <h2 class="text-2xl pb-2">
              Everything that is included in this course
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <p>
                <i class="fa-solid fa-video pr-2 text-[#efad1e]"></i>120 Hours
                Videos
              </p>
              <p>
                <i class="fa-solid fa-users pr-2 text-[#efad1e]"></i>758
                Students
              </p>
              <p>
                <i class="fa-solid fa-headset pr-2 text-[#efad1e]"></i>Mentor
                Support
              </p>
              <p>
                <i class="fa-solid fa-diagram-project pr-2 text-[#efad1e]"></i>
                22 Real-Life Projects
              </p>
              <p>
                <i class="fa-solid fa-code pr-2 text-[#efad1e]"></i>Code Review
              </p>
              <p>
                <i class="fa-solid fa-meteor pr-2 text-[#efad1e]"></i>Beginner
                to Pro
              </p>
              <p>
                <i class="fa-solid fa-circle-question pr-2 text-[#efad1e]"></i>
                Quizzes
              </p>
              <p>
                <i class="fa-solid fa-certificate pr-2 text-[#efad1e]"></i>
                Certificate
              </p>
              <p>
                <i class="fa-solid fa-clock pr-2 text-[#efad1e]"></i>Duration 6
                Months
              </p>
              <p>
                <i class="fa-solid fa-universal-access pr-2 text-[#efad1e]"></i>
                2 Years of Access
              </p>
            </div>
            <div class="flex text-lg font-bold bg-[#495CA9] my-6 p-4 rounded-xl justify-between">
              <div>
                <p>Course Price</p>
              </div>
              <div>
                <p className="text-2xl">৳{courseData?.price}</p>
              </div>
            </div>
            <div>
              <button className="p-4 text-lg font-bold rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Course
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12">
          <h1 class="text-4xl font-bold">{courseData?.name}</h1>
          <p class="py-3 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="h-80 border-4 rounded-lg border-neutral w-full">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              light={true}
              url={"https://www.youtube.com/watch?v=fuAsjgOp-6U"}
              playing
            />
          </div>
          <h1 className="text-2xl mt-4 mb-1">Instructor:</h1>
          <div className="w-full border border-neutral rounded-md mb-4 grid lg:grid-cols-2 md:grid-cols-2">
            <div className="p-3 flex items-center gap-3">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructor}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructor}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseView;

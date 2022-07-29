import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useLanguage from "../../Hooks/useLanguage";

const AllCourseView = () => {
  const { id } = useParams();
  const [admission] = useAdmission([]);

  const courseData = admission.find((allcard) => allcard._id === id);
  console.log(courseData);
  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row md:flex-row">
          <div>
            <h1 className="text-4xl mb-5 hidden lg:block text-[#9C58F2]">
              {courseData?.name}
            </h1>
            <div class="hero bg-[#eeeded] rounded-sm h-fit border-b mx-2-4 border-b mx-2-[#9C58F2]">
              <div class="hero-content flex-col lg:flex-row">
                <img src={courseData?.img} class="lg:max-w-sm shadow-2xl" />
                <div className="p-5">
                  <h1 class="text-2xl font-bold lg:hidden">
                    {courseData?.name}
                  </h1>
                  <div className="flex gap-7 lg:text-lg">
                    <p>
                      By:{" "}
                      <span className="font-bold">
                        {courseData?.instructor}
                      </span>
                    </p>
                    <p>
                      Date: <span className="font-bold">28.7.22</span>
                    </p>
                  </div>
                  <p class="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum suscipit molestiae voluptatem. Ipsum libero
                    accusantium necessitatibus, debitis optio perferendis,
                    fugiat quam magni ex assumenda similique voluptatem maiores,
                    soluta accusamus? Eos?
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <p>
                        <i class="fa-solid fa-eye"></i> 56
                      </p>
                      <p>
                        <i class="fa-solid fa-comments"></i> 48
                      </p>
                    </div>

                    <div class="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        class="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border p-4 md:hidden mt-2 lg:grid grid lg:grid-cols-4 grid-cols-2">
              <div className="flex items-center p-4">
                <p>
                  <i class="fa-solid fa-users text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Enroled</p>
                  <p className="text-lg">200 learners</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <p>
                  <i class="fa-solid fa-clock text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Hours Required</p>
                  <p className="text-lg">30 Hours</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <p>
                  <i class="fa-solid fa-circle-play text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Video</p>
                  <p className="text-lg">30 Videos</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <p>
                  <i class="fa-solid fa-check-double text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Quiz</p>
                  <p className="text-lg">25 Quizes</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-5/12 md:w-10/12">
            <div class="card rounded-none border-b mx-2-4 border-b mx-2-[#9C58F2] border bg-[#eeeded]">
              <button className="bg-[#9C58F2] text-white p-3 text-xl font-bold">
                ৳ {courseData?.price}
              </button>
              <div class="avatar pt-10 mx-auto">
                <div class="w-24 rounded-full ring ring-[#9C58F2] ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{courseData?.instructor}</h2>
                <p className="-mt-2">Teacher</p>
                <p>Bussiness Study(BBS) 3rd year</p>
                <p>National University Bangladesh</p>
                <div class="card-actions">
                  <button class="bg-[#9C58F2] btn-wide p-2 rounded-md text-white text-lg font-bold hover:bg-[#1aa179]">
                    Buy Now <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="border p-4 hidden lg:hidden mt-2 md:grid grid-cols-2">
              <div className="flex items-center p-4  text-center">
                <p>
                  <i class="fa-solid fa-users text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Enroled</p>
                  <p className="text-lg">200</p>
                </div>
              </div>
              <div className="flex items-center p-4  text-center">
                <p>
                  <i class="fa-solid fa-clock text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Duration</p>
                  <p className="text-lg">30h</p>
                </div>
              </div>
              <div className="flex items-center p-4  text-center">
                <p>
                  <i class="fa-solid fa-circle-play text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Video</p>
                  <p className="text-lg">30</p>
                </div>
              </div>
              <div className="flex items-center p-4  text-center">
                <p>
                  <i class="fa-solid fa-check-double text-2xl text-[#9C58F2]"></i>
                </p>
                <div className="ml-2">
                  <p className="text-gray-500">Quiz</p>
                  <p className="text-lg">25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
          <div className="lg:w-screen w-full">
            <h1 className="text-2xl">Course Lesson</h1>
            <div className="border rounded-md border-gray-300">
              <div class="collapse collapse-plus w-full border-b mx-2">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">Basic</div>
                <div class="collapse-content">
                  <p><i class="fa-solid fa-play mr-2 text-success"></i> Lesson 01 (Inroduction)</p>
                </div>
              </div>
              <div class="collapse collapse-plus w-full border-b mx-2">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">
                  Click me to show/hide content
                </div>
                <div class="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div class="collapse collapse-plus w-full border-b mx-2">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">
                  Intermediary
                </div>
                <div class="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div class="collapse collapse-plus w-full border-b mx-2">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">Advanced</div>
                <div class="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div class="collapse collapse-plus w-full border-b mx-2">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">
                  Join Exclusive Facebook Group
                </div>
                <div class="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-screen w-full h-full">
            <h1 className="text-xl">What you will get in this course</h1>
            <div className="border border-gray-300 text-lg rounded-md p-4 grid gap-4">
              <p>
                <i class="fa-solid fa-check text-success mr-2"></i> 10
                Revision Classes
              </p>
              <p>
                <i class="fa-solid fa-check text-success mr-2"></i>6 Subjects
              </p>
              <p>
                <i class="fa-solid fa-check text-success mr-2"></i>Daily Exam
              </p>
              <p>
                <i class="fa-solid fa-check text-success mr-2"></i>105 Lecture Sheets
              </p>
              <p>
                <i class="fa-solid fa-check text-success mr-2"></i>Full Model Test
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseView;

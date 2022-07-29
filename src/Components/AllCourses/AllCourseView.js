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
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div class="hero bg-base-200">
              <div class="hero-content flex-col lg:flex-row">
                <img src={courseData?.img} class="max-w-sm shadow-2xl" />
                <div className="p-5">
                  <h1 class="text-2xl font-bold">{courseData?.name}</h1>
                  <div className="flex gap-7">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit molestiae voluptatem. Ipsum libero accusantium necessitatibus, debitis optio perferendis, fugiat quam magni ex assumenda similique voluptatem maiores, soluta accusamus? Eos?
                  </p>
                  <div>
                    <p><i class="fa-solid fa-eye"></i> 56</p>
                    <p><i class="fa-solid fa-eye"></i> 56</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseView;

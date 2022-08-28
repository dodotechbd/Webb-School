import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, img } = course;
  return (
    <div className="mb-8">
      <Link to={`/course/${course?.uname}`}
        className="card w-100 bg-base-100 border border-neutral h-full transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-[#0B3456] hover:text-white"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-0">
          <p className="text-2xl px-5 pt-4 font-header">{name}</p>
          <div className="px-7 text-lg font-sub">
            <p>
              <i className="fa-solid fa-house-signal"></i> 400 live classes,
              with model tests
            </p>
            <p>
              <i className="fa-solid fa-circle-play"></i> Class duration: 8
              months
            </p>
          </div>
          <button className="border-t border-neutral p-2 text-lg">
            Enroll Course
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Course;

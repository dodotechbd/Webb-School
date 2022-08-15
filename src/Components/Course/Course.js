import React from "react";

const Course = ({ course }) => {
  const { id, name, img, description, price } = course;
  return (
    <div className="mb-8">
      <a
        href="#"
        className="card w-100 bg-base-100 border border-neutral h-full transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-[#0B3456] hover:text-white"
      > 
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-0">
          <p className="text-2xl px-7 pt-4 font-header">{name}</p>
          <div className="px-7 text-lg font-sub">
          <p><i className="fa-solid fa-house-signal"></i> 400 live classes, with model tests</p>
          <p><i className="fa-solid fa-circle-play"></i> Class duration: 8 months</p>
          </div>
          <p className="text-2xl font-sub px-7"><span className="text-xl line-through">৳1200 </span>৳{price}</p>
          <button className="border-t border-neutral p-2 text-lg">
            Enroll Course
          </button>
        </div>
      </a>
    </div>
  );
};

export default Course;

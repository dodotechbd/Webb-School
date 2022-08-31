import React from "react";
import { Link } from "react-router-dom";

const MyCourseCard = ({ allcard }) => {
  const cardIndex = allcard?.file[0].details[0].fileName;
  return (
    <Link to={`/course/${allcard?.uname}/${allcard?.list}/${cardIndex}`}>
      <div
        className="mx-auto p-6 lg:flex bg-base-200 shadow-lg rounded-2xl
       hover:-translate-y-3 border-neutral  transform transition duration-300 text-warning h-full"
      >
        <figure className="">
          <img
            src={allcard?.img}
            alt="Shoes"
            className="h-full md:h-48 lg:h-36 rounded-xl w-96"
          />
        </figure>
        <div className="w-full content-between grid">
          <h2 className="px-2 py-1 text-xl">{allcard?.name.slice(0,30)}</h2>
          <div>
            <div className="flex justify-between items-center gap-3">
              <div className="w-full mx-2 bg-[#EBEDEF] rounded-full h-2.5">
                <div className="bg-[#3EC65D] h-2.5 rounded-full w-[45%]"></div>
              </div>
              <p>45%</p>
            </div>
            <div className="mx-2 mt-2 w-32 text-sm">
              <p className="text-white p-[5px] h-8 rounded-full text-center btn-secondary">
                Continue Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyCourseCard;

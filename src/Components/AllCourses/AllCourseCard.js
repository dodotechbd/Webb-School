import React from "react";
import { Link } from "react-router-dom";

const AllCourseCard = ({ allcard }) => {
  
  const { uname } = allcard;
  
  return (
    <Link to={`/course/${uname}`}>
      <div
        class="mx-auto card card-compact w-72 bg-base-100 border rounded-md
       hover:-translate-y-3 border-neutral  transform transition duration-300"
      >
        <figure>
          <img src={allcard?.img} alt="Shoes" className="h-44 w-full" />
        </figure>
        <div class="">
          <div className="px-2 pt-1 flex justify-between">
            <p className="text-md font-sans">
              {allcard?.instructor}
            </p>
            {allcard?.badge ? (<div class="badge badge-secondary">{allcard?.badge}</div>) : (<></>)}
          </div>
          <h2 class="px-2 py-1 text-xl hover:text-info">
            {allcard?.name.slice(0, 24)}
          </h2>
          <div className="flex justify-between border-t border-neutral p-2 text-lg font-bold">
            <p>৳ {allcard?.price}</p>
            <p className="text-accent">Buy Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCourseCard;

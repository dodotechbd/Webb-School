import React from "react";
import { Link } from "react-router-dom";

const AllCourseCard = ({ allcard }) => {
  
  const { _id } = allcard;
  
  return (
    <Link to={`/course/${_id}`}>
      <div
        class="mx-auto card card-compact w-72 bg-base-100 border rounded-md
       hover:-translate-y-3 border-gray-300  transform transition duration-300"
      >
        <figure>
          <img src={allcard?.img} alt="Shoes" className="h-44 w-full" />
        </figure>
        <div class="">
          <div className="px-2 pt-1 flex justify-between">
            <p className="text-md font-sans text-gray-500 hover:">
              {allcard?.instructor}
            </p>
            {allcard?.badge ? (<div class="badge badge-secondary">{allcard?.badge}</div>) : (<></>)}
          </div>
          <h2 class="px-2 py-1 text-xl hover:text-blue-900">
            {allcard?.name.slice(0, 24)}
          </h2>
          <div className="flex justify-between border-t p-2 text-lg font-bold">
            <p>৳ {allcard?.price}</p>
            <p className="text-blue-900">Buy Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCourseCard;

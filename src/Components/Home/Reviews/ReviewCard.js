import React from "react";

const ReviewCard = ({ course }) => {
  const { name, img, description, address, tag } = course;
  return (
    <div> 
      <div className="card rounded-lg w-11/12 lg:w-96 md:w-96 mx-auto bg-base-300 border border-neutral mt-6 h-80">
        <div className="card-body p-7">
          <div className="flex mb-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img className="" src={img} />
              </div>
            </div>
            <div className="ml-4 font-sub">
              <h2 className="text-xl font-bold text-left">
                {name}
              </h2>
              <p className="text-gray-500 text-sm text-left">{address}</p>
            </div>
          </div>
          <div>
            <p className="text-left font-sub text-lg font-bold mb-1">
             Awesome Work!!
            </p>
            <p className="text-left text-md font-sub opacity-80">{description}</p>
          </div>
          <div className="rating rating-md mt-3">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

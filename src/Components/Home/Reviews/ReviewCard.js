import React from "react";

const ReviewCard = ({ course }) => {
  const { name, img, description, address } = course;
  return (
    <div>
      <div class="card w-11/12 lg:w-96 md:w-96 mx-auto bg-slate-100">
        <div class="card-body p-7">
          <div className="flex mb-4">
            <div class="avatar">
              <div class="w-12 h-12 rounded-full">
                <img className="" src={img} />
              </div>
            </div>
            <div className="ml-4">
              <h2 class="text-md font-bold text-left">{name}</h2>
              <p className="text-gray-500 text-sm text-left">{address}</p>
            </div>
          </div>
          <p className="card-body rounded-lg border border-gray-300 border-l-primary border-l-4 p-4 bg-base-100 text-left">
            {description}
          </p>
              <div class="rating rating-md mt-3 mx-auto">
                <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
              </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

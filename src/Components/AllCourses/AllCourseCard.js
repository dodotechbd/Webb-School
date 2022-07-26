import React from "react";

const AllCourseCard = ({ allcard }) => {
  const { name, img, price } = allcard;
  return (
    <a href="#">
      <div
        class="mx-auto card card-compact w-72 bg-base-100 border rounded-md
        hover:shadow-xl hover:-translate-y-3 border-gray-300  transform transition duration-300"
      >
        <figure>
          <img src={img} alt="Shoes" className="h-44" />
        </figure>
        <div class="">
          <div className="px-2 pt-1 flex justify-between">
          <p className="text-md font-sans text-gray-500 hover:text-black">
            Muhammad Shafi
          </p>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-red-400"
            />
          </div>
          </div>
          <h2 class="px-2 py-2 text-2xl hover:text-blue-400 font-bold">
            {name}
          </h2>
          <div class="rating px-2 pb-2">
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
          </div>
          <div className="flex justify-between border-t p-2 text-lg font-bold">
            <p>৳ 1250</p>
            <p className="text-success">Buy Now</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AllCourseCard;

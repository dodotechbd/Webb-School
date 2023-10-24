import React, { useState } from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import Rating from "react-rating";
import { getTimeAgo } from "../../../utils/utils";

const ReviewCard = ({ course }) => {
  const [readmore, setReadmore] = useState(false);
  const { rating, review, reviewDate, author } = course;
  return (
    <div className="w-full">
      <div className="avatar top-14">
        <div className="w-20 rounded-full ring-8 ring-offset-2 shadow-warning shadow-lg ring-offset-base-300 ring-base-300">
          <img
            src={
              author?.photo
                ? author?.photo
                : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
            }
          />
        </div>
      </div>
      <div
        className={`rounded-lg w-11/12 ${
          readmore ? "h-full" : "lg:h-72 h-full"
        } mx-auto bg-base-300`}
      >
        <div className="card-body p-7">
          <div className="mt-10">
            <div className="text-center font-sub">
              <h2 className="text-2xl font-bold">{author?.name}</h2>
              <p className="text-xl">
                <Rating
                  className="text-[#FAAF00]"
                  initialRating={rating}
                  readonly
                  emptySymbol={<ImStarEmpty />}
                  fullSymbol={<ImStarFull />}
                />
              </p>
            </div>
          </div>
          <div>
            <p className="text-left text-md font-sub opacity-80">
              {readmore ? review : review?.slice(0, 170)}
              {review?.length > 170 && (
                <button
                  className="text-accent"
                  onClick={() => setReadmore(!readmore)}
                >
                  {readmore ? "...read less" : "...read more"}
                </button>
              )}
            </p>
            <p className="text-sm opacity-60 text-right">
              -
              <span className="ml-1">
                {getTimeAgo(reviewDate)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

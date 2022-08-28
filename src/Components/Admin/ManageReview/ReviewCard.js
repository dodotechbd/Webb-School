import React from "react";
import Rating from "react-rating";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

const ReviewCard = ({ allcard, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  allcard?.author?.photo
                    ? allcard?.author?.photo
                    : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{allcard?.author?.name}</div>
            <div className="">
              <Rating
                className="text-[#FAAF00]"
                initialRating={allcard?.rating}
                readonly
                emptySymbol={<ImStarEmpty />}
                fullSymbol={<ImStarFull />}
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <label
          for={allcard?._id}
          className="btn modal-button py-[5px] btn-xs btn-primary tooltip tooltip-bottom tooltip-base-300 font-thin"
          data-tip={allcard?.review.slice(0,40)}
        >
          View Review
        </label>
        <input type="checkbox" id={allcard?._id} class="modal-toggle" />
        <label for={allcard?._id} class="modal cursor-pointer">
          <label class="modal-box relative whitespace-normal p-4" for="">
          <label for={allcard?._id} class="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
            <p class="py-4">
              {allcard?.review}
            </p>
          </label>
        </label>
      </td>
      <td>
        <button className="btn btn-xs btn-warning btn-outline">
          Add To Homepage
        </button>
      </td>
    </tr>
  );
};

export default ReviewCard;

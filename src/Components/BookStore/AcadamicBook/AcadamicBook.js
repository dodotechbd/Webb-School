import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

const AcadamicBook = ({ acadamicbook }) => {
  const { _id, name, img, description, price } = acadamicbook;
  const { data: bookreviews, refetch } = useQuery(["bookreviewsData"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/bookreviews`).then((res) => res.json())
  );
  const reviewData = bookreviews?.filter(
    (allcard) => allcard.courseName === _id
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;
  return (
    <Link to={`/acadamicbook/${_id}`}>
      <div className="btn-ghost bg-base-300 rounded-lg position relative p-0 shadow-lg cursor-pointer mb-4">
        <figure>
          <img
            className="mx-auto mt-4 w-48 rounded-lg text-center"
            src={img}
            alt="Books"
          />
        </figure>
        <div className="card-body p-0">
          <div className="card-body p-4">
            <h1>
              {name?.length >= 18 ? (
                ((<p className="text-xl font-bold">{name.slice(0, 18)}...</p>),
                (<p className="text-xl font-bold">{name?.slice(0, 18)}...</p>))
              ) : (
                <p className="text-xl font-bold">{name}</p>
              )}
            </h1>
            <p className="text-lg">{description}</p>
            <div className="">
              {avgRating ? (
                <span className="mr-2 font-bold text-[#c48b07]">
                  {avgRating.toString().slice(0, 3)}
                </span>
              ) : (
                <></>
              )}

              <Rating
                className="text-[#FAAF00]"
                initialRating={avgRating}
                readonly
                emptySymbol={<ImStarEmpty />}
                fullSymbol={<ImStarFull />}
              />
              <span className="opacity-70">({ratingData?.length})</span>
            </div>
            <p className="text-lg text-primary font-bold">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AcadamicBook;

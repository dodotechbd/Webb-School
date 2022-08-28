import React from "react";
import { Link } from "react-router-dom";
const AcadamicBook = ({ acadamicbook }) => {
  const { _id, name, img, description, price } = acadamicbook;
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
            <p className="text-lg text-primary font-bold">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AcadamicBook;

import React from "react";

const AdmissionCard = ({ admission }) => {
  const { name, img, link, instructor } = admission;
  console.log(name);
  return (
    <div className="rounded-lg border border-neutral mx-4">
      <a href={link} target="blank" className="group rounded h-20 lg:h-fit min-w-fit card card-side bg-base-300 transform transition duration-500 hover:scale-110 hover:shadow-xl">
        <figure>
          <img className="lg:w-48 w-28 h-20  lg:h-32 object-cover" src={img} alt="Movie" />
        </figure>
        <div className="card-body px-5 py-8">
          <h2 className="text-sm lg:text-xl -mt-5 md:-mt-4 lg:mt-0">{name}</h2>
          <h2 className="text-xs lg:text-md text-gray-500 -mt-2 lg:mt-0">{instructor}</h2>
        </div>
      </a>
    </div>
  );
};

export default AdmissionCard;

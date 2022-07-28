import React from "react";

const AdmissionCard = ({ admission }) => {
  const { name, img, link } = admission;
  console.log(name);
  return (
    <div className=" rounded-lg" data-aos="fade-up-right"
    data-aos-duration="2000">
      <a href={link} target="blank" className="group mx-4 rounded h-20 lg:h-fit min-w-fit card card-side bg-gray-100 transform transition duration-500 hover:scale-110 hover:shadow-xl">
        <figure>
          <img className="lg:w-48 w-28 h-20  lg:h-full object-cover" src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-sm lg:text-lg font-semibold text-gray-700 lg:-mt-0 -mt-3">{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default AdmissionCard;

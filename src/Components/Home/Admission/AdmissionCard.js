import React from "react";

const AdmissionCard = ({ admission }) => {
  const { name, img, link } = admission;
  console.log(name);
  return (
    <div className="bg-[#3EC1D3]">
      <a href={link} target="blank" class="group mx-4 rounded h-20 lg:h-fit min-w-fit card card-side bg-gray-100 transform transition duration-500 hover:scale-110 hover:shadow-xl">
        <figure>
          <img className="lg:w-48 w-28 h-20  lg:h-full object-cover" src={img} alt="Movie" />
        </figure>
        <div class="card-body bg-[#FFFFFF]">
          <h2 class="text-sm lg:text-lg lg:-mt-0 -mt-3">{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default AdmissionCard;

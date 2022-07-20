import React from "react";

const AdmissionCard = ({ admission }) => {
  const { name, img, link } = admission;
  console.log(name);
  return (
    <div>
      <a href={link} target="blank" class="group mx-4 rounded h-fit min-w-fit card card-side bg-base-200 transform transition duration-500 hover:scale-110 hover:shadow-xl">
        <figure>
          <img className="w-48 h-full object-cover" src={img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="text-lg font-bold">{name}</h2>
          <div class="card-actions justify-end">
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdmissionCard;

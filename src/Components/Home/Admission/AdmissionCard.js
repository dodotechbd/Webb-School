import React from "react";

const AdmissionCard = ({ admission }) => {
  const { name, img, link } = admission;
  console.log(name);
  return (
    <div>
      <a href={link} target="blank" class="group rounded h-28 card card-side bg-base-200 shadow-sm hover:bg-primary">
        <figure>
          <img className="w-48 h-28" src={img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title group-hover:text-white">{name}</h2>
          <div class="card-actions justify-end">
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdmissionCard;

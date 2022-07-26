import React from 'react';



const JobCard = ({jobCourse}) => {
    const { name, img } = jobCourse;

    return (
        <div>
             <a
          href="#"
          className=" card card-compact rounded-lg w-72 my-8 bg-base-100 hover:shadow-xl border hover:-translate-y-5 border-gray-300  transform transition duration-300"
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="text-2xl text-center">{name}</h2>

            <div className="card-actions justify-center">
              <div className="text-center mt-4 text-lg uppercase text-primary border-t-2 w-full border-gray pt-3">
                See Details
              </div>
            </div>
          </div>
        </a>

       
        </div>
    );
};

export default JobCard;
import React from 'react';



const JobCard = ({jobCourse}) => {
    const { name, img } = jobCourse;

    return (
        <div>
             <a
          href="#"
          className="card card-compact rounded-lg w-72 my-8 bg-base-100 hover:shadow-xl border hover:-translate-y-5 border-neutral  transform transition duration-300 mx-auto"
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-2xl text-center p-5">{name}</h2>

            <div className="card-actions justify-center">
              <div className="text-center text-lg uppercase text-primary border-t w-full border-neutral p-2">
                See Details
              </div>
            </div>
          </div>
        </a>

       
        </div>
    );
};

export default JobCard;
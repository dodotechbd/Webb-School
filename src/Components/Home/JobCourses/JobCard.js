import React from 'react';



const JobCard = ({jobCourse}) => {
    const { name, img } = jobCourse;
    console.log(name)

    return (
        <div>
             <a
          href="#"
          class=" card card-compact hidden lg:block md:block w-72 mb-10 mx-auto bg-base-100 hover:shadow-xl border border-gray-300  transform transition duration-500 hover:scale-110"
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div class="card-body ">
            <h2 class="text-2xl text-center">{name}</h2>

            <div class="card-actions justify-center">
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
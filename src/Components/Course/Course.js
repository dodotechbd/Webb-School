import React from 'react';

const Course = ({ course }) => {
    const { id, name, img, description, price } = course;
    return (
        <div className=''> 
            <a href='#' className="card w-100 bg-base-100 border border-gray-300 h-full transform transition duration-500 hover:scale-110 hover:shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="badge badge-primary text-white">Top</div>
                    </h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold border-b-2 pb-2'>${price}</p>
                    <div className="mt-4 text-center text-xl text-primary ">Enroll Course</div>
                </div>
            </a>
        </div>
    );
};

export default Course;
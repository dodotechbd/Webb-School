import React from 'react';

const Course = ({ course }) => {
    const { id, name, img, description, price } = course;
    return (
        <div>
            <a href='#' class="card w-100 bg-base-100 border border-2 h-full transform transition duration-500 hover:scale-110 hover:shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div class="badge badge-success">Top</div>
                    </h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold'>${price}</p>
                    <div className="text-center font-bold text-xl text-primary border-t-2 w-full border-gray pt-2">Enroll Course</div>
                </div>
            </a>
        </div>
    );
};

export default Course;
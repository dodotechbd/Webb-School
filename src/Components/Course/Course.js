import React from 'react';

const Course = ({ course }) => {
    const { id, name, img, description, price } = course;
    return (
        <div>
            <div class="card w-100 bg-base-100 shadow-xl">
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
                    <button className="btn btn-success mt-4">Enroll Course</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
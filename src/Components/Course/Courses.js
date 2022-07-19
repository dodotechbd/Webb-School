import React, { useEffect, useState } from 'react';
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    })
    return (
        <div>
            <div className='my-10 p-10'>
                <h1 className='text-3xl text-center mt-3 font-semibold uppercase'>Special Courses</h1>
                <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                    {
                        courses.map(course => <Course
                        key={course.id}
                        course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
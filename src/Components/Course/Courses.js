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
            <div id='courses' className='p-10'>
                <h1 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center mb-12 uppercase'>Special Courses</h1>
                <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 '>
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
import React from 'react';
import useJobCourses from '../../../Hooks/useJobCourse';
import JobCard from './JobCard';


const JobCourses = () => {
    const [jobCourse, setJobCourse] = useJobCourses()
    return (
        <div className="my-16" id="job">

            <h1 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center">
                Job Exam Preparation
            </h1>
            <h2 className="lg:text-xl text-md mb-5 mt-2 text-center text-gray-500">
                Which job are you preparing for?
            </h2>
            <div className="my-10 grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4">
                {jobCourse.map((jobCourse) => (
                    <JobCard
                        key={jobCourse._id}
                        jobCourse={jobCourse}
                    ></JobCard>
                ))}


            </div>
        </div>
    );
};

export default JobCourses;
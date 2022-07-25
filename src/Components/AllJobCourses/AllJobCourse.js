import React from "react";
import useJobCourses from "../../Hooks/useJobCourse";
import JobCard from "../Home/JobCourses/JobCard";

const AllJobCourse = () => {
    const [jobCourse, setJobCourse] = useJobCourses();
  return (
    <div className="px-4">
      <div className="lg:py-8 py-4">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold lg:mx-8">
          All Programs
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto lg:mx-8 mb-10 ">
      {jobCourse.map((jobCourse) => (
          <JobCard key={jobCourse._id} jobCourse={jobCourse}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobCourse;

import React from "react";
import useJobCourses from "../../Hooks/useJobCourse";
import AllCourseCard from "../AllCourses/AllCourseCard";

const AllJobCourse = () => {
    const [jobcourses] = useJobCourses();
  return (
    <div className="px-4"><div className="lg:mx-8 mx-4 pt-10">
      <h1 className="text-3xl pb-5 text-black">Job Recruitment</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {jobcourses.slice(0, 4).map((allcard) => (
            <AllCourseCard key={allcard.id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobCourse;

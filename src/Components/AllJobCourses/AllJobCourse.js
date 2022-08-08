import React, { useEffect, useState } from "react";
import useJobCourses from "../../Hooks/useJobCourse";
import AllCourseCard from "../AllCourses/AllCourseCard";
import Loader from "../Shared/Loading/Loader";

const AllJobCourse = () => {
  const [jobcourses] = useJobCourses();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="px-4">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Job Recruitment</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {jobcourses.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobCourse;

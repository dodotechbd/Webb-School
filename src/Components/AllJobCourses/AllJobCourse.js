import React from "react";
import AllCourseCard from "../AllCourses/AllCourseCard";
import Loader from "../Shared/Loading/Loader";
import { useQuery } from "react-query";
import useTitle from "../../Hooks/useTitle";

const AllJobCourse = () => {
  useTitle("Job Recruiment");
  const { data: job, isLoading } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Job Recruitment</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {job?.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobCourse;

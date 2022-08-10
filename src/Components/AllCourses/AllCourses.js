import React from "react";
import AllCourseCard from "./AllCourseCard";
import Loader from "../Shared/Loading/Loader";
import AllAdmission from "../AllAdmission/AllAdmission";
import AllJobCourse from "../AllJobCourses/AllJobCourse";
import { useQuery } from "react-query";

const AllCourses = () => {
  const { data: language, isLoading } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div id="courses" className="courses">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Language Learning</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {language?.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
      <AllJobCourse></AllJobCourse>
      <AllAdmission></AllAdmission>
    </div>
  );
};

export default AllCourses;

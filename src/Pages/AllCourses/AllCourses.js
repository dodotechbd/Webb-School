import React from "react";
import useAllCourse from "../../Hooks/useAllCourse";
import useTitle from "../../Hooks/useTitle";
import AllAdmission from "../AllAdmission/AllAdmission";
import AllJobCourse from "../AllJobCourses/AllJobCourse";
import Instructor from "../Home/Instructor/Instructor";
import Loader from "../Shared/Loading/Loader";
import AllCourseCard from "./AllCourseCard";

const AllCourses = () => {
  useTitle("Courses");
  const [language, isLoading] = useAllCourse.useLanguage();
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div id="courses" className="courses container mx-auto">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Language Learning</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {language?.data?.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
      <AllJobCourse></AllJobCourse>
      <AllAdmission></AllAdmission>
      <Instructor></Instructor>
    </div>
  );
};

export default AllCourses;

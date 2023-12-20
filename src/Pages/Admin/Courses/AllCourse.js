import React from "react";
import useAllCourse from "../../../Hooks/useAllCourse";
import Loading from "../../Shared/Loading/Loading";
import CourseCard from "./CourseCard";

const AllCourse = () => {
  const { isLoading, courses, refetch } = useAllCourse.useAllCourses();
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-center">
      <div className="lg:mx-8 mx-4 mt-4">
        <h1 className="text-3xl pb-5 ">Manage All Courses</h1>
        <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {courses?.data?.map((course) => (
            <CourseCard key={course._id} course={course} refetch={refetch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourse;

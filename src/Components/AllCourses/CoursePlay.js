import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CourseLink from "./CourseLink";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import primaryAxios from "../../Api/primaryAxios";


const CoursePlay = () => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
  primaryAxios.get(`/mycourse?email=${user?.email}`)
);
  const courseData = myCourse?.data?.find((allcard) => allcard.uname === uname);
  return (
    <div>
      <div className="hero bg-base-100 py-8">
        <div className="flex justify-center lg:w-full w-11/12 gap-10 flex-col-reverse lg:flex-row-reverse items-start">
          <div className="card rounded-md lg:w-96 w-full bg-base-200 border border-neutral">
            <div className="card-body p-0">
              <p className="text-lg p-3 border-b border-neutral">Course Lesson</p>
            {
              courseData?.file.map(course => <CourseLink
                key={course.id}
                course={course}
                ></CourseLink>)
            }
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";
import CourseLink from "./CourseLink";


const CoursePlay = () => {
  const { uname } = useParams();
  const [language] = useLanguage([]);
  const [jobcourses] = useJobCourses([]);
  const [admission] = useAdmission([]);

  const courseData = admission.find((allcard) => allcard.uname === uname)
  || language.find((allcard) => allcard.uname === uname) || jobcourses.find((allcard) => allcard.uname === uname);
  return (
    <div>
      <div className="hero bg-base-200 py-8">
        <div className="flex justify-center lg:w-full w-11/12 gap-10 flex-col-reverse lg:flex-row-reverse items-start">
          <div className="card rounded-md lg:w-96 w-full bg-base-300 border border-neutral">
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

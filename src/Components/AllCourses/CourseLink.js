import React from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";

const CourseLink = ({ course }) => {
  const { uname } = useParams();
  const [language] = useLanguage([]);
  const [jobcourses] = useJobCourses([]);
  const [admission] = useAdmission([]);

  const courseData =
    admission.find((allcard) => allcard.uname === uname) ||
    language.find((allcard) => allcard.uname === uname) ||
    jobcourses.find((allcard) => allcard.uname === uname);

    
  return (
    <>
      <div
        tabindex="0"
        class="collapse collapse-arrow border-b border-neutral px-2"
      >
        <input type="checkbox"/>
        <div class="collapse-title text-lg font-medium">{course?.fileName}</div>
        <ul className="menu collapse-content p-0">
          <li>
          <NavLink
          className='border border-neutral'
              to={`/course/${uname}/${courseData?.list}/${course?.fileName}`}
            >
              <p className="text-md">
          <i class="fa-solid fa-play mr-2"></i>
              {course?.fileName}
          </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CourseLink;

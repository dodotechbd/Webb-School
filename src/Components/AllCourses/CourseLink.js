import React from "react";
import { useParams, NavLink } from "react-router-dom";
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
        class="collapse collapse-arrow border-b border-neutral mx-4"
      >
        <input type="checkbox"/>
        <div class="collapse-title text-lg font-medium">{course?.title}</div>
        <ul className="menu collapse-content gap-1">
          {course.details.map ((detail) => 
          <li>
          <NavLink
          to={`/course/${uname}/${courseData?.list}/${detail?.fileName}`}
            className="border border-neutral"
          >
            <p className="text-md">
              <i class="fa-solid fa-circle-play mr-2"></i>
              {detail?.name}
            </p>
          </NavLink>
        </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CourseLink;

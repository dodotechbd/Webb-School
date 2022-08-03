import React from "react";
import { useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";

const CourseSyllabus = ({ course }) => {
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
        <input type="checkbox" />
        <div class="collapse-title text-lg font-medium">{course?.title}</div>
        <ul className="menu collapse-content gap-1">
          {course.details.map ((detail) => 
          <li>
          <p
            className="border border-neutral"
          >
            <p className="text-md">
              <i class="fa-solid fa-play mr-2"></i>
              {detail?.fileName}
            </p>
          </p>
        </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CourseSyllabus;

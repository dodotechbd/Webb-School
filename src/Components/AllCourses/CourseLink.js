import React from "react";
import { Link, useParams } from "react-router-dom";
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
        class="collapse collapse-arrow border-b border-neutral mx-2"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title hover:bg-accent text-lg font-medium">{course?.fileName}</div>
        <Link
               class="collapse-content -mb-2 pt-2 bg-base-100 cursor-pointer"
              to={`/course/${uname}/${courseData?.list}/${course?.fileName}`}
            >
              <p className="text-md">
          <i class="fa-solid fa-play mr-2"></i>
              {course?.fileName}
          </p>
            </Link>
      </div>
    </>
  );
};

export default CourseLink;

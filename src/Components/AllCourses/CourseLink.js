import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";

const CourseLink = ({ course }) => {
  const { uname } = useParams();
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then(
      (res) => res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then(
      (res) => res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseData =
    admission?.find((allcard) => allcard.uname === uname) ||
    language?.find((allcard) => allcard.uname === uname) ||
    job?.find((allcard) => allcard.uname === uname);

    
  return (
    <>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border-b border-neutral mx-4"
      >
        <input type="checkbox"/>
        <div className="collapse-title text-lg font-medium">{course?.title}</div>
        <ul className="menu collapse-content gap-1">
          {course.details.map ((detail) => 
          <li>
          <NavLink
          to={`/course/${uname}/${courseData?.list}/${detail?.fileName}`}
            className="border border-neutral"
          >
            <p className="text-md">
              <i className="fa-solid fa-circle-play mr-2"></i>
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

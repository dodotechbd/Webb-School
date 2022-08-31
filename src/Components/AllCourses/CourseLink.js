import React from "react";
import { useParams, NavLink } from "react-router-dom";

const CourseLink = ({ course, allCourseData }) => {
  const { uname } = useParams();
  let activeClassName = "bg-neutral";
  return (
    <>
      <div
        tabIndex="0"
        className="collapse collapse-plus border-b border-neutral mx-4"
      >
        <input type="checkbox" class="peer" />
        <div className="collapse-title text-md font-medium peer-checked:bg-info peer-checked:text-white peer-checked:font-bold">
          {course?.title}
        </div>
        <ul className="menu px-0 collapse-content peer-checked:text-warning">
          {course.details.map((detail) => (
            <li>
              <NavLink
                to={`/course/${uname}/${allCourseData?.list}/${detail?.fileName}`}
                className="border-t border-neutral text-warning"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <p className="text-md">
                  <i className="fa-solid text-info fa-circle-play mr-2"></i>
                  {detail?.name}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseLink;

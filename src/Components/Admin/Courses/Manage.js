import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-center">
      <div className="bg-base-200 shadow-lg">
        <ul className="menu menu-horizontal bg-base-300 w-fit">
          <li>
            <Link
              to={"/admin/courses/manage"}
              className="hover:rounded-none"
            >
              Special
            </Link>
            <NavLink
              to={"/admin/courses/manage/language"}
              className="hover:rounded-none"
            >
              Language
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/courses/manage/job"} className="hover:rounded-none">
              Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/courses/manage/admission"}
              className="hover:rounded-none"
            >
              Admission
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;

import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
const Courses = () => {
  const router = useLocation();
  return (
    <div className="text-center">
      <div className="navbar bg-base-200 border-b border-neutral">
        <div className="flex-1 flex">
          <p className="normal-case text-xl">{router.pathname === "/admin/courses/manage" ? "All Courses":"Special Courses"}</p>
        </div>
        <div className="lg:flex flex-none hidden">
          <ul className="menu menu-compact menu-horizontal p-0">
            <li className="mx-1">
              <Link to={"/admin/courses/manage"} className={router.pathname === "/admin/courses/manage" ? "bg-primary":""}>All Courses</Link>
            </li>
            <li className="mx-1">
              <NavLink to={"/admin/courses/manage/special"}>Special Courses</NavLink>
            </li>
            <li className="mx-1">
              <Link className="btn-sm btn-secondary text-base-200" to={"/admin/addcourse"}>
                Add New Course<i className="fa-solid fa-folder-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;

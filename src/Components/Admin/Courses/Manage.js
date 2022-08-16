import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-center">
      <div className="bg-base-200 shadow-lg">
      <ul class="menu menu-horizontal bg-base-300 w-fit">
        <li>
        <NavLink to={"/admin/courses/language"} className='hover:rounded-none'>Language</NavLink>
        </li>
        <li>
        <NavLink to={"/admin/courses/job"} className='hover:rounded-none'>Job</NavLink>
        </li>
        <li>
        <NavLink to={"/admin/courses/admission"} className='hover:rounded-none'>Admission</NavLink>
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

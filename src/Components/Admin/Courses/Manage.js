import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-center mt-4">
      <ul class="menu menu-horizontal bg-base-300 w-fit rounded-box">
        <li>
        <NavLink to={"/admin/courses/language"} className='hover:rounded-none hover:rounded-l-2xl'>Language</NavLink>
        </li>
        <li>
        <NavLink to={"/admin/courses/job"} className='hover:rounded-none'>Job</NavLink>
        </li>
        <li>
        <NavLink to={"/admin/courses/admission"} className='hover:rounded-none hover:rounded-r-2xl'>Admission</NavLink>
        </li>
      </ul>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-center">
      <div class="navbar bg-base-200 border-b border-neutral">
        <div class="flex-1 flex">
          <a class="normal-case text-xl">Manage Courses</a>
        </div>
        <div class="lg:flex flex-none hidden">
          <ul class="menu menu-compact menu-horizontal p-0">
            <li className='mx-1'>
              <Link to={"/admin/courses/manage"}>Special</Link>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/language"}
                className="hover:rounded-none"
              >
                Language
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/job"}
                className="hover:rounded-none"
              >
                Job
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/admission"}
                className="hover:rounded-none"
              >
                Admission
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-end lg:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/admin/courses/manage"}>Special</Link>
            </li>
            <li>
              <NavLink
                to={"/admin/courses/manage/language"}
                className="hover:rounded-none"
              >
                Language
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/courses/manage/job"}
                className="hover:rounded-none"
              >
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
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;

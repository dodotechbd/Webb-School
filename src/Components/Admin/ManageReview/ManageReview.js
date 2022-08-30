import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
const ManageReview = () => {
  return (
    <div className="text-center">
      <div class="navbar bg-base-200 border-b border-neutral">
        <div class="flex-1 flex">
          <a class="normal-case text-xl">Manage Reviews</a>
        </div>
        <div class="lg:flex flex-none hidden">
          <ul class="menu menu-compact menu-horizontal p-0">
          <li>
            <Link to={"/admin/reviews"} className="hover:rounded-none">
              All Reviews
            </Link>
          </li>
          <li>
            <NavLink to={"/admin/reviews/course"} className="hover:rounded-none">
              Course Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/reviews/book"} className="hover:rounded-none">
              Book Reviews
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
            <Link to={"/admin/reviews"} className="hover:rounded-none">
              All Reviews
            </Link>
          </li>
          <li>
            <NavLink to={"/admin/reviews/course"} className="hover:rounded-none">
              Course Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/reviews/book"} className="hover:rounded-none">
              Book Reviews
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

export default ManageReview;

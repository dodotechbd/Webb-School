import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <div class="navbar bg-primary">
        <div class="flex-none lg:hidden">
          <div>
            <label for="my-drawer" class="btn btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-base-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div class="flex-1">
          <Link to={'/admin'} class="btn btn-ghost text-base-100 font-thin text-xl">Admin Panel</Link>
        </div>
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
      </div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div className="bg-base-100 drawer-content">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content gap-3">
            <li>
              <NavLink to={"/admin/manage"}><i class="fa-solid fa-list-check"></i>Manage Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/post"}><i class="fa-solid fa-folder-plus"></i>Post Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/live"}><i class="fa-solid fa-video"></i>Post Live Classes</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/users"}><i class="fa-solid fa-users"></i>Users</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/payments"}><i class="fa-solid fa-credit-card"></i>Payments</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;

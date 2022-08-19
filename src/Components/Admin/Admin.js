import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <div className="navbar bg-base-200 border-b border-neutral">
        <div className="flex-none lg:hidden">
          <div>
            <label for="my-drawer" className="btn btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
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
        <div className="flex-1">
          <Link to={'/admin'} className="btn btn-ghost font-thin text-xl">Admin Panel</Link>
        </div>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="bg-base-100 drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-3 overflow-y-auto w-72 border-r border-neutral bg-base-200 text-base-content gap-3">
            <li>
              <NavLink to={"/admin/courses/language"}><i className="fa-solid fa-list-check"></i>Manage Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/academicbookss"}><i className="fa-solid fa-book"></i>Manage Academic Books</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/skillbookss"}><i className="fa-solid fa-book"></i>Manage Skill Books</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/LivePost/Live"}><i className="fa-solid fa-video"></i>Post Live Classes</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/post"}><i className="fa-solid fa-circle-play"></i>Post Course Video</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/blogs"}><i className="fa-solid fa-file-pen"></i>Add Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/users"}><i className="fa-solid fa-users"></i>Users</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/payments"}><i className="fa-solid fa-credit-card"></i>Payments</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/message"}><i class="fa-solid fa-paper-plane"></i>Send Message</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;

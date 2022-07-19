import React from "react";
import { Link, useLocation } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.png";
import "./Header.css";

const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const manuItems = (
    <>
      <li className={splitLocation[1] === "courses" ? "active" : ""}>
        <Link to="courses">Courses</Link>
      </li>
      <li className={splitLocation[1] === "bookstore" ? "active" : ""}>
        <Link to="bookstore">Book Store</Link>
      </li>
      <li className={splitLocation[1] === "jobs" ? "active" : ""}>
        <Link to="jobs">Jobs</Link>
      </li>
      <li className={splitLocation[1] === "blogs" ? "active" : ""}>
        <Link to="blogs">Blog</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-200 navbar fixed top-0 w-full z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class=" font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItems}
          </ul>
        </div>
        <Link to="/">
          <img width="140px" src={wslogo} alt=""></img>
        </Link>
      </div>
      <div class="navbar-center mr-56">
        <ul class="hidden space-x-5 lg:flex mr-10 text-lg">{manuItems}</ul>
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn glass text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu text-white dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 right-0 bg-opacity-90 backdrop-filter backdrop-blur-lg"
          >
            {manuItems}
          </ul>
        </div>
      </div>
      <div class="navbar-end hidden">
        <div tabindex="0" class=" dropdown dropdown-end">
          <div className="flex">
            <label class="btn btn-ghost btn-circle avatar">
              <div class="w-7 rounded-full">
                <img src="https://ms-muhammadshafi.web.app/static/media/shafi.cdca5fda4d7f428839c0.jpg" />
              </div>
            </label>
          </div>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

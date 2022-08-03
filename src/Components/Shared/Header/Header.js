import React from "react";
import { Link, useLocation } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.svg";
import "./Header.css";
// import component ?
import Drawer from "react-modern-drawer";

//import styles ?
import "react-modern-drawer/dist/index.css";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = ({ handleThemeChange, theme }) => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
      <li className={splitLocation[1] === "admission" ? "active" : ""}>
        <Link to="admission">Admission</Link>
      </li>
      <li className={splitLocation[1] === "jobs" ? "active" : ""}>
        <Link to="jobs">Jobs</Link>
      </li>
      <li className={splitLocation[1] === "blogs" ? "active" : ""}>
        <Link to="blogs">Blog</Link>
      </li>
      <li className={splitLocation[1] === "admin" ? "active" : ""}>
        <Link to="admin/manage">Admin</Link>
      </li>
    </> 
  );
  return (
    <div className="navbar fixed top-0 w-full z-50 lg:px-10  bg-base-100 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-neutral">
      <div className="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>
            <ul tabindex="0" className="bg-base-100 h-screen">
              <Link to="/">
              <div className="flex items-center p-2 border-b border-neutral w-full">
              <img className="w-12 ml-3" src={wslogo} alt="" />
              <div className="ml-1 text-lg font-sub font-bold">
                <p>Webb</p>
                <p className="-mt-2">School</p>
              </div>
          </div>
              </Link>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="courses">Courses</Link>
              </li>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="bookstore">Book Store</Link>
              </li>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="admission">Admission</Link>
              </li>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="jobs">Jobs</Link>
              </li>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="blogs">Blog</Link>
              </li>
              <li className="py-2 text-lg border-b border-neutral w-full">
                <Link to="admin/manage">Admin</Link>
              </li>
              <li>
                {user ? (
                  <div>
                    <div className="flex flex-nowrap items-center cursor-pointer border-b border-neutral w-full">
                      <label class="avatar">
                        <div class="w-7 mr-2 my-2 rounded-full border border-gray-200">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <p className="whitespace-nowrap">
                        {user?.displayName}
                        <i class="ml-2 fa-solid fa-angle-down"></i>
                      </p>
                    </div>
                    <li className="py-2 text-md pl-5 border-b border-neutral w-full">
                      <a>
                        <i class="mr-3 fa-solid fa-user"></i><Link to="profile">Profile</Link>
                      </a>
                    </li>
                    <li className="py-2 text-md pl-5 border-b border-neutral w-full">
                      <a>
                        <i class="mr-3 fa-solid fa-bolt"></i>My Courses
                      </a>
                    </li>
                    <li className="py-2 text-md pl-5 border-b border-neutral w-full">
                      <a>
                        <i class="mr-3 fa-solid fa-chart-line"></i>Dashboard
                      </a>
                    </li>
                    <li className="py-2 text-md pl-5 border-b border-neutral w-full">
                      <a onClick={logout}>
                        <i class="mr-3 fa-solid fa-right-from-bracket"></i>
                        Logout
                      </a>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li className="my-2 btn-info btn-sm btn rounded-md text-white">
                      <Link to="Login">Login</Link>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </Drawer>
        <Link to="/">
          <div className="flex items-center">
              <img className="w-10 ml-3" src={wslogo} alt="" />
              <div className="ml-1 text-md font-header font-bold">
                <p>Webb</p>
                <p className="-mt-2">School</p>
              </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="hidden space-x-5 lg:flex text-lg">{manuItems}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">
          <button
            onClick={handleThemeChange}
            className="rounded-full lg:mx-2 pr-5"
          >
            {theme ? (
              <svg
                className="swap-on fill-yellow-200 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="swap-off fill-gray-500 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </button>
        {user ? (
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              className="flex flex-nowrap items-center cursor-pointer"
            >
              <label class="avatar">
                <div class="w-7 mr-2 rounded-full border border-gray-200">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <p className="whitespace-nowrap">
                {user?.displayName}
                <i class="ml-2 fa-solid fa-angle-down"></i>
              </p>
            </div>
            <ul
              tabindex="0"
              class="mt-4 p-1 menu menu-compact dropdown-content bg-base-100 rounded-md w-48 border"
            >
              <li>
                <a>
                  <i class="fa-solid fa-user"></i><Link to="profile">Profile</Link>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa-solid fa-bolt"></i>My Courses
                </a>
              </li>
              <li>
                <a>
                  <i class="fa-solid fa-chart-line"></i>Dashboard
                </a>
              </li>
              <li>
                <a onClick={logout}>
                  <i class="fa-solid fa-right-from-bracket"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex">
            <a className="btn-info btn-sm btn rounded-md text-white">
              <Link to="Login">Login</Link>
            </a>
            <div class="divider lg:divider-horizontal"></div>
            <a className="btn-primary btn-sm btn rounded-md text-white">
              <Link to="SignUp">Register</Link>
            </a>
          </div>
        )}
      </div>
      <div className="navbar-end lg:hidden flex">
      <button
            onClick={handleThemeChange}
            className="rounded-full lg:mx-2 font-bold pr-2"
          >
            {theme ? (
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </button>
        <div className="dropdown">
          <label
            onClick={toggleDrawer}
            tabindex="0"
            className="mx-4 text-2xl lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;

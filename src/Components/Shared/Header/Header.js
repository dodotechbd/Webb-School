import React from "react";
import { Link, useLocation } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.png";
import "./Header.css";
// import component ?
import Drawer from "react-modern-drawer";

//import styles ?
import "react-modern-drawer/dist/index.css";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
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
        <Link to="admin">Admin</Link>
      </li>
    </>
  );
  return (
    <div className="navbar border-b fixed top-0 w-full z-50 lg:px-10  bg-base-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>
            <ul tabindex="0" className="p-2 bg-base-100">
              <Link to="/">
                <img className="w-36 mt-2 mb-1" src={wslogo} alt=""></img>
              </Link>
              <hr />
              <li className="my-2 text-lg">
                <Link to="courses">Courses</Link>
              </li>
              <hr />
              <li className="my-2 text-lg">
                <Link to="bookstore">Book Store</Link>
              </li>
              <hr />
              <li className="my-2 text-lg">
                <Link to="admission">Admission</Link>
              </li>
              <hr />
              <li className="my-2 text-lg">
                <Link to="jobs">Jobs</Link>
              </li>
              <hr />
              <li className="my-2 text-lg">
                <Link to="blogs">Blog</Link>
              </li>
              <hr />
              <li className="my-2 text-lg">
                <Link to="admin">Admin</Link>
              </li>
              <hr />
              <li>
                {user ? (
                  <div>
                    <div className="flex flex-nowrap items-center cursor-pointer">
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
                    <hr />
                    <li className="my-2 text-md ml-5">
                      <a>
                      <i class="mr-3 fa-solid fa-user"></i>Profile
                      </a>
                    </li>
                    <hr />
                    <li className="my-2 text-md ml-5">
                    <a><i class="mr-3 fa-solid fa-bolt"></i>My Courses</a>
                    </li>
                    <hr />
                    <li className="my-2 text-md ml-5">
                    <a><i class="mr-3 fa-solid fa-chart-line"></i>Dashboard</a>
                    </li>
                    <hr />
                    <li className="my-2 text-md ml-5">
                      <a onClick={logout}>
                      <i class="mr-3 fa-solid fa-right-from-bracket"></i>Logout</a>
                    </li>
                    <hr />
                  </div>
                ) : (
                  <div>
                    <li className="my-2 btn-primary btn-sm btn rounded-md text-white">
                    <Link to="Login">Login</Link>
                  </li>
                  <hr />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </Drawer>
        <Link to="/">
          <div>
            <img className="w-36" src={wslogo} alt=""></img>
          </div>
        </Link>
      </div>
      <div className="navbar-center lg:mr-36">
        <ul className="hidden space-x-5 lg:flex mr-10 text-lg">{manuItems}</ul>
      </div>
      <div className="navbar-end hidden lg:block">
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
                <i class="fa-solid fa-user"></i>Profile
                </a>
              </li>
              <li>
                <a><i class="fa-solid fa-bolt"></i>My Courses</a>
              </li>
              <li>
                <a><i class="fa-solid fa-chart-line"></i>Dashboard</a>
              </li>
              <li>
                <a onClick={logout}><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex">
            <a className="btn-primary btn-sm btn rounded-md text-white">
              <Link to="Login">Login</Link>
            </a>
            <div class="divider lg:divider-horizontal"></div>
            <a className="btn-primary btn-sm btn rounded-md text-white">
              <Link to="SignUp">Register</Link>
            </a>
          </div>
        )}
      </div>
      <div className="navbar-end lg:hidden">
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

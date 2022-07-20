import React from "react";
import { Link, useLocation } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.png";
import "./Header.css";
// import component ?
import Drawer from "react-modern-drawer";

//import styles ?
import "react-modern-drawer/dist/index.css";

const Header = () => {
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
    <div class="navbar bg-base-100 shadow-lg fixed top-0 w-full z-50 lg:px-10">
      <div class="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>
            <ul tabindex="0" class="font-bold mt-3 p-2 bg-base-100 rounded-box">
              <li className="my-2 text-lg text-center">
                <Link to="courses">Courses</Link>
              </li><hr />
              <li className="my-2 text-lg text-center">
                <Link to="bookstore">Book Store</Link>
              </li><hr />
              <li className="my-2 text-lg text-center">
                <Link to="jobs">Jobs</Link>
              </li><hr />
              <li className="my-2 text-lg text-center">
                <Link to="blogs">Blog</Link>
              </li><hr />
              <li className="my-2 text-lg text-center">
                <Link to="login">Login</Link>
              </li><hr />
            </ul>
          </div>
        </Drawer>
        <Link to="/">
          <img width="140px" src={wslogo} alt=""></img>
        </Link>
      </div>
      <div class="navbar-center mr-56">
        <ul class="hidden space-x-5 lg:flex mr-10 text-lg">{manuItems}</ul>
      </div>
      <div class="navbar-end lg:hidden">
      <div class="dropdown">
          <label
            onClick={toggleDrawer}
            tabindex="0"
            class="btn btn-ghost lg:hidden"
          >
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
        </div>
      </div>
    </div>
  );
};

export default Header;

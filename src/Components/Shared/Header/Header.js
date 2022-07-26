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
    signOut(auth)
  }


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
      <li className={splitLocation[1] === "login" ? "active" : ""}>
       { user ? <li className={splitLocation[1] === "blogs" ? "active" : ""}>
        <button className={splitLocation[1] === "login" ? "active" : ""} onClick={logout}>logout</button>
      </li> : <Link to="login">Login</Link>}
      </li>
    </>
  );
  return (
    <div class="navbar shadow-lg fixed top-0 w-full z-50 lg:px-10  bg-base-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div class="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="top">
          <div>
            <ul tabindex="0" class="p-2 bg-base-100 ">
                <Link to="/">
                  <img className="w-36 mt-2 mb-1 mx-auto" src={wslogo} alt=""></img>
                </Link>
                <hr />
              <li className="my-2 text-lg text-center">
                <Link to="courses">Courses</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="bookstore">Book Store</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="admission">Admission</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="jobs">Jobs</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="blogs">Blog</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                {user? <li className="my-2 text-lg text-center">
                <Link to="blogs">Logout</Link>
              </li> : <Link to="Login">Login</Link>}
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
      <div class="navbar-center lg:mr-56">
        <ul class="hidden space-x-5 lg:flex mr-10 text-lg">{manuItems}</ul>
      </div>
      <div class="navbar-end lg:hidden">
        <div class="dropdown">
          <label
            onClick={toggleDrawer}
            tabindex="0"
            class="mx-4 text-2xl lg:hidden"
          >
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
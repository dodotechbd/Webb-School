import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiMoon, HiSun } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import primaryAxios from "../../../Api/primaryAxios";
import useAllCourse from "../../../Hooks/useAllCourse";
import useRole from "../../../Hooks/useRole";
import auth from "../../../firebase.init";
import { ReactComponent as WsLogo } from "../../../webb-school-logo.svg";
import SendMessage from "../../Admin/SendMessage";
import Preloader from "../Loading/PreLoader";
import "./Header.css";

const Header = ({ handleThemeChange, theme }) => {
  const [role, roleLoading, userData, fetchRole] = useRole();
  const pathname = window.location.pathname;
  const [admission, job, language] = useAllCourse.useAllCourse();
  const [isLiveNav, setIsLiveNav] = useState(true);
  const { data: myCourse } = useQuery(["myCourses", userData?.email], () =>
    primaryAxios.get(`/mycourse?email=${userData?.email}`)
  );

  const myCourseData = myCourse?.data.find((s) => s.uname);
  const userMessageData = userData?.messages;
  const courseData =
    admission?.data?.find((s) => s.uname === myCourseData?.uname) ||
    language?.data?.find((s) => s.uname === myCourseData?.uname) ||
    job?.data?.find((s) => s.uname === myCourseData?.uname);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logout = () => {
    signOut(auth);
    //Token Remove
    localStorage.removeItem("accessToken");
  };
  let activeClassName = "relative text-white bg-red-600";
  let deactiveClassName = "relative text-green-600";
  const handleRead = async () => {
    if (userMessageData) {
      await primaryAxios.put(`/user`, {
        name: userData?.name,
        email: userData?.email,
        image: userData?.image,
        messages: 0,
      });
      fetchRole();
    }
  };
  const manuItems = (
    <>
      <li>
        <Link className="hover:rounded-none" to="/">
          Home
        </Link>
      </li>
      <li>
        <NavLink to="courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="bookstore">Book Store</NavLink>
      </li>
      <li>
        <NavLink to="audiobook">AudioBook</NavLink>
      </li>
      <li>
        <NavLink to="blogs">Blog</NavLink>
      </li>
    </>
  );
  if (roleLoading) {
    return (
      <div
        className="bg-gradient-to-r from-base-300 to-base-200"
        id="preloader"
      >
        <Preloader></Preloader>
      </div>
    );
  }
  return (
    <>
      <div className="fixed top-0 z-40 w-full">
        {courseData?.meetLink?.MLink &&
          pathname !== "/liveclasses" &&
          isLiveNav && (
            <div className="bg-red-100 text-red-600 py-1 flex justify-end items-center gap-3">
              <p className="font-medium text-sm uppercase">
                Live class available .
              </p>
              <Link
                to="liveclasses"
                className="uppercase hover:bg-white rounded text-sm hover:text-red-600 px-4 py-0.5 bg-red-600 text-white duration-300"
              >
                Join Now
              </Link>
              <button
                onClick={() => setIsLiveNav(false)}
                className="ml-7 mr-3 hover:bg-white rounded duration-300 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          )}
        <div className="navbar w-full lg:px-10  bg-base-200 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b-[0.5px] border-neutral">
          <div className="navbar-start">
            <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
              <div>
                <ul tabIndex="0" className="bg-base-200 h-screen">
                  <Link to="/">
                    <div className="flex items-center p-2 w-full">
                      <WsLogo className="w-9 h-8 ml-3" />

                      <div className="ml-1 text-md font-sub font-bold mt-1">
                        <p>Webb</p>
                        <p className="-mt-2">School</p>
                      </div>
                    </div>
                  </Link>
                  <ul className="menu menu-compact">
                    <li>
                      <NavLink className="hover:rounded-none" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:rounded-none" to="courses">
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:rounded-none" to="bookstore">
                        Book Store
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:rounded-none" to="audiobook">
                        AudioBook
                      </NavLink>
                    </li>
                    {/* <li>
                  <NavLink className='hover:rounded-none' to="admission">Admission</NavLink>
                </li>
                <li>
                  <NavLink className='hover:rounded-none' to="jobs">Jobs</NavLink>
                </li> */}
                    <li>
                      <NavLink className="hover:rounded-none" to="blogs">
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                  <li>
                    {userData ? (
                      <div>
                        <div className="flex flex-nowrap items-center cursor-pointer border-b border-neutral w-full">
                          <label className="avatar">
                            <div className="w-7 mx-2 my-2 rounded-full border border-gray-200">
                              <img
                                src={`${
                                  userData?.image
                                    ? userData?.image
                                    : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                }`}
                              />
                            </div>
                          </label>
                          <p className="whitespace-nowrap">
                            {userData?.name || "User"}
                            <i className="ml-2 fa-solid fa-angle-down"></i>
                          </p>
                        </div>
                        <ul className="menu menu-compact">
                          <li>
                            <NavLink
                              className="hover:rounded-none bg-secondary text-white text bg-center mb-2"
                              to={"/admin/courses/manage"}
                            >
                              <i className="ml-4 fa-solid fa-user" />
                              Admin Pannel
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="hover:rounded-none border-t"
                              to={"profile"}
                            >
                              <i className="ml-4 fa-solid fa-user" />
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="hover:rounded-none"
                              to={"mycourse"}
                            >
                              <i className="ml-4 fa-solid fa-bolt"></i>My
                              Courses
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="hover:rounded-none"
                              to={"mybooks"}
                            >
                              <i className="ml-4 fa-solid fa-book"></i>My Books
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? activeClassName : deactiveClassName
                              }
                              to={"liveclasses"}
                            >
                              {courseData?.meetLink?.MLink ? (
                                <>
                                  <i className="ml-4 fa-solid fa-video "></i>
                                  <span>Live Class</span>
                                </>
                              ) : (
                                <>
                                  <i className="ml-4 fa-solid fa-video"></i>
                                  <span>Live Class</span>
                                </>
                              )}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="hover:rounded-none"
                              to={"/orders"}
                            >
                              <i className="ml-4 fa-solid fa-clock"></i>Payment
                              History
                            </NavLink>
                          </li>
                          <li>
                            <a className=" hover:rounded-none" onClick={logout}>
                              <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div className="border-t border-neutral">
                        <li>
                          <Link
                            className="mt-3 mx-3 w-56 btn-info btn-sm btn rounded-full text-white hover:rounded-full font-thin"
                            to="Login"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-[#494FC1] hover:bg-[#4a4e94] my-3 mx-3 w-56 hover:rounded-full btn-sm btn rounded-full text-white font-thin"
                            to="Signup"
                          >
                            Register
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </Drawer>
            <Link to="/">
              <div className="flex items-center">
                <WsLogo className="w-9 h-8 ml-3" />

                <div className="ml-1 text-md font-header font-bold">
                  <p>Webb</p>
                  <p className="-mt-2">School</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal menu-compact p-0 gap-3 uppercase">
              {manuItems}
            </ul>
          </div>

          <div className="navbar-end hidden lg:flex items-center">
            {userData ? (
              <div className="dropdown dropdown-end">
                <button
                  onClick={() => handleRead()}
                  tabIndex="0"
                  className="pr-5 mt-2"
                >
                  <div className="indicator">
                    {userMessageData >= 1 && (
                      <span className="indicator-item badge right-[1px] badge-xs w-[16px] h-[16px] bg-red-600 text-white">
                        {userMessageData > 9 ? (
                          <span>9+</span>
                        ) : (
                          <span>{userMessageData}</span>
                        )}
                      </span>
                    )}
                    <FiSend className="text-[22px]" />
                  </div>
                </button>
                <div
                  tabIndex="0"
                  className="dropdown-content  rounded-lg bg-base-200 border border-neutral mt-6 w-96"
                >
                  <div className="card-body pt-1 pb-2 pl-2 pr-0 max-h-96">
                    <h3 className="text-xl px-3 pt-2">
                      Messages !
                      <i className="text-primary fa-solid fa-paper-plane ml-2"></i>
                    </h3>
                    <div className="message overflow-y-auto pr-1">
                      <SendMessage header user={userData} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={handleThemeChange}
              className="rounded-full lg:mx-2 pr-5"
            >
              {theme ? (
                <HiSun className="text-2xl" />
              ) : (
                <HiMoon className="text-2xl" />
              )}
            </button>

            {userData ? (
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full">
                    <img
                      src={`${
                        userData?.image
                          ? userData?.image
                          : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                      }`}
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 shadow menu menu-compact dropdown-content rounded-md w-56 bg-base-100 text-warning"
                >
                  <div className="mx-auto mt-3">
                    <div className="avatar">
                      <div className="w-20 rounded-full">
                        <img
                          src={`${
                            userData?.image
                              ? userData?.image
                              : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-neutral">
                    <h1 className="text-lg text-center">
                      {userData?.name?.slice(0, 14) || "User"}
                    </h1>
                    <p className="text-xs mb-2 text-center">
                      {userData?.profession?.slice(0, 30) || "---"}
                    </p>
                    {role === "admin" && (
                      <div className="flex justify-center">
                        <Link
                          to={"/admin/courses/manage"}
                          target="blank"
                          className="btn btn-secondary px-4 text-white font-normal btn-sm mb-4"
                        >
                          Admin Control
                        </Link>
                      </div>
                    )}
                  </div>
                  <li>
                    <NavLink to={"profile"} className=" hover:rounded-none">
                      <i className="ml-4 fa-solid fa-user" />
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"mycourse"} className="hover:rounded-none">
                      <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="hover:rounded-none" to={"mybooks"}>
                      <i className="ml-4 fa-solid fa-book"></i>My Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName : deactiveClassName
                      }
                      to={"liveclasses"}
                    >
                      {courseData?.meetLink?.MLink ? (
                        <>
                          <i className="ml-4 fa-solid fa-video  "></i>
                          <span className="">Live Class</span>
                        </>
                      ) : (
                        <>
                          <i className="ml-4 fa-solid fa-video"></i>
                          <span>Live Class</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  {/* <li>
                <NavLink to={"dashboard"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-chart-line"></i>Dashboard
                </NavLink>
              </li> */}
                  <li>
                    <NavLink to={"/orders"} className="hover:rounded-none">
                      <i className="ml-4 fa-solid fa-clock"></i>Payment History
                    </NavLink>
                  </li>
                  <li>
                    <a
                      onClick={logout}
                      className="hover:rounded-b-md hover:rounded-none text-red-600"
                    >
                      <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex">
                <Link
                  className="btn-accent btn-sm btn rounded-md text-white font-thin"
                  to="Login"
                >
                  Login
                </Link>
                <div className="divider lg:divider-horizontal"></div>
                <Link
                  className="bg-[#494FC1] hover:bg-[#4a4e94] btn-sm btn rounded-md text-white font-thin"
                  to="SignUp"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="navbar-end lg:hidden flex">
            {userData ? (
              <div className="dropdown dropdown-end">
                <button tabIndex="0" className="pr-3 mt-3">
                  <div className="indicator">
                    {userMessageData >= 1 && (
                      <span className="indicator-item badge right-[1px] badge-xs w-[16px] h-[16px] bg-red-600 text-white">
                        {userMessageData > 9 ? (
                          <span>9+</span>
                        ) : (
                          <span>{userMessageData}</span>
                        )}
                      </span>
                    )}
                    <FiSend className="text-[22px]" />
                  </div>
                </button>
                <div
                  tabIndex="0"
                  className="dropdown-content  rounded-lg bg-base-200 border border-neutral mt-6 w-72  -mr-14"
                >
                  <div className="card-body p-1">
                    <h3 className="text-xl px-3 pt-2">
                      Messages !
                      <i className="text-primary fa-solid fa-paper-plane ml-2"></i>
                    </h3>
                    <SendMessage header user={userData} />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={handleThemeChange}
              className="rounded-full lg:mx-2 font-bold px-2"
            >
              {theme ? (
                <HiSun className="text-2xl" />
              ) : (
                <HiMoon className="text-2xl" />
              )}
            </button>
            <div className="dropdown">
              <label
                onClick={toggleDrawer}
                tabIndex="0"
                className="mx-4 text-2xl lg:hidden"
              >
                <i className="fa-solid fa-bars"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isLiveNav ? "h-24" : "h-16"}`}></div>
    </>
  );
};

export default Header;

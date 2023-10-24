import React from "react";
import { Link, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import useTitle from "../../Hooks/useTitle";
import Loading from "../Shared/Loading/Loading";
import "./Profile.css";
const Profile = () => {
  useTitle("Profile");
  const [role, roleLoading, userData] = useRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-10">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            userData?.coverPhoto
              ? userData?.coverPhoto
              : "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-opacity-70 hero-overlay"></div>
        <div className="text-left text-warning lg:pt-32 lg:pb-60 px-4 pt-20 pb-52">
          <h1 className="text-left text-5xl font-bold">
            Hello, {userData?.name ? userData?.name : "- - -"}
          </h1>
          <p className="my-5 font-serif text-lg">
            This is your profile page. You can see the progress you've made with
            your work and manage your projects or assigned tasks
          </p>
          <Link
            to={"/profile/update/#profile"}
            className="mt-5 btn btn-primary rounded-md"
          >
            Edit profile
          </Link>
        </div>
      </div>
      <div className="lg:flex justify-between lg:mx-8">
        <div className=" lg:w-4/12 w-11/12 md:w-10/12 mx-auto mt-[-170px] mb-6">
          <div className="card shadow-2xl bg-base-100">
            <Link to={"/profile/update/#profile"}>
              <p className="text-right pr-3 pt-2">
                <i className="fa-solid fa-pen-to-square"></i>
              </p>
            </Link>
            <div>
              <div className="items-center form-control">
                <div>
                  <img
                    src={`${
                      userData?.image
                        ? userData?.image
                        : "https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png"
                    }`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full m-2"
                  />
                </div>
                <h1 className="text-2xl font-bold">
                  {userData?.name ? userData?.name : "- - -"}
                  {userData?.gender === "Male" && (
                    <i className="fa-solid fa-mars text-primary ml-2"></i>
                  )}
                  {userData?.gender === "Female" && (
                    <i className="fa-solid fa-venus text-secondary ml-2"></i>
                  )}
                </h1>
                <h1 className="text-sm opacity-60">
                  {userData?.email ? userData?.email : "- - -"}
                </h1>
                <h1 className="text-lg">
                  {userData?.profession ? userData?.profession : "- - -"}
                </h1>
                <div className="stats form-control">
                  <div className="stat place-items-center">
                    <div className="stat-value">1</div>
                    <div className="stat-desc">Course</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-value text-secondary">20</div>
                    <div className="stat-desc text-secondary">Video</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-value">50</div>
                    <div className="stat-desc">Quiz</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 m-4">
                <button className="btn btn-info btn-xs mb-4">Message</button>
                <button className="btn btn-info btn-xs">Connect</button>
              </div>
            </div>
            <div className="card-body py-2 flex-row">
              <div>
                <h1>
                  <i className="fa-solid fa-clock"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-square-phone"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-location-dot"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-graduation-cap"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-heart text-red-500"></i>
                </h1>
                <h1>
                  <i className="fa-solid text-yellow-600 fa-bookmark"></i>
                </h1>
              </div>
              <div>
                <h1>Joined</h1>
                <h1>Phone</h1>
                <h1>Address</h1>
                <h1>Education</h1>
                <h1>Reputation</h1>
                <h1>Rank</h1>
              </div>
              <div>
                <h1 className="ml-8">
                  {userData?.joinDate ? userData?.joinDate : "- - -"}
                </h1>
                <h1 className="ml-8">
                  {userData?.phone ? userData?.phone : "- - -"}
                </h1>
                <h1 className="ml-8">
                  {userData?.address ? userData?.address : "- - -"}
                </h1>
                <h1 className="ml-8">
                  {userData?.education ? userData?.education : "- - -"}
                </h1>
                <h1 className="ml-8">000</h1>
                <h1 className="ml-8 capitalize">{role ? role : "Newbie"}</h1>
              </div>
            </div>
            <div className="card-body py-2 gap-0">
              <h1>
                <i className="fa-solid fa-user-tie mr-1 text-red-500"></i>About
                Me
              </h1>
              <p>{userData?.bio ? userData?.bio : "- - -"}</p>
            </div>
            <div className="card-body flex-row gap-5 justify-center py-5 text-2xl">
              <a
                href={
                  userData?.facebookLink ? userData?.facebookLink : "- - -"
                }
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={userData?.instaLink ? userData?.instaLink : "- - -"}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={
                  userData?.linkedInLink ? userData?.linkedInLink : "- - -"
                }
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        {/* new form */}
        <div className="card shadow-2xl bg-base-100 mb-6 lg:w-7/12 w-11/12 mx-auto md:w-11/12 lg:mt-[-170px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Profile;

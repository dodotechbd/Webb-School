import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { NavHashLink } from 'react-router-hash-link';
import "./Profile.css";
const Profile = () => {
  const [{ email }] = useAuthState(auth);
  const [isEdit, setIsEdit] = useState(null);
  const [role, roleLoading] = useRole();
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery(["userProfile", email], () =>
    primaryAxios.get(`/user-role?email=${email}`)
  );
  if (roleLoading || isLoading || updating) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-10">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(" + "https://i.ibb.co/tKjB1hK/blurrrry.webp" + ")",
        }}
      >
        <div className="bg-opacity-60"></div>
        <div className="text-left lg:pt-32 lg:pb-60 px-4 pt-20 pb-52">
        <h1 className="text-left text-5xl font-bold">
              Hello, {user?.data?.name ? user?.data?.name : "- - -"}
            </h1>
            <p className="mt-2 font-serif text-lg">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
            <NavHashLink  to={'/profile/update#profile'} className="btn btn-info">
              Edit profile
            </NavHashLink>
        </div>
      </div>
      <div className="lg:flex justify-between lg:mx-8">
        <div className=" lg:w-4/12 w-11/12 md:w-10/12 mx-auto mt-[-170px] mb-6">
          <div className="card shadow-2xl bg-base-100">
            <div>
              <div className="items-center form-control">
                <div>
                  <a href="#">
                    <img src={`${
                  user?.data?.image
                    ? user?.data?.image
                    : "https://i.ibb.co/T1D3tqN/images.png"
                }`} className=" rounded-full m-4" />
                  </a>
                </div>
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
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-4xl font-bold font-serif">
                  {user?.data?.name ? user?.data?.name : "- - -"}
                  </span>
                </label>
                <label className="label">
                  <p className="font-serif">
                    MERN Stack Developer || Full Stack Developer
                  </p>
                </label>
                <label className="label">
                  <span className="label-text font-serif ">
                    Contact Me : {user?.data?.email ? user?.data?.email : "- - -"}
                  </span>
                </label>
                <label>
                  <span className="label-text font-serif ">
                    Location : BANGLADESH
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <a href="#" className="font-bold ">
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* new form */}
        <div className=" mb-6 lg:w-7/12 w-11/12 mx-auto md:w-11/12 lg:mt-[-170px]">
            <Outlet></Outlet>
          </div>
      </div>
    </div>
  );
};

export default Profile;

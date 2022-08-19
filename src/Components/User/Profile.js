import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { NavHashLink } from "react-router-hash-link";
import "./Profile.css";
const Profile = () => {
  const [guser] = useAuthState(auth);
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
  } = useQuery(["userProfile", guser?.email], () =>
    primaryAxios.get(`/user-role?email=${guser?.email}`)
  );
  if (roleLoading || isLoading || updating) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-10">
      <div
        className="hero"
        style={{  
          backgroundImage: `url(${user?.data?.coverPhoto ? user?.data?.coverPhoto : "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/297318585_104370822378911_5462931076151560878_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGtew9Ojn9YHUABv1EpA7EsdpAI8qeMsCF2kAjyp4ywIWw2Njuwb-Au3CBMLOtJ76x-xBM7GaR2Gdy2s1r2M9OW&_nc_ohc=Pk8WLiHh34IAX9CXpsE&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&oh=00_AT_Y1bI4d43hmff2WP5-8RTqIcRlD9N-R2NZuHCzpTqcQA&oe=630111D9"})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-opacity-70 hero-overlay"></div>
        <div className="text-left text-warning lg:pt-32 lg:pb-60 px-4 pt-20 pb-52">
          <h1 className="text-left text-5xl font-bold">
            Hello, {user?.data?.name ? user?.data?.name : "- - -"}
          </h1>
          <p className="my-5 font-serif text-lg">
            This is your profile page. You can see the progress you've made with
            your work and manage your projects or assigned tasks
          </p>
          <NavHashLink
            to={"/profile/update#profile"}
            className="mt-5 btn btn-primary rounded-md"
          >
            Edit profile
          </NavHashLink>
        </div>
      </div>
      <div className="lg:flex justify-between lg:mx-8">
        <div className=" lg:w-4/12 w-11/12 md:w-10/12 mx-auto mt-[-170px] mb-6">
          <div className="card shadow-2xl bg-base-100">
          <NavHashLink
            to={"/profile/update#profile"}
          >
          <p className="text-right pr-3 pt-2">
            <i class="fa-solid fa-pen-to-square"></i>
          </p>
          </NavHashLink>
            <div>
              <div className="items-center form-control">
                <div>
                    <img
                      src={`${
                        user?.data?.image
                          ? user?.data?.image
                          : "https://i.ibb.co/T1D3tqN/images.png"
                      }`}
                      className="w-32 rounded-full m-2"
                    />
                </div>
                <h1 className="text-2xl font-bold">{user?.data?.name ? user?.data?.name : "- - -"}{user?.data?.gender === 'Male' && (<i class="fa-solid fa-mars text-primary ml-2"></i>) }{user?.data?.gender === 'Female' && (<i class="fa-solid fa-venus text-secondary ml-2"></i>) }</h1>
                <h1 className="text-sm opacity-60">{user?.data?.email ? user?.data?.email : "- - -"}</h1>
                <h1 className="text-lg">{user?.data?.profession ? user?.data?.profession : "- - -"}</h1>
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
                <h1><i class="fa-solid fa-square-phone"></i></h1>
                <h1><i class="fa-solid fa-location-dot"></i></h1>
                <h1><i class="fa-solid fa-graduation-cap"></i></h1>
                <h1><i class="fa-solid fa-heart text-red-500"></i></h1>
                <h1><i class="fa-solid text-yellow-600 fa-bookmark"></i></h1>
              </div>
              <div>
              <h1>Contact No.</h1>
              <h1>Address</h1>
              <h1>Education</h1>
              <h1>Reputation</h1>
              <h1>Rank</h1>
              </div>
              <div>
              <h1 className="ml-8">{user?.data?.phone ? user?.data?.phone : "- - -"}</h1>
              <h1 className="ml-8">{user?.data?.address ? user?.data?.address : "- - -"}</h1>
              <h1 className="ml-8">{user?.data?.education ? user?.data?.education : "- - -"}</h1>
              <h1 className="ml-8">2022</h1>
              <h1 className="ml-8">User</h1>
              </div>
            </div>
            <div className="card-body py-2 gap-0">
              <h1><i class="fa-solid fa-user-tie mr-1 text-red-500"></i>About Me</h1>
              <p>{user?.data?.bio ? user?.data?.bio : "- - -"}</p>
            </div>
            <div className="card-body flex-row gap-5 justify-center py-5 text-2xl">
              <a href={user?.data?.facebookLink ? user?.data?.facebookLink : "- - -"} target='_blank'><i class="fa-brands fa-facebook"></i></a>
              <a href={user?.data?.instaLink ? user?.data?.instaLink : "- - -"} target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a href={user?.data?.linkedInLink ? user?.data?.linkedInLink : "- - -"} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
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

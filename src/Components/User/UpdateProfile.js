import React from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div id="profile" className="card shadow-2xl bg-base-100">
      <div className="grid gap-x-7 grid-cols-2 ">
        <div>
          <h2 className="text-xl p-5 m-3 text-bold">My Account</h2>
        </div>
        <div className="text-end m-5">
          <Link to={"/profile"} className="btn btn-primary btn-sm mt-2 ">
            Profile
          </Link>
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-15px]">User Information</h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Stephen Brown"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profession</span>
          </label>
          <input
            type="text"
            placeholder="Student"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input
            type="text"
            placeholder="www.profile.photo.com"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Photo</span>
          </label>
          <input
            type="url"
            placeholder="www.cover.photo.com"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select class="select select-bordered w-full font-thin">
            <option disabled selected>
              Your Gender?
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Bachelor of Business Administration"
            className="input input-bordered"
          />
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-20px]">
        Contact Information
      </h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="92, Lawrence View Streets"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="tel"
            placeholder="123-456-789"
            className="input input-bordered"
          />
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-20px]">
        Social Links
      </h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3 mt-[-50px]">
        
      <div className="form-control">
          <label className="label">
            <span className="label-text">Facebook</span>
          </label>
          <input
            type="url"
            placeholder="www.facebook.com/id"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instagram</span>
          </label>
          <input
            type="url"
            placeholder="www.instagram.com/id"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linked In</span>
          </label>
          <input
            type="url"
            placeholder="www.linkedin.com/id"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="form-control m-5 mt-[-25px]">
        <label className="label">
          <span className="label-text">About Me</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Tell us about yourself"
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end mx-8 mb-5">
      <button className="btn btn-primary btn-md">Save</button>
      <button className="btn btn-outline btn-md">Cancel</button>
      </div>
    </div>
  );
};

export default UpdateProfile;

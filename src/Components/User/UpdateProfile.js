import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const UpdateProfile = () => {
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
  const onSubmit = async (updatedInfo) => {
    await updateProfile({
      displayName: updatedInfo?.name,
      photoURL: updatedInfo?.image,
    });
    (async () => {
      const { data } = await primaryAxios.put(
        `/update-user?qEmail=${email}`,
        updatedInfo
      );
      if (data) {
        toast.success("User Updated Successfully");
        refetch();
      }
    })();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="profile"
      className="card shadow-2xl bg-base-100"
    >
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
            {...register("name", {
              minLength: {
                value: 8,
                message: "Minimum Eight Characters",
              },
            })}
            defaultValue={user?.data?.name && user?.data?.name}
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
            {...register("profession")}
            defaultValue={user?.data?.profession && user?.data?.profession}
            placeholder="Student"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input
            type="url"
            {...register("image")}
            defaultValue={user?.data?.image && user?.data?.image}
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
            {...register("coverPhoto")}
            defaultValue={user?.data?.coverPhoto && user?.data?.coverPhoto}
            placeholder="www.cover.photo.com"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            {...register("gender")}
            className="select select-bordered w-full font-thin"
            defaultValue={user?.data?.gender ? user?.data?.gender : "Male"}
            placeholder="Gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            {...register("education")}
            defaultValue={user?.data?.education && user?.data?.education}
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
            {...register("address")}
            defaultValue={user?.data?.address && user?.data?.address}
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
            {...register("phone")}
            defaultValue={user?.data?.phone && user?.data?.phone}
            type="tel"
            placeholder="123-456-789"
            className="input input-bordered"
          />
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-20px]">Social Links</h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3 mt-[-50px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Facebook</span>
          </label>
          <input
            {...register("facebookLink")}
            defaultValue={user?.data?.facebookLink && user?.data?.facebookLink}
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
            {...register("instaLink")}
            defaultValue={user?.data?.instaLink && user?.data?.instaLink}
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
            {...register("linkedInLink")}
            defaultValue={user?.data?.linkedInLink && user?.data?.linkedInLink}
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
        {...register("bio")}
        defaultValue={user?.data?.bio && user?.data?.bio}
          className="textarea textarea-bordered"
          placeholder="Tell us about yourself"
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end mx-8 mb-5">
        <button type="submit" className="btn btn-primary btn-md">
          Save Changes
        </button>
        <button className="btn btn-outline btn-md">Cancel</button>
      </div>
    </form>
  );
};

export default UpdateProfile;

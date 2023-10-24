import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import useRole from "../../Hooks/useRole";
import auth from "../../firebase.init";
import { successToast } from "../../utils/utils";
import Loading from "../Shared/Loading/Loading";

const UpdateProfile = () => {
  const [role, roleLoading, userData, fetchRole] = useRole();
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (roleLoading || updating) {
    return <Loading></Loading>;
  }
  const onSubmit = async (updatedInfo) => {
    await updateProfile({
      displayName: updatedInfo?.name,
      photoURL: updatedInfo?.image,
    });
    (async () => {
      const { data } = await primaryAxios.put(
        `/update-user?qEmail=${userData?.email}`,
        updatedInfo
      );
      if (data) {
        successToast("User Updated Successfully");
        fetchRole();
        navigate("/profile");
      }
    })();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="profile">
      <div className="justify-end card-actions mx-4 mt-2">
        <Link to={"/profile"} className="btn btn-primary btn-sm mt-2 ">
          Profile
        </Link>
      </div>
      <h1 className="text-xl font-semibold mx-5">User Information</h1>
      <div>
        <div
          style={{
            // eslint-disable-next-line no-undef
            backgroundImage: `url(${
              userData?.coverPhoto || "https://placeimg.com/1000/800/arch"
            })`,
          }}
          className="m-8 mb-0 relative rounded-xl"
        >
          <div className="relative z-30 flex items-center gap-6 pt-8 pb-2 pl-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={`${
                    userData?.image
                      ? userData?.image
                      : "https://placeimg.com/192/192/people"
                  }`}
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl uppercase font-sub">{userData?.name}</h1>
              <p className="text-sm font-sub">{userData?.email}</p>
            </div>
          </div>
          <div className="absolute z-0 h-full w-full bg-base-100 bg-opacity-60 rounded-xl top-0 left-0" />
        </div>
      </div>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2">
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
            defaultValue={userData?.name && userData?.name}
            placeholder="Stephen Brown"
            required
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
            defaultValue={userData?.profession && userData?.profession}
            placeholder="Student"
            required
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
            defaultValue={userData?.image && userData?.image}
            placeholder="www.profile.photo.com"
            required
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
            defaultValue={userData?.coverPhoto && userData?.coverPhoto}
            placeholder="www.cover.photo.com"
            required
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
            defaultValue={userData?.gender ? userData?.gender : "Male"}
            placeholder="Gender"
            required
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
            defaultValue={userData?.education && userData?.education}
            type="text"
            placeholder="Bachelor of Business Administration"
            required
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
            defaultValue={userData?.address && userData?.address}
            type="text"
            placeholder="92, Lawrence View Streets"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            {...register("phone")}
            defaultValue={userData?.phone && userData?.phone}
            type="tel"
            placeholder="123-456-789"
            required
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
            defaultValue={userData?.facebookLink && userData?.facebookLink}
            type="url"
            placeholder="www.facebook.com/id"
            required
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
            defaultValue={userData?.instaLink && userData?.instaLink}
            placeholder="www.instagram.com/id"
            required
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
            defaultValue={userData?.linkedInLink && userData?.linkedInLink}
            placeholder="www.linkedin.com/id"
            required
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
          defaultValue={userData?.bio && userData?.bio}
          className="textarea textarea-bordered"
          placeholder="Tell us about yourself"
          required
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

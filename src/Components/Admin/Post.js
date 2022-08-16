import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Post = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newReview = {
      ...data,
      // email: user?.email,
      // name: user?.displayName,
      // image: user?.photoURL,
    };
    (async () => {
      const { data } = await axios.post(`https://rocky-escarpment-87440.herokuapp.com/video`, newReview);
      if (data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        await Toast.fire({
          icon: "success",
          title: "Success",
        });
        reset();
      }
    })();
  };

  return (
    <div>
      <div className="hero bg-base-100">
        <div className="">
          <div className="text-center my-10">
            <h1 className="text-3xl font-bold">
              Post New Course{" "}
              <i className="fa-solid fa-folder-plus text-primary"></i>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    {...register("instructor")}
                    className="select select-neutral bg-base-300 w-full font-thin max-w-xs"
                  >
                    <option>Language Learning</option>
                    <option>Job Requirments</option>
                    <option>Admission Preparation</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Content is required",
                      },
                      maxLength: {
                        value: 180,
                        message: `Maximum 180 Characters`,
                      },
                    })}
                    placeholder="name"
                    className="input input-neutral bg-base-300"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Link</span>
                  </label>
                  <input
                    type="text"
                    {...register("img", {
                      required: {
                        value: true,
                        message: "Content is required",
                      },
                    })}
                    placeholder="Link"
                    className="input input-neutral bg-base-300"
                  />
                </div>
                {errors?.name && (
                  <p className="text-error">{errors.name.message}</p>
                )}
                {errors?.img && (
                  <p className="text-error">{errors.img.message}</p>
                )}
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

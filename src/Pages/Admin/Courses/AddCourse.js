import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
import CustomDraft from "../../../Components/CustomDraft";
import Instructor from "../../../Components/Instructors";
import Lessons from "./Lessons/Lessons";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const imageUrl = watch("img");
  const [draftHtml, setDraftHtml] = useState();
  const [instructors, setInstructors] = useState([]);
  const [lessons, setLessons] = useState([]);

  const onSubmit = (data) => {
    const rvw = data?.file?.find((s) => s.details);
    const newReview = {
      ...data,
      about: draftHtml,
      lessons,
      instructors
      // email: user?.email,
      // name: user?.displayName,
      // image: user?.photoURL,
    };
    console.log(newReview);
    // (async () => {
    //   const { data } = await primaryAxios.post(`/language`, newReview);
    //   if (data.acknowledged) {
    //     swal("The course has been successfully posted", {
    //       icon: "success",
    //       className: "rounded-xl",
    //     });

    //     reset();
    //   }
    // })();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center px-6 py-2 mb-4  border-b border-neutral">
          <div className="flex gap-3 items-center">
            <h1 className="text-2xl">
              Create a new course
              <i className="fa-solid fa-folder-plus text-primary ml-2"></i>
            </h1>
            {imageUrl && <img src={imageUrl} alt="" className="h-16 rounded" />}
          </div>
          <button className="btn btn-primary btn-wide font-normal text-white">
            Create
          </button>
        </div>
        <div className="mx-6 space-y-4">
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Course Name</span>
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
                placeholder="Enter course name..."
                className="input input-bordered input-neutral bg-base-200"
              />
            </div>
            <div className="form-control w-6/12">
              <label className="label">
                <span className="label-text">Course Category</span>
              </label>
              <select
                className="select font-normal select-neutral select-bordered bg-base-200 w-full"
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is required",
                  },
                })}
              >
                <option disabled selected>
                  Pick course category
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Course Poster URL</span>
              </label>
              <input
                type="text"
                {...register("img", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="Enter poster URL (https://example.com/poster.jpg)"
                className="input input-bordered input-neutral bg-base-200"
              />
            </div>
            <div className="form-control w-6/12">
              <label className="label">
                <span className="label-text">Course Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Content is required",
                    },
                  })}
                  placeholder="Enter course price"
                  className="input input-bordered input-neutral bg-base-200 w-full"
                />
                <span>BDT</span>
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Description</span>
            </label>
            <textarea
              placeholder="Write course description here..."
              className="textarea bg-base-200 h-24 textarea-bordered"
            ></textarea>
          </div>
        </div>
      </form>
      <div className="mx-6 space-y-4 mt-4">
        <div>
          <label className="label">
            <span className="label-text">About Course</span>
          </label>
          <CustomDraft setDraftHtml={setDraftHtml} />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Instructors</span>
          </label>
          <Instructor
            instructors={instructors}
            setInstructors={setInstructors}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Lessons</span>
          </label>
          <Lessons lessons={lessons} setLessons={setLessons} />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

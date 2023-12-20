import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
import primaryAxios from "../../../Api/primaryAxios";
import CustomDraft from "../../../Components/CustomDraft";
import Instructor from "../../../Components/Instructors";
import { actionModal, errorToast, successToast } from "../../../utils/utils";
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
  const [draft, setDraft] = useState(false);
  const resetAll = () => {
    setDraftHtml(undefined);
    setInstructors([]);
    setLessons([]);
    reset();
  };
  const onSubmit = (data) => {
    const courseData = {
      ...data,
      about: draftHtml,
      draft,
      lessons,
      instructors,
    };
    if (!instructors.length) {
      return errorToast("Please add minimum one instructor");
    }
    if (!lessons.length) {
      return errorToast("Please add lessons.");
    }
    (async () => {
      const { data } = await primaryAxios.post(`/courses`, courseData);
      if (data.acknowledged) {
        successToast("The course has been successfully posted");
        resetAll();
      }
    })();
  };
  return (
    <div className="relative">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="poster"
          className="absolute w-full object-cover object-center h-full opacity-10"
        />
      )}
      <div className="relative z-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center px-6 py-2 mb-4  border-b border-neutral">
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl">
                Add a new course
                <i className="fa-solid fa-folder-plus text-primary ml-2"></i>
              </h1>
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary btn-wide font-normal text-white">
                {draft ? "Save" : "Publish"}
              </button>
              <div className="flex justify-between mx-2">
                <button type="button" className="text-xs font-medium text-primary hover:underline" onClick={() => actionModal(resetAll)}>Reset</button>
                <label className="label cursor-pointer w-fit">
                  <input
                    type="checkbox"
                    checked={draft}
                    onChange={() => setDraft(!draft)}
                    className="checkbox checkbox-xs checkbox-primary mr-1"
                  />
                  <span className="label-text text-xs">Save to draft only</span>
                </label>
              </div>
            </div>
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
                  className={`input input-bordered input-neutral bg-base-200 ${
                    errors?.name && "input-error"
                  }`}
                />
                {errors?.name && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {errors?.name?.message}
                    </span>
                  </div>
                )}
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
                  <option>Language</option>
                  <option>Job</option>
                  <option>Admission</option>
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
                  placeholder="Enter poster URL"
                  className={`input input-bordered input-neutral bg-base-200 ${
                    errors?.img && "input-error"
                  }`}
                />
                {errors?.img && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {errors?.img?.message}
                    </span>
                  </div>
                )}
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
                    className={`input input-bordered input-neutral bg-base-200 ${
                      errors?.price && "input-error"
                    }`}
                  />
                  <span>BDT</span>
                </label>
                {errors?.price && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {errors?.price?.message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                plac
                placeholder="Write course description here..."
                className={`textarea bg-base-200 h-24 textarea-bordered ${
                  errors?.description && "textarea-error"
                }`}
              ></textarea>
              {errors?.description && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors?.description?.message}
                  </span>
                </div>
              )}
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
    </div>
  );
};

export default AddCourse;

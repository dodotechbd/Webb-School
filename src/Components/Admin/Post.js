import React from "react";

const Post = () => {
  return (
    <div>
      <div className="hero bg-base-100">
        <div className="">
          <div className="text-center my-10">
            <h1 className="text-3xl font-bold">Post New Course <i className="fa-solid fa-folder-plus text-primary"></i></h1>
          </div>
          <div className="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-neutral bg-base-300 w-full font-thin max-w-xs">
                  <option>
                    Language Learning
                  </option>
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
                  placeholder="Link"
                  className="input input-neutral bg-base-300"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from "react";

const Post = () => {
  return (
    <div>
      <div class="hero bg-base-100">
        <div class="">
          <div class="text-center my-10">
            <h1 class="text-3xl font-bold">Post New Course <i class="fa-solid fa-folder-plus text-primary"></i></h1>
          </div>
          <div class="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-slate-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category</span>
                </label>
                <select class="select select-bordered w-full max-w-xs">
                  <option>
                    Language Learning
                  </option>
                  <option>Job Requirments</option>
                  <option>Admission Preparation</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Link"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary text-white">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
const Live = () => {
  return (
    <div>
      <div class="hero bg-base-100">
        <div class="">
          <div class="text-center my-10">
            <h1 class="text-3xl font-bold">Post Live Class <i class="fa-solid fa-video text-error"></i></h1>
          </div>
          <div class="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-neutral bg-base-300"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Link"
                  class="input input-neutral bg-base-300"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-error text-white">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Live;
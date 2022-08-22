import React from "react";

const AddReview = () => {
  return (
    <div class="card bg-base-100">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-ghost text-primary btn-circle absolute right-2 top-2"
      >
        ✕
      </label>
      <figure class="px-10 pt-10">
        <img
          src="https://raw.githubusercontent.com/MShafiMS/admission/69bf271511e1e926ff0e90113c90075e937fd205/output-onlinegiftools.gif"
          alt="Shoes"
          class="rounded-full w-28 bg-base-300"
        />
      </figure>
      <div class="card-body items-center text-center p-4">
        <h2 class="text-xl">Rate this course</h2>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
        <textarea
          class="textarea my-3 textarea-primary w-full max-w-xs"
          placeholder="Write about this course"
        ></textarea>
        <div class="card-actions">
          <button class="px-8 py-2 rounded-md btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

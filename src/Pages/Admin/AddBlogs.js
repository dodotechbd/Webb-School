import React from "react";
import { useForm } from "react-hook-form";
import primaryAxios from "../../Api/primaryAxios";
import { successToast } from "../../utils/utils";

const AddBlogs = (e) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newReview = {
      ...data,
    };
    (async () => {
      const { data } = await primaryAxios.post(`/blogs`, newReview);
      if (data.acknowledged) {
        successToast("The blog has been successfully posted")
        reset();
      }
    })();
  };

  return (
    // blogs sites here
    <div>
      <div className="card lg:w-3/5 md:w-3/4 mx-auto w-80 bg-base-300 shadow-xl lg:m-10 m-5">
        <div className="card-body">
          <h2 className="card-title text-2xl text-center my-10">
            Add Your Blog
          </h2>
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="blogs title"
                  className="input input-bordered w-full"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "blogs Is Required",
                    },
                  })}
                />{" "}
                <br />
                <input
                  placeholder="Img URL"
                  className="input input-bordered w-full  mt-3"
                  type="text"
                  {...register("img")}
                />
                <br />
                <textarea
                  type="TextField"
                  placeholder="blog Descriptions"
                  className="input input-bordered w-full mt-3"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "TextField Is Required",
                    },
                  })}
                />{" "}
                <br />
                <input type="submit" className="btn w-full mt-3 bg-blue-600 " />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;

/* 
63a870a97846a236b345e751,
63a870a97846a236b345e752,
63a870a97846a236b345e753,
63a870a97846a236b345e754,
63a870a97846a236b345e755,
63a870a97846a236b345e756,
63a870a97846a236b345e757,
63a870a97846a236b345e758,
630b465fb1d3b4b5d629777b,
630b465fb1d3b4b5d629777a,
630b465fb1d3b4b5d629777c,
630b465fb1d3b4b5d629777d,
630b465fb1d3b4b5d629777e,
630b465fb1d3b4b5d629777f,
630b465fb1d3b4b5d6297780,
630b465fb1d3b4b5d6297781,
630b158ab1d3b4b5d6e000c1,
630b158ab1d3b4b5d6e000c2,
630b158ab1d3b4b5d6e000c3,
630b158ab1d3b4b5d6e000c4,
630b158ab1d3b4b5d6e000c5
*/

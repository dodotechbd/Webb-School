import React from "react";
const JobCourse = () => {
  return (
    <div className="mb-16">
      <h1 className="text-center mt-10 font-bold text-3xl">
        Job Exam Preparation
      </h1>
      <h2 className="text-xl text-center text-gray-500">
        Which job are you preparing for?
      </h2>

      <div id="job" className="my-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-16 px-12  bg-[#F7F8FA]">
          <a href="#" class="card card-compact w-72 h-72 bg-base-100 hover:shadow-xl border border-2  transform transition duration-500 hover:scale-110">
            <figure>
              <img
                src="https://i.postimg.cc/8zh9KJp3/Bank-Job.png"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-2xl text-center font-semibold">jobs</h2>

              <div class="card-actions justify-center">
                <div className="text-center mt-4 font-bold text-xl text-primary border-t-2 w-full border-gray pt-2">See Details</div>
              </div>
            </div>
          </a>
          <a href="#" class="card card-compact w-72 h-72 bg-base-100 hover:shadow-xl border border-2  transform transition duration-500 hover:scale-110">
            <figure>
              <img
                src="https://i.postimg.cc/vZfT0z6s/Bank-Job-3.png"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-2xl text-center font-semibold">jobs</h2>

              <div class="card-actions justify-center">
                <div className="text-center mt-4 font-bold text-xl text-primary border-t-2 w-full border-gray pt-2">See Details</div>
              </div>
            </div>
          </a>
          <a href="#" class="card card-compact w-72 h-72 bg-base-100 hover:shadow-xl border border-2  transform transition duration-500 hover:scale-110">
            <figure>
              <img
                src="https://i.postimg.cc/tJnpYq3j/Bank-Job-4.png"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-2xl text-center font-semibold">jobs</h2>

              <div class="card-actions justify-center">
                <div className="text-center mt-4 font-bold text-xl text-primary border-t-2 w-full border-gray pt-2">See Details</div>
              </div>
            </div>
          </a>
          <a href="#" class="card card-compact w-72 h-72 bg-base-100 hover:shadow-xl border border-2  transform transition duration-500 hover:scale-110">
            <figure>
              <img
                src="https://i.postimg.cc/P5WfW5Bf/job-2.png"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-2xl text-center font-semibold">Jobs</h2>

              <div class="card-actions justify-center">
                <div className="text-center mt-4 font-bold text-xl text-primary border-t-2 w-full border-gray pt-2">See Details</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCourse;
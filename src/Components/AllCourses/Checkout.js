import React from "react";
import { Link, useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";
import bkash from "../../Assets/icon/BKash-Logo.wine.svg";
import stripe from "../../Assets/icon/Stripe_(company)-Logo.wine.svg";

const Checkout = () => {
  const { uname } = useParams();
  const [language] = useLanguage([]);
  const [jobcourses] = useJobCourses([]);
  const [admission] = useAdmission([]);

  const courseData =
    admission.find((allcard) => allcard.uname === uname) ||
    language.find((allcard) => allcard.uname === uname) ||
    jobcourses.find((allcard) => allcard.uname === uname);
  return (
    <div class="hero bg-base-200 py-8">
      <div class="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div class="text-center lg:text-left mx-auto">
          <p className="text-xl mb-4 font-bold">
            The course you are purchasing
          </p>
          <div className="lg:flex gap-5">
            <img
              src={courseData?.img}
              className="h-44 w-80 rounded-lg"
              alt=""
            />
            <div class="text-xl text-left">
              <p>{courseData?.name}</p>
              <p className="font-bold mt-4 text-2xl">৳ {courseData?.price}</p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full mt-8 border border-neutral bg-base-100">
            <div class="card-body">
              <h1 className="text-2xl font-bold text-warning">Billing Info</h1>
              <div className="lg:flex gap-8">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Olive Yew"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1 Creek Ave.
                    Orange, NJ 07050"
                    class="input input-bordered"
                  />
                </div>
              </div>
              <div className="lg:flex gap-8">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="123-456-789"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="info@site.com"
                  class="input input-bordered"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto mt-4 border border-neutral bg-base-100">
          <div class="card-body">
            <h3 class="mb-5 text-xl font-bold text-center">
              Select payment method
            </h3>
            <ul class="gap-6 w-full">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  class="hidden peer"
                  required=""
                />
                <label
                  for="hosting-small"
                  class="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-300 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 hover:border-primary"
                >
                  {/* <img src={bkash} className='w-16 h-12' alt="" /> */}

                  <div class="block">
                    <div class="w-full text-xl font-semibold">bKash</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  value="hosting-big"
                  class="hidden peer"
                />
                <label
                  for="hosting-big"
                  class="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-300 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 hover:border-primary mt-5"
                >
                  {/* <img src={stripe} className='w-16 h-12 mr-3' alt="" /> */}
                  <div class="block">
                    <div class="w-full text-xl font-semibold">stripe</div>
                  </div>
                </label>
              </li>
            </ul>
            <div className=" text-center">
              <p className="text-lg my-4">
                <i class="fa-solid fa-square-check text-green-500"></i> Fully
                secure payment guarantee
              </p>
              <button className="btn btn-wide hover:bg-secondary bg-[#0284C5] text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

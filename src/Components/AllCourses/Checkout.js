import React from "react";
import { Link, useParams } from "react-router-dom";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";
import bkash from '../../Assets/icon/BKash-Icon-Logo.wine.png'
import card from '../../Assets/icon/debit-card.png'

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
    <div class="hero bg-base-200 px-8 py-8">
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
        </div>
        <div class="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-full mt-4 shadow-2xl bg-base-100">
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
                  class="inline-flex justify-center items-center p-5 w-full rounded-lg border border-neutral cursor-pointer peer-checked:text-info peer-checked:border-info hover:text-primary hover:bg-base-300 hover:border-primary"
                >
                <img src={bkash} className='w-16 h-12' alt="" />
                  <div class="block">
                    <div class="w-full text-lg font-semibold">bKash</div>
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
                  class="inline-flex justify-center items-center p-5 w-full rounded-lg border border-neutral cursor-pointer peer-checked:text-info peer-checked:border-info hover:text-primary hover:bg-base-300 hover:border-primary mt-5"
                >
                <img src={card} className='w-16 h-12 mr-3' alt="" />
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Credit & Debit Card</div>
                  </div>
                </label>
              </li>
            </ul>
            <div className=" text-center">
                <p className="text-lg my-2"><i class="fa-solid fa-square-check text-green-400"></i> Fully secure payment guarantee</p>
                <button className="btn btn-wide btn-info text-white">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

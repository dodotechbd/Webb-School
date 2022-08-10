import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Checkout = () => {
  const { uname } = useParams();
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then(
      (res) => res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then(
      (res) => res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseData =
    admission?.find((allcard) => allcard.uname === uname) ||
    language?.find((allcard) => allcard.uname === uname) ||
    job?.find((allcard) => allcard.uname === uname);
  return (
    <div className="hero bg-base-200 py-8">
      <div className="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div className="text-center lg:text-left mx-auto">
          <p className="text-xl mb-4 font-bold">
            The course you are purchasing
          </p>
          <div className="lg:flex gap-5">
            <img
              src={courseData?.img}
              className="h-44 w-80 rounded-lg"
              alt=""
            />
            <div className="text-xl text-left">
              <p>{courseData?.name}</p>
              <p className="font-bold mt-4 text-2xl">৳ {courseData?.price}</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full mt-8 border border-neutral bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl font-bold text-warning">Billing Info</h1>
              <div className="lg:flex gap-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Olive Yew"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1 Creek Ave.
                    Orange, NJ 07050"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="lg:flex gap-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="123-456-789"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto mt-4 border border-neutral bg-base-100">
          <div className="card-body">
            <h3 className="mb-5 text-xl font-bold text-center">
              Select payment method
            </h3>
            <ul className="gap-6 w-full">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required=""
                />
                <label
                  for="hosting-small"
                  className="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-300 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 hover:border-primary"
                >
                  {/* <img src={bkash} className='w-16 h-12' alt="" /> */}

                  <div className="block">
                    <div className="w-full text-xl font-semibold">bKash</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  value="hosting-big"
                  className="hidden peer"
                />
                <label
                  for="hosting-big"
                  className="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-300 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 hover:border-primary mt-5"
                >
                  {/* <img src={stripe} className='w-16 h-12 mr-3' alt="" /> */}
                  <div className="block">
                    <div className="w-full text-xl font-semibold">stripe</div>
                  </div>
                </label>
              </li>
            </ul>
            <div className=" text-center">
              <p className="text-lg my-4">
                <i className="fa-solid fa-square-check text-green-500"></i> Fully
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

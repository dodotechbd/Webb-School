import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import { useForm } from "react-hook-form";
import axios from "axios";
import primaryAxios from "../../Api/primaryAxios";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  const [role, roleLoading, userName] = useRole();
  const { uname } = useParams();
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
      res.json()
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
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const placedOrder = {
      ...data,
      userName: user?.displayName,
      userEmail: user?.email,
      productName: courseData?.name,
      productId: courseData?._id,
      price: courseData?.price,
      status: "Pending",
      productImage: courseData?.img,
      uname: courseData?.uname,
    };
    (async () => {
      if(data?.method === 'stripe'){
        const { data } = await primaryAxios.post(
          `/order?email=${user?.email}`,
          placedOrder
        );
        if(data.success){
          navigate(`/checkout/stripe/${courseData?.uname}`);
          reset();
        }
      }
      if(data?.method === 'bkash'){
        const { data } = await primaryAxios.post(
          `/order?email=${user?.email}`,
          placedOrder
        );
        if(data.success){
          navigate(`/checkout/bkash/${courseData?.uname}`);
          reset();
        }
      }
    })();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hero bg-base-100 py-8">
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
          <div className="card flex-shrink-0 w-full mt-8 border border-neutral bg-base-300">
            <div className="card-body">
              <h1 className="text-2xl font-bold text-warning">Billing Info</h1>
              <div className="lg:flex gap-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    value={userName}
                    disabled
                    className="input input-bordered bg-base-200"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    value={user?.email}
                    disabled
                    placeholder="info@site.com"
                    className="input input-bordered bg-base-200"
                  />
                </div>
              </div>
              <div className="lg:flex gap-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="123-456-789"
                    className="input input-bordered bg-base-200"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="1 Creek Ave.
                    Orange, NJ 07050"
                    className="input input-bordered bg-base-200"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto    mt-4 border border-neutral bg-base-300">
          <div className="card-body">
            <h3 className="mb-5 text-xl font-bold text-center">
              Select payment method
            </h3>
            <ul className="gap-6 w-full">
              <li>
                <input
                    {...register('method', { required: true })}
                    type="radio"
                    name="method"
                    value="bkash"
                    className="hidden peer"
                    id="bkash"
                    required      
                  />
                <label
                  for="bkash"
                  className="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-100 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 bg-base-200 hover:border-primary"
                >
                  {/* <img src={bkash} className='w-16 h-12' alt="" /> */}

                  <div className="block">
                    <div className="w-full text-xl font-semibold">bKash</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                    {...register('method', { required: true })}
                    type="radio"
                    name="method"
                    value="stripe"
                    className="hidden peer"
                    id="stripe"
                    required      
                  />
                <label
                  for="stripe"
                  className="inline-flex justify-center items-center p-5 w-full rounded-lg border-2 border-neutral cursor-pointer peer-checked:text-[#0284C5] peer-checked:bg-base-100 peer-checked:border-[#0284C5] hover:text-primary hover:bg-base-300 bg-base-200 hover:border-primary mt-5"
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
                <i className="fa-solid fa-circle-check text-[#0284C5]"></i>{" "}
                Fully secure payment guarantee
              </p>
              <button type="submit" className="btn btn-wide hover:bg-secondary bg-[#0284C5] text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;

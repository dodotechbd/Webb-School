import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "./StripeForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Stripe = () => {
  const stripePromise = loadStripe(
    "pk_test_51LWltUCPn2JHPi081EFxPygcOJOvtghmISJBIxeobWbHIH1BT7TgPBEQoF6YZ75OqiFMJVXZEbfBGwefP5I2InKr005L3Un3xL"
  );
  
  const [user] = useAuthState(auth);
  const { uname } = useParams();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user?.email], () =>
    primaryAxios.get(`/order?email=${user?.email}`)
  );
  const courseData = orders?.data?.find((allcard) => allcard.uname === uname);
  console.log(courseData);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="hero bg-base-300">
      <div class="hero-content flex-col">
      <h1 className="text-4xl font-bold text-warning border-b-2 pb-2 border-warning mt-4">PAY TO PROCEED <i class="fa-solid fa-credit-card"></i></h1>
      <div class="card flex-shrink-0">
          <div class="card-body">
            <div class="form-control">
              <label className="input-group input-group-lg">
                <span className='w-32 bg-base-100'>Name</span>
              <input
                type="text"
                value={courseData?.userName}
                class="input input-bordered input-lg w-full"
                disabled
              />
              </label>
            </div>
            <div class="form-control">
              <label className="input-group input-group-lg">
                <span className='w-32 bg-base-100'>Email</span>
              <input
                type="text"
                value={courseData?.userEmail}
                class="input input-bordered input-lg w-full"
                disabled
              />
              </label>
            </div>
            <div class="form-control">
              <label className="input-group input-group-lg">
                <span className='w-32 bg-base-100'>Course</span>
              <input
                type="text"
                value={courseData?.productName}
                class="input input-bordered input-lg w-full"
                disabled
              />
              </label>
            </div>
            <div class="form-control">
              <label className="input-group input-group-lg">
                <span className='w-32 bg-base-100'>Price</span>
              <input
                type="text"
                value={courseData?.price}
                class="input input-bordered input-lg w-full"
                disabled
              />
              </label>
            </div>
            <div class="form-control">
              <label className="input-group input-group-lg">
                <span className='w-32 bg-base-100'>Address</span>
              <input
                type="text"
                value={courseData?.address}
                class="input input-bordered input-lg w-full"
                disabled
              />
              </label>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-11/12 shadow-2xl bg-base-100">
        <Elements stripe={stripePromise}>
          <StripeForm
            totalAmount={courseData?.price}
            orderInfo={courseData}
          ></StripeForm>
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Stripe;

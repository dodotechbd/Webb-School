import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "./StripeForm";

const Stripe = () => {
  const stripePromise = loadStripe(
    "pk_test_51LWltUCPn2JHPi081EFxPygcOJOvtghmISJBIxeobWbHIH1BT7TgPBEQoF6YZ75OqiFMJVXZEbfBGwefP5I2InKr005L3Un3xL"
  );
  const { uname } = useParams();
  const { data, isLoading } = useQuery(["orders", uname], () =>
    primaryAxios.get(`/order/${uname}`)
  );

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
                value={data.data.userName}
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
                value={data.data.userEmail}
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
                value={data.data.productName}
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
                value={data.data.price}
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
                value={data.data.address}
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
            totalAmount={data.data.price}
            orderInfo={data.data}
          ></StripeForm>
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Stripe;

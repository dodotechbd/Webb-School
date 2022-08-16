import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import primaryAxios from "../../Api/primaryAxios";
import swal from "sweetalert";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const StripeForm = ({ totalAmount, orderInfo }) => {
  const [user, loading] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const { uname } = useParams();
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    (async () => {
      const { data } = await primaryAxios.post("/create-payment-intent", {
        totalAmount: totalAmount,
      });
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })();
  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPaying(true);


    if (elements == null) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error?.message);
    } else {
      setPaymentError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: orderInfo.userName,
            email: orderInfo.userEmail,
          },
        },
      });

    if (intentError) {
      setPaymentError(intentError?.message);
      setIsPaying(false);
    } else {
      setPaymentError("");
      if (paymentIntent.id) {
        swal(
          "Payment Successful",
          `Your Transaction Id Is ${paymentIntent.id}`,
          "success",
          {
            className: "rounded-3xl",
          }
        ).then((value) => {
          navigate("/orders");
        });
      }
      const payment = {
        orderId: orderInfo._id,
        transactionId: paymentIntent.id,
      };

    const placedOrder = {
        userName: user?.displayName,
        userEmail: user?.email,
        order: "paid",
        course: courseData,
      };
      const { data } = await primaryAxios.put(`/order`, payment) && primaryAxios.post(`/mycourse?email=${user?.email}`, placedOrder);
      
      if (data) {
        setIsPaying(false);
      }
    }
  };
  return (
    <form className="w-full p-7 rounded-lg" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {paymentError && (
        <p className="mt-5 -mb-5 text-red-600 text-center">{paymentError}</p>
      )}
      <div className="flex justify-between mt-6 items-center">
        <span className="flex-1 flex items-center">
          <span className="text-sm lg:text-md font-semibold uppercase ">
            Total Amount :
          </span>
          <span className="text-lg lg:text-2xl font-bold text-primary">
            ${totalAmount}
          </span>
        </span>
        <button
          className={`btn btn-md w-1/2 bg-primary text-white uppercase py-1.5 rounded-2xl ${
            isPaying && "loading"
          }`}
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default StripeForm;

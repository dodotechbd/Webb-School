import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import primaryAxios from "../../Api/primaryAxios";
import Stripe from "../Payments/Stripe";

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

  return (
    <div className="hero bg-base-100 py-8">
      <div className="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div className="text-center w-11/12 lg:w-7/12 lg:text-left mx-auto">
          <p className="text-2xl mb-4 font-bold">
            The course you are purchasing:
          </p>
          <div className="p-8  bg-base-300 rounded-2xl">
            <div className="lg:flex">
            <img
              src={courseData?.img}
              className="lg:h-80 w-full rounded-lg"
              alt=""
            />
            <div className="card-body lg:block hidden w-full">
              <div className=" gap-3">
                <p>
                  <i className="fa-solid fa-video pr-2 text-[#efad1e]"></i>120H
                  Videos
                </p>
                <p>
                  <i className="fa-solid fa-users pr-2 text-[#efad1e]"></i>758
                  Students
                </p>
                <p>
                  <i className="fa-solid fa-headset pr-2 text-[#efad1e]"></i>Mentor
                  Support
                </p>
                <p>
                  <i className="fa-solid fa-circle-question pr-2 text-[#efad1e]"></i>
                  Quizzes
                </p>
                <p>
                  <i className="fa-solid fa-certificate pr-2 text-[#efad1e]"></i>
                  Certificate
                </p>
                <p>
                  <i className="fa-solid fa-clock pr-2 text-[#efad1e]"></i>6 Month
                </p>
              </div>
            </div>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold mt-3 ">{courseData?.name}</p>
              <span>#{courseData?.topica}</span>
              <span>#{courseData?.topicb}</span>
              <p className="font-bold mt-4 text-2xl text-info rounded-md bg-base-100 p-3">
                Pay: ৳{courseData?.price}
              </p>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-4/12 md:w-5/12 w-11/12 mx-auto    mt-4 border border-neutral bg-base-300">
          <Stripe courseData={courseData}></Stripe>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import primaryAxios from "../../Api/primaryAxios";
import Loader from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const PaidCourse = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  console.log(myCourse?.data);
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="card p-6 shadow-2xl h-full bg-base-100">
      <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {myCourse?.data?.map((allcard) => (
          <Link to={'/mycourse'} data-tip={allcard?.name} className="tooltip tooltip-bottom" key={allcard._id} allcard={allcard}>
            <div class="card w-52 bg-base-200 border border-neutral">
              <figure class="px-6 pt-6">
                <img
                  src={allcard?.img}
                  alt="Shoes"
                  class="rounded-xl h-28"
                />
              </figure>
              <div class="card-body p-2 items-center text-center">
                <h2>{allcard?.name.slice(0,18)}...</h2>
                <div className="flex gap-2 items-center">
                <progress class="progress progress-primary w-36" value="10" max="100"></progress><h1>10%</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaidCourse;

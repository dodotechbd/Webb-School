import React from "react";
import Loader from "../Shared/Loading/Loader";
import MyCourseCard from "./MyCourseCard";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyCourses = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourse"], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  console.log(myCourse?.data);
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div id="admission" className="lg:mb-40">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">My Courses</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {myCourse?.data?.map((allcard) => (
            <MyCourseCard key={allcard._id} allcard={allcard}></MyCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;

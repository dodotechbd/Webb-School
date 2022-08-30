import React from "react";
import AllCourseCard from "../AllCourses/AllCourseCard";
import Loader from "../Shared/Loading/Loader";
import { useQuery } from "react-query";
import useTitle from "../../Hooks/useTitle";

const AllAdmission = () => {
  useTitle("Admission");
  const { data: admission, isLoading } = useQuery(["admissionCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Prepare For The Admission</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {admission?.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAdmission;

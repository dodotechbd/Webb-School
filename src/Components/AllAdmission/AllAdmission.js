import React, { useEffect, useState } from "react";
import useAdmission from "../../Hooks/useAdmission";
import AllCourseCard from "../AllCourses/AllCourseCard";
import Loader from "../Shared/Loading/Loader";

const AllAdmission = () => {
  const [admission, setAdmission] = useAdmission();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Prepare For The Admission</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {admission.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAdmission;

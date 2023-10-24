import React from "react";
import { Link } from "react-router-dom";
import useAllCourse from "../../../Hooks/useAllCourse";
import Loading from "../../Shared/Loading/Loading";
import LanguageCard from "./LanguageCard";

const AllCourse = () => {
  const [language, isLoading, refetch] = useAllCourse.useLanguage();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-center">
      <div className="lg:mx-8 mx-4 mt-4">
        <h1 className="text-3xl pb-5 ">Manage All Courses</h1>
        <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {language?.data?.map((allcard) => (
            <LanguageCard
              key={allcard._id}
              allcard={allcard}
              refetch={refetch}
            ></LanguageCard>
          ))}
        </div>
      </div>
      <div>
        <Link className="btn btn-primary normal-case" to={"/admin/addlanguage"}>
          <i className="fa-solid fa-folder-plus mr-2"></i>Add a new course
        </Link>
      </div>
    </div>
  );
};

export default AllCourse;

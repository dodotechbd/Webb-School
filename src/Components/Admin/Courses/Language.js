import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import LanguageCard from "./LanguageCard";
import Loading from "../../Shared/Loading/Loading";

const Language = () => {
    const [course, setCourse] = useState();
  const { data: language, isLoading, refetch } = useQuery(["languageManage"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const deleteItem = (id) => {
    const remaining = language?.filter((item) => item._id !== id);
    setCourse(remaining);
  };
  return (
    <div className="text-center">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Language Learning</h1>
        <div className="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {language?.map((allcard) => (
            <LanguageCard deleteItem={deleteItem} key={allcard._id} allcard={allcard} refetch={refetch}></LanguageCard>
          ))}
        </div>
      </div>
      <div>
        <Link className="btn btn-primary normal-case" to={"/admin/addlanguage"}>
          <i className="fa-solid fa-folder-plus mr-2"></i>Add Language Course
        </Link>
      </div>
    </div>
  );
};

export default Language;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AdmissionCard from './AdmissionCard';
import { useQuery } from "react-query";

const Admission = () => {
    const [course, setCourse] = useState();
  const { data: admission, isLoading, refetch } = useQuery(["admissionManage"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then((res) =>
      res.json()
    )
  );
  const deleteItem = (id) => {
    const remaining = admission?.filter((item) => item._id !== id);
    setCourse(remaining);
  };
    return (
        <div className="text-center">
        <div className="lg:mx-8 mx-4 pt-10">
          <h1 className="text-3xl pb-5 ">Admission Learning</h1>
          <div className="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {admission?.map((allcard) => (
              <AdmissionCard deleteItem={deleteItem} key={allcard._id} allcard={allcard} refetch={refetch}></AdmissionCard>
            ))}
          </div>
        </div>
        <div>
          <Link className="btn btn-primary normal-case" to={"/admin/post"}>
            <i className="fa-solid fa-folder-plus mr-2"></i>Add Admission Course
          </Link>
        </div>
      </div>
    );
};

export default Admission;
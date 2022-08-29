import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import JobCard from './JobCard';
import Loading from '../../Shared/Loading/Loading';

const Job = () => {
    const [course, setCourse] = useState();
  const { data: job, isLoading, refetch } = useQuery(["jobManage"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const deleteItem = (id) => {
    const remaining = job?.filter((item) => item._id !== id);
    setCourse(remaining);
  };
    return (
        <div className="text-center">
        <div className="lg:mx-8 mx-4 mt-4">
          <h1 className="text-3xl pb-5 ">Job Learning</h1>
          <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {job?.map((allcard) => (
              <JobCard deleteItem={deleteItem} key={allcard._id} allcard={allcard} refetch={refetch}></JobCard>
            ))}
          </div>
        </div>
        <div>
          <Link className="btn btn-primary normal-case" to={"/admin/addjob"}>
            <i className="fa-solid fa-folder-plus mr-2"></i>Add Job Course
          </Link>
        </div>
      </div>
    );
};

export default Job;
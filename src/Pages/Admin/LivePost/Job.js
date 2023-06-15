import React from "react";
import useAllCourse from "../../../Hooks/useAllCourse";
import JobTable from "./JobTable";

const Job = () => {
  const [job, isLoading, refetch] = useAllCourse.useJob();
  if (isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <tbody>
      {job?.data?.map((jobs, index) => (
        <JobTable
          key={jobs._id}
          jobs={jobs}
          index={index}
          refetch={refetch}
        ></JobTable>
      ))}
    </tbody>
  );
};

export default Job;

import React from "react";
import useAllCourse from "../../../Hooks/useAllCourse";
import AdmissionTable from "./AdmissionTable";

const Admission = () => {
  const [admission, isLoading, refetch] = useAllCourse.useAdmission();
  if (isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <tbody>
      {admission?.data?.map((admissions, index) => (
        <AdmissionTable
          key={admissions._id}
          admissions={admissions}
          index={index}
          refetch={refetch}
        ></AdmissionTable>
      ))}
    </tbody>
  );
};

export default Admission;

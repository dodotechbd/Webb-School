import React from "react";
import { useQuery } from "react-query";
import AdmissionTable from "./AdmissionTable";

const Admission = () => {
  const {
    data: admission,
    refetch,
    isLoading,
  } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return  <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <tbody>
      {admission.map((admissions, index) => (
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

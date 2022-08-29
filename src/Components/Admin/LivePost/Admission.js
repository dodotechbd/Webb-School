import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
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
    return <Loading></Loading>;
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

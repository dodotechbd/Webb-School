import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Admission from "./Admission";
import Job from "./Job";
import LanguagesTable from "./LanguagesTable";

const Live = () => {
  const {
    data: language,
    refetch,
    isLoading,
  } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="navbar">
        <a class="normal-case text-xl">Post Live Class</a>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Active</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {language.map((languages, index) => (
              <LanguagesTable
                key={languages._id}
                languages={languages}
                index={index}
                refetch={refetch}
                isLoading={isLoading}
              ></LanguagesTable>
            ))}
          </tbody>
          <Job></Job>
          <Admission></Admission>
        </table>
      </div>
    </div>
  );
};

export default Live;

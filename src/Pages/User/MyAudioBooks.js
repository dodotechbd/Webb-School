import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import Loader from "../Shared/Loading/Loading";
import MyAudioBook from "./MyAudioBook";

const MyAudioBooks = () => {
  const [user] = useAuthState(auth);
  const { data: MyEbooks, isLoading } = useQuery(
    ["myEBooks", user?.email],
    () => primaryAxios.get(`/mybooks?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="lg:mx-8 mx-4 pt-10">
      <h1 className="text-3xl pb-5 ">My Audio Books</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full border-b border-base-200 mb-8">
          <thead>
            <tr>
              <th>Name & Speaker</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MyEbooks?.data?.map((allcard) => (
              <MyAudioBook key={allcard._id} allcard={allcard}></MyAudioBook>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAudioBooks;

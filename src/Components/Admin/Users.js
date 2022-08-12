import React from "react";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
import UserRow from "./UserRow";
import primaryAxios from "../../Api/primaryAxios";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["ourUsers"], () => primaryAxios.get(`https://rocky-escarpment-87440.herokuapp.com/user`));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Job</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
          {users?.data?.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
            <th>Index</th>
              <th>Name</th>
              <th>Job</th>
              <th>Make Admin</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Users;

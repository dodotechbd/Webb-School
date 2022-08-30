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
  } = useQuery(["ourUsers"], () => primaryAxios.get(`/user`));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="navbar">
        <a class="normal-case text-xl">Users</a>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
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
        </table>
      </div>
    </div>
  );
};

export default Users;

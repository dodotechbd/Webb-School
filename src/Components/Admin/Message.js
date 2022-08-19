import React from 'react';
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
import primaryAxios from '../../Api/primaryAxios';
import MessageRow from './MessageRow';

const Message = () => {
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
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Action</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
          {users?.data?.map((user, index) => (
              <MessageRow
                key={user._id}
                index={index}
                user={user}
                prefetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Message;
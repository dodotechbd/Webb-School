import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import auth from '../../firebase.init';
import useTitle from '../../Hooks/useTitle';
import Loading from "../../Pages/Shared/Loading/Loading";
import OrderCard from './OrderCard';

const Order = () => {
  useTitle("Payment History");
    const [user] = useAuthState(auth);
    const {
        data: orders,
        isLoading,
        refetch,
      } = useQuery(["orders", user?.email], () =>
        primaryAxios.get(`/order?email=${user?.email}`)
      );
    
      if (isLoading) {
        return <Loading></Loading>;
      }
    return (
        <div className='container mx-auto'>
           <h1 className='text-3xl my-6 ml-6'>Your Payments</h1>
           <div className='grid lg:grid-cols-2 gap-5 mb-16 mx-6'>
           {orders.data.map((order, index) => (
              <OrderCard
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              ></OrderCard>
            ))}
           </div>
        </div>
    );
};

export default Order;
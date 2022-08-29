import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from '../../Shared/Loading/Loading';
import SpecialCard from './SpecialCard';

const Special = () => {
  const { data: special, isLoading, refetch } = useQuery(["specialManage"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/special`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  
    return (
        <div className="text-center">
        <div className="lg:mx-8 mx-4 mt-4">
          <h1 className="text-3xl pb-5 ">Special Learning</h1>
          <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {special?.map((allcard) => (
              <SpecialCard key={allcard._id} allcard={allcard} refetch={refetch}></SpecialCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Special;
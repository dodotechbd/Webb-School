import React from 'react';
import useAdmission from '../../Hooks/useAdmission';
import AdmissionCard from '../Home/Admission/AdmissionCard';

const AllAdmission = () => {
    const [admission, setAdmission] = useAdmission();
    return (
        <div id="admission" className="" >
      <div className="lg:py-8 px-4 py-4">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold lg:mx-8">
        All Programs
      </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-8 mb-10 ">
        {admission.map((admission) => (
          <AdmissionCard
            key={admission._id}
            admission={admission}
          ></AdmissionCard>
        ))}
      </div>
    </div>
    );
};

export default AllAdmission;
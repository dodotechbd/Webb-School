import React from 'react';
import useAdmission from '../../Hooks/useAdmission';
import AllCourseCard from '../AllCourses/AllCourseCard';

const AllAdmission = () => {
    const [admission, setAdmission] = useAdmission();
    return (
        <div id="admission" className="" >
      <div className="lg:mx-8 mx-4 pt-10">
      <h1 className="text-3xl pb-5 text-black">Prepare For The Admission</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {admission.slice(0, 4).map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default AllAdmission;
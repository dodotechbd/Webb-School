import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loading/Loader';
import MyCourseCard from './MyCourseCard';

const MyCourses = () => {
    const [mycourse, setMycourse] = useState([]);
    useEffect(() => {
        fetch(`/mycourse.json`)
        .then(res => res.json())
        .then(data => setMycourse(data));
    })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
    return (
        <div id="admission" className="lg:mb-40">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">My Courses</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {mycourse.map((allcard) => (
            <MyCourseCard key={allcard._id} allcard={allcard}></MyCourseCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default MyCourses;
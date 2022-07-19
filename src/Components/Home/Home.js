import React from 'react';
import JobCourse from './JobCourse';
import Admission from './Admission/Admission';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Admission></Admission>
            <JobCourse></JobCourse>
        </div>
    );
};

export default Home;
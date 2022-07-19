import React from 'react';
import Courses from '../Course/Courses';
import JobCourse from './JobCourse';
import Admission from './Admission/Admission';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
           <Courses></Courses>
            <Admission></Admission>
            <JobCourse></JobCourse>
        </div>
    );
};

export default Home;
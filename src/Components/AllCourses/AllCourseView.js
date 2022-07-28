import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useAdmission from '../../Hooks/useAdmission';
import useLanguage from "../../Hooks/useLanguage";


const AllCourseView = () => {
    const { id } = useParams();
    const [admission] = useAdmission([]);

    const courseData = admission.find((allcard) => allcard._id === id);
    console.log(courseData);
    return (
        <div>
            <h1>{courseData?.name}</h1>
        </div>
    );
};

export default AllCourseView;
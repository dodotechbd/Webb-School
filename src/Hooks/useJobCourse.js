import React, { useEffect, useState } from 'react';

const useJobCourses = () => {
    const [jobcourses, setJobcourses] = useState([]);

    useEffect(() => {
        fetch('https://mshafims.github.io/admission/admission.json')
            .then(res => res.json())
            .then(data => setJobcourses(data));
    }, [])

    return [jobcourses, setJobcourses];
};

export default useJobCourses;
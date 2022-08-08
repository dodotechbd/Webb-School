import React, { useEffect, useState } from 'react';

const useJobCourses = () => {
    const [jobcourses, setJobcourses] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-escarpment-87440.herokuapp.com/job`)
            .then(res => res.json())
            .then(data => setJobcourses(data));
    }, [])

    return [jobcourses, setJobcourses];
};

export default useJobCourses;
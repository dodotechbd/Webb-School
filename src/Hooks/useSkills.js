import React, { useEffect, useState } from 'react';

const useSkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data));
    }, [])

    return [skills, setSkills];
};

export default useSkills;
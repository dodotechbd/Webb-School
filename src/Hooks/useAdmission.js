import React, { useEffect, useState } from 'react';

const useAdmission = () => {
    const [admission, setAdmission] = useState([]);

    useEffect(() => {
        fetch('admission.json')
            .then(res => res.json())
            .then(data => setAdmission(data));
    }, [])

    return [admission, setAdmission];
};

export default useAdmission;
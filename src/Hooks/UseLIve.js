import React, { useEffect, useState } from 'react';

const useLives = () => {
    const [Lives, setLives] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/liveData`)
            .then(res => res.json())
            .then(data => setLives(data));
    }, [])

    return [Lives, setLives];
};

export default useLives;
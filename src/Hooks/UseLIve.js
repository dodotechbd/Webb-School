import React, { useEffect, useState } from 'react';

const useLives = () => {
    const [Lives, setLives] = useState([]);

    useEffect(() => {
        fetch(`/Live.json`)
            .then(res => res.json())
            .then(data => setLives(data));
    }, [])

    return [Lives, setLives];
};

export default useLives;
import React, { useEffect, useState } from 'react';

const useLives = () => {
    const [Lives, setLives] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-escarpment-87440.herokuapp.com/liveData`)
            .then(res => res.json())
            .then(data => setLives(data));
    }, [])

    return [Lives, setLives];
};

export default useLives;
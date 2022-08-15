import React, { useEffect, useState } from 'react';

const useLanguage = () => {
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-escarpment-87440.herokuapp.com/language`)
            .then(res => res.json())
            .then(data => setLanguage(data));
    }, [])

    return [language, setLanguage];
};

export default useLanguage;
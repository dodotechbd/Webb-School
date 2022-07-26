import React, { useEffect, useState } from 'react';

const useLanguage = () => {
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        fetch('language.json')
            .then(res => res.json())
            .then(data => setLanguage(data));
    }, [])

    return [language, setLanguage];
};

export default useLanguage;
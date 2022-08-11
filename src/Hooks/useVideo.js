
import React, { useEffect, useState } from 'react';

const useVideo = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-escarpment-87440.herokuapp.com/videos`)
            .then(res => res.json())
            .then(data => setVideo(data));
    }, [])

    return [video, setVideo];
};

export default useVideo;
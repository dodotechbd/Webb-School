import React, { useEffect, useState } from 'react';

const useVideo = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`/video.json`)
            .then(res => res.json())
            .then(data => setVideo(data));
    }, [])

    return [video, setVideo];
};

export default useVideo;
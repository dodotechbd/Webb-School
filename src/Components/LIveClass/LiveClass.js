import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LiveClassCard from './LiveClassCard';

const LiveClass = () => {

    const [Lives, setLives] = useState([]);

    // const [blog,setBlog] = useBlogs(detailsId);

    useEffect(() => {
        fetch("http://localhost:5000/lives")
            .then(res => res.json())
            .then(data => setLives(data.slice(0, 1)))
    }, [])


    return (
        <div>

            <div class="flex h-screen  flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">

                {
                    Lives.map(live => <LiveClassCard
                        live={live} 
                    ></LiveClassCard>)
                }

            </div>
        </div>
    );
};

export default LiveClass;



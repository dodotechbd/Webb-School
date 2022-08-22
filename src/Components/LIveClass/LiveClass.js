import React, { useEffect, useState } from 'react';
import LiveClassCard from './LiveClassCard';
import Loader from '../Shared/Loading/Loader'

const LiveClass = () => {

    const [Lives, setLives] = useState([]);

   


    useEffect(() => {
        fetch("https://rocky-escarpment-87440.herokuapp.com/lives")
            .then(res => res.json())
            .then(data => setLives(data.slice(0, 1)))
            
    }, [])

    return (

        <div >

        <div className='flex h-screen justify-center items-center '>


            <div className="card  w-96 shadow-xl ">

                {
                    Lives.map(live => <LiveClassCard
                        live={live} 
                    ></LiveClassCard>)
                }

            </div>
        </div>
        </div>
    );
};

export default LiveClass;




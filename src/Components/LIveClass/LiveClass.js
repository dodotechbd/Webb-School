import React, { useEffect, useState } from 'react';
import LiveClassCard from './LiveClassCard';
import Loader from '../Shared/Loading/Loader'
import './Live.css'

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


            <div class=" cardGlass card  w-96  ">

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




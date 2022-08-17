import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AudioBookDetails = () => {
    const { audiobookId } = useParams();
    // console.log(audiobookId)
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("audiobook.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []) 

    const newDetails = details.filter(s => s._id == audiobookId)
    console.log(newDetails[0])
    return (
        <div>
            <h1>hi podcast</h1>
            <h1 className='text-4xl text-center pt-6 text-primary font-bold'>AudioBook Details</h1>
            <h1 className='text-2xl px-6 font-bold'>Podcast Name: {newDetails.name}</h1>
            <div className='grid gap-10 lg:grid-cols-2 py-12  px-6 md:grid-cols-1 sm:grid-cols-2'>
                <div>

                </div>

            </div>
        </div>
    );
};

export default AudioBookDetails;
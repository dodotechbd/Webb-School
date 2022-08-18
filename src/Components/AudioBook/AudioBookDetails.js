import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AudioBookDetails = () => {
     const { audiobookId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("/audiobook.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const newService = service.filter(s => s._id ==  audiobookId)
    //   console.log(newService[0]);
    return (
        <div>
             <h1 className='text-4xl text-center pt-6 text-primary font-bold'>Audio Books</h1>
            <h1 className='text-2xl px-6  font-bold'>Books Name: <span className='text-2xl text-primary font-bold'>{newService[0]?.name}</span></h1>
        </div>
    );
}

export default AudioBookDetails;
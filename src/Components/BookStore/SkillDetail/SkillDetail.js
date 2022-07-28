import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SkillDetail = () => {
    const {skillbookId} =useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("/SkillBooks.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const newService = service.filter(s => s._id == skillbookId)
    //   console.log(newService[0]);
    return (
        <div>
            <h1 className='text-4xl text-center pt-6 text-primary font-bold'>Books Detalis</h1>
        <div className=' grid gap-6 lg:grid-cols-2 py-12  px-6 md:grid-cols-2 sm:grid-cols-2 '>
 
        <div className='grid gap-6 align-middle  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 '>
        <figure><img className=' h-72 w-96' src={newService[0]?.img2} alt="Shoes" /></figure>
        <figure><img className='h-72 w-96' src={newService[0]?.img3} alt="Shoes" /></figure>  
        </div>
        <div className=''>
            <h1 className='text-2xl pragraph-color pb-1 font-bold'>Books Name: <span className='text-2xl text-primary font-bold'>{newService[0]?.name}</span></h1>
            <p className='pragraph-color text-2xl font-bold'> Writers: {newService[0]?.description}</p>
            <p className='pragraph-color text-xl font-semibold '> Pages: {newService[0]?.pages}</p>
            <p className='pragraph-color text-xl font-semibold '> Format: {newService[0]?.format}</p>
            <h3 className='font-semibold  pragraph-color'>{newService[0]?.details}</h3>
            <h3 className='font-bold text-2xl  pragraph-color'>Price $:  {newService[0]?.price}</h3>

        </div>
    </div>
    </div>
    );
};

export default SkillDetail;
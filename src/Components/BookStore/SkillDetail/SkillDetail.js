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
 
        <div className='grid  justify-items-center  align-middle  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
        <p>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>
        <figure><img className=' h-full w-96' src={newService[0]?.img} alt="Shoes" /></figure>

        </div>
        <div className='  w-96   shadow-xl border-2 p-5 rounded-lg'>
            <h1 className='text-2xl pragraph-color pb-1 font-bold'>Books Name: <span className='text-2xl text-primary font-bold'>{newService[0]?.name}</span></h1>
            <p className='pragraph-color text-2xl font-bold'> Writers: {newService[0]?.description}</p>
            <p className='pragraph-color text-xl font-semibold '> Pages: {newService[0]?.pages}</p>
            <p className='pragraph-color text-xl font-semibold '><i class="fa-solid fa-file-pdf text-[#efad1e]"></i>Format: {newService[0]?.format}</p>
            <h3 className='font-semibold  pragraph-color'>{newService[0]?.details}</h3>
            <h3 className='font-bold text-2xl  pragraph-color'>Price $:  {newService[0]?.price}</h3>
            <button  class=" btn px-4 bg-indigo-400 mt-4  text-center  font-bold rounded-b-lg p   hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456]">Buy Now</button>
        </div>
    </div>
    </div>
    );
};

export default SkillDetail;
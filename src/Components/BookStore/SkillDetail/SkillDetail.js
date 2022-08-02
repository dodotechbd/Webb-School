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
        <p className='font-bold'>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>
        <figure><img className='  w-96' src={newService[0]?.img} alt="Shoes" /></figure>

        </div>
        <div className='  w-4/5  shadow-xl border-2 p-5 rounded-lg'>
            <h1 className='text-2xl pragraph-color pb-1 flex justify-center font-bold'>Books Name: <span className='text-2xl text-primary font-bold'>{newService[0]?.name}</span></h1>
            <div className=' flex justify-around  pt-11'>
                <div>
               
           
                </div>
                <div>
                <p className=' font-bold'><i class="fa-solid fa-file-pen  pr-2  text-[#efad1e]"></i> Writers: {newService[0]?.description}</p>
                 <p className=' font-semibold '> <i class="fa-solid fa-file   pr-4  text-[#efad1e]"></i> Pages: {newService[0]?.pages}</p>
                <p className=' font-semibold '><i class="fa-solid fa-file-pdf pr-4 text-[#efad1e]"></i>Format: {newService[0]?.format}</p>
            <h3 className='font-bold '><i class="fa-solid fa-hand-holding-dollar pr-4 text-[#efad1e]"></i> Price $:  {newService[0]?.price}</h3>  
                </div>
            </div>
            <button  class=" btn-block px-4 bg-indigo-400 mt-4  text-center  font-bold py-2   hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456]">Buy Now</button>
        </div>
    </div>
    </div>
    );
};

export default SkillDetail;
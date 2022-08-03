import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AcadamicDetail = () => {
    const { acadamicbookId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("/AcadamicBooks.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const newService = service.filter(s => s._id == acadamicbookId)
    //   console.log(newService[0]);
    return (
        <div>
            <h1 className='text-4xl text-center pt-6 text-primary font-bold'>Books Detalis</h1>
            <h1 className='text-2xl px-6  font-bold'>Books Name: <span className='text-2xl text-primary font-bold'>{newService[0]?.name}</span></h1>
            <div className=' grid gap-10 lg:grid-cols-2 py-12  px-6 md:grid-cols-2 sm:grid-cols-2 '>

                <div className='grid  justify-items-center  align-middle  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <h1 className='text-xl font-bold pt-6 pb-4 text-primary '><i class="fa-solid fa-pen-clip pr-2"></i> Writers</h1>
                    {/* writers and some text */}
                    <div class="px-2 grid gap-6 grid-cols-2  bg-base-100 shadow-xl">

                        <div class="flex items-stretch ">
                            <div class="avatar">
                                <div class="w-12 h-12 rounded-full">
                                    <img className='' src="https://placeimg.com/192/192/people" alt='writers pic' />
                                </div>
                            </div>
                            <div className='ml-2.5'>
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>

                            </div>
                        </div>
                        <div class="flex items-stretch ">
                            <div class="avatar">
                                <div class="w-12 h-12 rounded-full">
                                    <img className='' src="https://placeimg.com/192/192/people"alt='writers pic' />
                                </div>
                            </div>
                            <div className='ml-2.5'>
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>

                            </div>
                        </div>
                        <div class="flex items-stretch ">
                            <div class="avatar">
                                <div class="w-12 h-12 rounded-full">
                                    <img className='' src="https://placeimg.com/192/192/people"alt='writers pic' />
                                </div>
                            </div>
                            <div className='ml-2.5'>
                                <h2 class="card-title">Pages: {newService[0]?.pages}</h2>
                                <p>Click the button to watch on Jetflix app.</p>

                            </div>
                        </div>
                        <div class="flex items-stretch ">
                            <div class="avatar">
                                <div class="w-12 h-12 rounded-full">
                                    <img className='' src="https://placeimg.com/192/192/people"alt='writers pic' />
                                </div>
                            </div>
                            <div className='ml-2.5'>
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>

                            </div>
                        </div>
                    </div>







                    <p className='font-bold text-xl pt-12'> A few words about the book</p>
                    <p className='font-bold pt-8'>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>


                </div>
                {/* books information card */}
                <div className='  w-4/5  shadow-xl border-2 p-5 rounded-lg'>

                    <div className=' grid gap-6 justify-around  pt-11 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                        <div>

                            <figure><img className='  w-72' src={newService[0]?.img} alt="Shoes" /></figure>
                        </div>
                        <div>

                            <p className='text-lg p-2'> <i class="fa-solid fa-file   pr-4  text-[#efad1e]"></i> Pages: {newService[0]?.pages}</p>
                            <p className='text-lg p-2'> <i class="fa-solid fa-file   pr-4  text-[#efad1e]"></i> File Size: {newService[0]?.file}</p>
                            <p className=' text-lg p-2'> <i class="fa-solid fa-file   pr-4  text-[#efad1e]"></i> Interactive: {newService[0]?.interactive}</p>
                            <p className='text-lg p-2'><i class="fa-solid fa-file-pdf pr-4 text-[#efad1e]"></i>Format: {newService[0]?.format}</p>
                            <h3 className=' text-lg p-2'><i class="fa-solid fa-hand-holding-dollar pr-4 text-[#efad1e]"></i> Price $:  {newService[0]?.price}</h3>
                        </div>
                    </div>
                    <button class=" btn-block px-4 bg-indigo-400 mt-4  text-center  font-bold py-2   hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AcadamicDetail;
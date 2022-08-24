import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mp3 from "../../Assets/audio/sherlock.mpeg";
import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';

const AudioBookDetails = () => {
    const { audiobookId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("/audiobook.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const newDetails = details.filter(s => s._id == audiobookId)
    //   console.log(newService[0]);
    return (
        <div>
            <h1 className='text-4xl text-center pt-6 text-sky-600 font-bold'>Explore Top Rated Podcasts</h1>

            <div className=' grid gap-10 lg:grid-cols-2 py-12  px-6 md:grid-cols-1 sm:grid-cols-1 '>

                <div className='grid justify-items-center  align-middle  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                    <h1 className='text-xl font-bold pt-4 pb-4 text-sky-600 '><i className="fa-solid fa-pen-clip pr-2"></i>Speaker</h1>
                    <p className='text-2xl font-serif m-3'>{newDetails[0]?.speaker}</p>
                    {/* writers and some text */}
                    <div className=" gap-6 grid-cols-2 p-5 bg-base-200 shadow-xl">
                        <img className='mb-5' src={newDetails[0]?.img1} alt="" />
                        <h1 className='text-xl font-bold m-5'> <span className='text-2xl text-sky-600 font-bold'>{newDetails[0]?.name} AudioBooks</span></h1>
                        {/* audio */}
                        <audio className='w-11/12  inline-block align-middle' controls>
                            <source src={mp3} className="bg-primary" type="" />
                        </audio>
                    </div>
                    <p className='font-bold text-xl pt-12'> About podcast</p>
                    <p className='font-bold pt-8'>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>

                </div>
                {/* books information card */}
                <div className='position relative  w-4/5  shadow-xl border-2 p-5 rounded-lg'>

                    <div className=' gap-6 justify-around pb-16 pt-11 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                        <div className='flex'>

                            <div>
                                <figure><img className='w-60' src={newDetails[0]?.img} alt="Shoes" /></figure>
                            </div>
                            <div>
                                <p className='text-2xl m-5 p-5 text-center font-bold'>Total Listener {newDetails[0]?.listener}</p>
                            </div>
                        </div>
                        <div >
                            <p className='text-2xl mt-3 p-4 font-bold text-sky-600'>Topic : {newDetails[0]?.name}</p>
                            <p className='text-lg p-4'> <i className="fa-solid fa-file pr-4  text-[#121513]"></i>Addedate : {newDetails[0]?.addedate}</p>
                            <p className='text-lg p-4'> <i className="fa-solid fa-book-open pr-4 text-[#121513]"></i>Adapted from: {newDetails[0]?.identify}</p>
                            <p className='text-lg p-4'> <i className="fa-brands fa-sourcetree pr-4 text-[#121513]"></i>Source : {newDetails[0]?.source}</p>
                            <p className='text-lg p-4'> <i className="fa-solid fa-file pr-4  text-[#121513]"></i> File Size: {newDetails[0]?.file}</p>
                            <p className=' text-lg p-4'> <i className="fa-solid fa-clock   pr-4  text-[#121513]"></i> Time: {newDetails[0]?.time}</p>

                            <div className='flex'>
                                <div>
                                    <p className='text-lg p-4'> <BsFillMusicPlayerFill></BsFillMusicPlayerFill></p>
                                </div>
                                <div>
                                    <p className='mt-3 text-lg pr-4'> Format: {newDetails[0]?.format}</p>
                                </div>
                            </div>

                            <div className='flex gap-1 mt-4 '>
                                <p className='text-xl font-bold pl-5 '>Average Ratings : </p>
                                <div>
                                    <p className='text-xl font-bold'> {newDetails[0]?.ratings}</p>
                                </div>
                                <div className='mt-1'>
                                    <BsFillStarFill size={20} color='orange'></BsFillStarFill>
                                </div>
                            </div>


                            <div>
                                <h3 className=' text-2xl font-bold ml-5 mt-3'>Price: <span className='text-green-600 text-2xl'>${newDetails[0]?.price}</span></h3>
                            </div>


                        </div>
                    </div>
                    <button className="btn modal-button btn-block bg-indigo-400 mt-4 text-center font-bold py-2 hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456]">Buy Now</button>
                </div>
            </div>

        </div>
    );
}

export default AudioBookDetails;
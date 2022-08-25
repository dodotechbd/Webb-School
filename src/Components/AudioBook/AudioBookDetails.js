import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AudioPlayer } from './AudioPlayer';
import { Link } from 'react-router-dom';

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
            <h1 className='text-4xl text-center pt-6 text-sky-600 font-bold mb-8'>Explore Top Rated Podcasts</h1>

            <div className=' grid gap-10 lg:grid-cols-2  px-6 md:grid-cols-1 sm:grid-cols-1 mb-4 lg:space-x-24'>

                <div className='grid justify-items-center  align-middle'>
                    {/* writers and some text */}
                    <div className="grid lg:grid-cols-2 lg:pl-8 border border-neutral rounded-lg px-6 py-6 pb-5 pt-4 gap-6">
                        <img className='mb-5' src={newDetails[0]?.img1} alt="" />
                        <h1 className='text-xl font-bold'> <span className='text-2xl text-sky-600 font-bold'>{newDetails[0]?.name} AudioBooks</span>
                            <p className='text-xl font-bold'><i className="fa-solid fa-pen-clip pr-2"></i>Speaker <span className=' text-sky-600 '>{newDetails[0]?.speaker}</span></p>
                        </h1>

                        {/* audio */}
                      <div className='lg:w-96 sm:w-48'>
                      <AudioPlayer></AudioPlayer>
                      </div>
                    </div>
                    <div className="border border-neutral rounded-lg px-4 py-3 mt-12">
                        <p className='font-bold text-2xl p-4'> About podcast</p>
                        <p className='font-bold p-3'>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>
                    </div>

                </div>
                {/* Mp3 information card */}
               
            </div>

        </div >
    );
}

export default AudioBookDetails;
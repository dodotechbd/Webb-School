import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const AudioBookDetails = () => {
    const [user, loading] = useAuthState(auth);
    const { audiobookId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("audiobook.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []) 
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    const newDetails = details.filter(s => s._id == audiobookId)
    return (
        <div>
        <h1 className='text-4xl text-center pt-6 text-primary font-bold'>AudioBook Details</h1>
        <h1 className='text-2xl px-6 m-5 font-bold'>Podcast Name : <span className='text-2xl text-primary font-bold'>{newDetails[0]?.name}</span></h1>
        <div className=' grid gap-10 lg:grid-cols-2 py-12  px-6 md:grid-cols-2 sm:grid-cols-2 '>

            <div className='grid  justify-items-center  align-middle  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                <h1 className='text-xl font-bold pt-6 pb-4 text-primary '><i className="fa-solid fa-pen-clip pr-2"></i> Speaker</h1>
                {/* writers and some text */}
                <div className="px-2 grid gap-6 grid-cols-2 py-6 bg-base-100 shadow-xl">

                   <h1>Audio content</h1>
                   
                </div>
                <p className='font-bold text-xl pt-12'> A few words about the podcast</p>
                <p className='font-bold pt-8'>Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant. Improve grammar, word choice, and sentence structure in your writing. It's free! Grammarly Can Help You Write Polished, Effective Book Reports Every Time. Fix Punctuation Errors. Find and Add Sources Fast. Easily Improve Any Text. AI Writing Assistant</p>

            </div>
            {/* books information card */}
            <div className='position relative  w-4/5  shadow-xl border-2 p-5 rounded-lg'>

                <div className=' grid gap-6 justify-around pb-16 pt-11 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                    <div>

                        <figure><img className='  w-80' src={newDetails[0]?.img} alt="Shoes" /></figure>
                    </div>
                    <div >
                        <p className='text-lg p-4'> <i className="fa-solid fa-file   pr-4  text-[#efad1e]"></i> Pages: {newDetails[0]?.pages}</p>
                        <p className='text-lg p-4'> <i className="fa-solid fa-file   pr-4  text-[#efad1e]"></i> File Size: {newDetails[0]?.file}</p>
                        <p className=' text-lg p-4'> <i className="fa-solid fa-file   pr-4  text-[#efad1e]"></i> Interactive: {newDetails[0]?.interactive}</p>
                        <p className='text-lg p-4'><i className="fa-solid fa-file-pdf pr-4 text-[#efad1e]"></i>Format: {newDetails[0]?.format}</p>
                        <h3 className=' text-lg p-4'><i className="fa-solid fa-hand-holding-dollar pr-4 text-[#efad1e]"></i> Price $:  {newDetails[0]?.price}</h3>
                    </div>
                </div>

                <label for="my-modal-3" class="btn modal-button btn-block bg-indigo-400 mt-4 text-center font-bold py-2 hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456]">Buy Now</label>

                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">BOOK: {newDetails[0]?.name}</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">

                                <input type="text" value={user.displayName} placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs my-2"{...register("book")} />

                                <input type="text" value={user.email} placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"{...register("email")} />

                                <input type="text" placeholder="Phone Number"
                                    class="input input-bordered w-full max-w-xs my-2"{...register("number")} />
                            </div>


                            <button class="btn btn-outline btn-secondary"><input type="submit" /></button>

                        </form>
                    </div>
                </div>


            </div>

        </div>
    </div >
    );
};

export default AudioBookDetails;
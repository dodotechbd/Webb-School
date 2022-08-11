import React from 'react';
import img from '../../Assets/video-chat-svgrepo-com.svg'


const LiveClassCard = ({live}) => {

    const { name,slots,Date,time,Link} =live ;

   
    return (
        <div>
           
<div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
    <h1 className='text-center text-xl font-bold'>Live: {name}</h1>
    <img
        src={img}
        alt="triangle with all three sides equal"
        class="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor" />
    <div className='flex gap-2 justify-center '>
        <span class="mt-2 text-center  font-bold text-black">Date:{Date}</span>
        <span class="mt-2 text-center  font-bold text-black">Time:{time}</span>
    </div>

    <div class="space-x-4 bg-gray-100 py-4 text-center ">

        <a href={Link} target="_blank">
            <button class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">join</button>
        </a>


    </div>
</div>
        </div>
    );
};

export default LiveClassCard;
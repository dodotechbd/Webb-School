import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/video-chat-svgrepo-com.svg'

const LiveClass = () => {
    return (
        <div>
    
<div class="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                

        <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <h1 className='text-center text-4xl font-bold'>Live Class</h1>
        <img 
        src={img}
        alt="triangle with all three sides equal"
        class="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor" />
         <div className='flex gap-5 justify-center '>
         <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Date:</h1>
          <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Time:</h1>
         </div>
          
          <div class="space-x-4 bg-gray-100 py-4 text-center ">

          <a href="https://meet.google.com/adr-nxwr-odk" target="_blank">
          <button class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">join</button>
          </a>
           
            
          </div>
        </div>
        
    
      </div>
        </div>
    );
};

export default LiveClass;
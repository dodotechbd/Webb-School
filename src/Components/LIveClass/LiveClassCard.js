import React from 'react';
import img from '../../Assets/video-chat-svgrepo-com.svg'


const LiveClassCard = ({ live }) => {

    const { name, slots, Date, time, Link } = live;


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title pl-8">Live: {slots}</h2>
                    <img
                        src={img}
                        alt="triangle with all three sides equal"
                        class="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor" />
                    
                    <div className='flex gap-2 justify-center '>
                        <span class="mt-2 text-center  font-bold text-black">Date:{Date}</span>
                        <span class="mt-2 text-center  font-bold text-black">Time:{time}</span>
                    </div>
                    <div class="card-actions justify-center">
                        <a href={Link} target="_blank">
            <button className=" flex items-center w-60 justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-primary rounded-md group hover:bg-gradient-to-r from-[#4828A9] to-[#A25BF7] hover:text-white hover:font-bold focus:outline-none text-white bg-[#A25BF7]" >join</button>
        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LiveClassCard;




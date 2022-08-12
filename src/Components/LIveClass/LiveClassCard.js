import React from 'react';
import img from '../../Assets/video-chat-svgrepo-com.svg'


const LiveClassCard = ({ live }) => {

    const { name, slots, Date, time, Link } = live;


    return (
        <div>
            <div class="card w-96 bg-base-300 border border-neutral shadow-xl">
                <div class="card-body">
                    <h2 class="card-title pl-8">Live:<span className='text-primary'> {slots}</span></h2>
                    <img
                        src={img}
                        alt="triangle with all three sides equal"
                        class="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor" />
                    
                    <div className='flex gap-5 justify-center '>
                        
                        <span class="mt-2 text-center  font-bold text-black">Time:<span className='text-[#FF0000]'>{Date}</span></span>
                        <span class="mt-2 text-center  font-bold text-black">Time:<span className='text-[#FF0000]'>{time}</span></span>
                    </div>
                    <div class="card-actions justify-center">
                        <a href={Link} target="_blank">
            <button className="btn btn-accent btn-wide">join</button>
        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LiveClassCard;




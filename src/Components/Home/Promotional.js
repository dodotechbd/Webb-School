import React from 'react';
import video from "../../Assets/video/promotion.mp4";
const Promotional = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center '>Why Choose Us? </h1>
            <p className="lg:text-xl text-md mb-5 mt-2 text-center text-gray-500">We want to contribute so that learning can be hassle freee!!</p>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <video width="700" controls>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div>
                        <h1 class="text-5xl font-bold">We are simply one click away!</h1>
                        <p class="py-6 m-2 font-serif">We are making sure each learner get best knowledge they deserve. We provide easiest formula, notes and guidelines to ensure best education. Enroll yours now.</p>
                        <button class="btn btn-primary">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotional;
import React from 'react';
import image1 from '../../../T1.png'
import image2 from '../../../s1.png'
import image3 from '../../../v1.png'
import image4 from '../../../ap.png'
import student from '../../../St.webp'
import './Review.css'
const Review = () => {
    return (
        <div>
            <h2 className='text-center text-black-600 font-bold text-3xl'>Our Acchievement</h2>
            <div class="hero bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='lg:block hidden' src={student} alt />
                    <div className='card bg-base-100 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5'>
                        <div class="card-body">
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div className="teacher">
                                    <img src={image1} alt="" />
                                    <div>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'> 500 + </h1>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'> Teachers</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div className="student">
                                    <img src={image2} alt="" />
                                    <div>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'>90,00,000 + </h1>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'> Students </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div className="teacher">
                                    <img src={image4} alt="" />
                                    <div>
                                        <h1 className='ml-5 text-red-black font-bold text-2xl mt-2'>32,00,000 + </h1>
                                        <h1 className='ml-5 text-red-black font-bold text-2xl'>App Users </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div className="teacher">
                                    <img src={image3} alt="" />
                                    <div>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'>18,000 +</h1>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'>Video </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
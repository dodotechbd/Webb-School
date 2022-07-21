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
            <h2 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center'>Our Acchievement</h2>
            <div class="hero min-h-scree bg-base-100 lg:my-10  ">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='hidden lg:block' src={student} alt />
                    <div className='card lg:mx-32 bg-base-100 grid lg:gap-14 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5'>
                        <div class="card-body p-0">
                            <section class="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image1} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>250+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Teachers</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body p-0">
                            <section class="hero container max-w-screen-lg mx-auto text-center">
                                <div className="student">
                                    <img className='lg:w-18' src={image2} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Students </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body p-0">
                            <section class="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image4} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Users </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="card-body p-0">
                            <section class="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image3} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>5K+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Video </h1>
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
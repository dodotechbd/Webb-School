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
            <h2 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center mt-12 uppercase'>Our Achivement <br /><progress className="progress w-56 progress-primary"></progress></h2>
            
            <div className="hero min-h-scree bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='hidden lg:block' src={student} alt />
                    <div className='card lg:mx-32 bg-base-100 grid grid-cols-2 lg:gap-14 gap-6 md:grid-cols-4 lg:grid-cols-2 mb-5'>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image1} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>250+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Teachers</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="student">
                                    <img className='lg:w-18' src={image2} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Students </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image4} alt="" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='text-black-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Users </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
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
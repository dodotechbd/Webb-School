import React from 'react';
import image1 from '../../../Assets/icon/T1.png';
import image2 from '../../../Assets/icon/s1.png';
import image3 from '../../../Assets/icon/v1.png';
import image4 from '../../../Assets/icon/ap.png';
import student from '../../../Assets/ACHIVE.png';
import './Review.css'
const Review = () => {
    return (
        <div className='bg-[#F7F8FA] py-16'>
            <h2 className='lg:text-4xl md:text-3xl text-2xl uppercase font-sub font-bold text-center'>Our Achivement</h2>
            
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='hidden lg:block h-96' src={student} alt />
                    <div className='card lg:mx-32 grid grid-cols-2 lg:gap-14 gap-6 md:grid-cols-4 lg:grid-cols-2 mb-5'>
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
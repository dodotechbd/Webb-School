import React from 'react';
import image1 from '../../../teacher.jpg'
import image2 from '../../../Student.jpg'
import image3 from '../../../Vedio.jpg'
import image4 from '../../../ratting.png'
import student from '../../../St.webp'
const Review = () => {
    return (
        <div className='px-12 py-12'>
            <h2 className='text-center text-red-600 font-bold text-2xl mb-5'>Our Acchievement</h2>
            <div class="hero min-h-scree bg-slate-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={student} alt />
                    <div className='card bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-10'>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div class="">
                                    <img src={image1} alt="" />
                                    <br />
                                    <h1 className='text-red-600 font-bold text-xl'>More than 400 teachers</h1>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div class="">
                                    <img src={image2} alt="" />
                                    <br />
                                    <h1 className='text-red-600 font-bold text-xl'>More than 93 lack students</h1>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div class="">
                                    <img src={image3} alt="" />
                                    <br />
                                    <h1 className='text-red-600 font-bold text-xl'>More than 18 thousend vedio</h1>
                                </div>
                            </section>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div class="">
                                    <img src={image4} alt="" />
                                    <br />
                                    <h1 className='text-red-600 font-bold text-xl'>More than 4 star rating</h1>
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
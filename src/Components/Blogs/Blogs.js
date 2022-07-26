import React from 'react';
import img from '../../Assets/blog-image/html.png'

const Blogs = () => {
    return (
        <div className='lg:mx-20'>
            <h1 className='text-center text-3xl m-20 font-bold'>Know Our Website History</h1>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">HTML5</h2>
                        <p>Know Your all HTML Q and A</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal-5" class="btn modal-button">...Show</label>

                            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">Why will you use Meta tag?</h3>
                                    <p class="py-4">Meta data is a basically used header tag between and using work page description, author of the document, keywords, and viewport settings.  tag important its don't show website its work all documents showing system her compare keywords read search engines.</p>

                                    <h3 class="font-bold text-lg">What are the differences between html4 and html5?  </h3>
                                    <p class="py-4">Html-5 is a Basically html-4 update version and some differences between. Html-5 in remove tag.</p>
                                    <div class="modal-action">
                                        <label for="my-modal-5" class="btn">X</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">CSS3</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal-5" class="btn modal-button">...Show</label>

                            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div class="modal-action">
                                        <label for="my-modal-5" class="btn">X</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">JavaScript</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal-5" class="btn modal-button">...Show</label>

                            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div class="modal-action">
                                        <label for="my-modal-5" class="btn">X</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;
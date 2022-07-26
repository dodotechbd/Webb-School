import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-20'>
            <h1 className='text-center text-3xl m-20 font-bold'>Know Our Website History</h1>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">HTML5</h2>
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
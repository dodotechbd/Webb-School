import React from 'react';
import html from '../../Assets/blog-image/html.png'
import css from '../../Assets/blog-image/css.png'
import js from '../../Assets/blog-image/js.png'

const Blogs = () => {
    return (
        <div className='lg:mx-20'>
            <h1 className='text-center text-3xl m-20 font-bold'>Know Our Website History</h1>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={html} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">HTML5</h2>
                        <p>Know Your all HTML Q and A</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal-5">...Show</label>

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
                    <figure><img src={css} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">CSS3</h2>
                        <p>Know Your all CSS3 Q and A</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal-5">...Show</label>

                            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">Why will you use Meta tags?</h3>
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
                    <figure><img src={js} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">JavaScript</h2>
                        <p>Know Your all JavaScript Q and A</p>
                        <div class="card-actions justify-end">

                            <label for="my-modal">...Shows</label>

                            <input type="checkbox" id="my-modal" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">What is JavaScript?</h3>
                                    <p class="py-4">JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</p>
                                    <h3 class="font-bold text-lg">What is JavaScript used for?</h3>
                                    <p class="py-4">Meta data is a basically used header tag between and using work page description, author of the document, keywords, and viewport settings.  tag important its don't show website its work all documents showing system her compare keywords read search engines.</p>

                                    
                                    <div class="modal-action">
                                        <label for="my-modal" class="btn">X</label>
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
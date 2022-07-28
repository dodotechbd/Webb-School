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
                                <div class="modal-box w-11/12 max-w-5xl text-black">
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

                            <label for="my-modal-raj">...Show</label>

                            <input type="checkbox" id="my-modal-raj" class="modal-toggle" />
                            <div class="modal text-black">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">What is CSS?</h3>
                                    <p class="py-4">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>

                                    <h3 class="font-bold text-lg">What is CSS? And How Does It Relate to HMTL?
                                    </h3>
                                    <p class="py-4">While Hypertext Markup Language (HTML) is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), Cascading Style Sheet language comes through and specifies your document’s style — page layouts, colors, and fonts (shoutout to font-family and font-style!) are all determined with CSS syntax, meaning that CSS is one important language for you to master in terms of styling your web pages!.</p>
                                    <div class="modal-action">
                                        <label for="my-modal-raj" class="btn">X</label>
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
                            <div class="modal text-black">
                                <div class="modal-box w-11/12 max-w-5xl">
                                    <h3 class="font-bold text-lg">What is JavaScript?</h3>
                                    <p class="py-4">JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</p>
                                    <h3 class="font-bold text-lg">What is JavaScript used for?</h3>
                                    <p class="py-4">JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. Common examples of JavaScript that you might use every day include the search box on Amazon, a news recap video embedded on The New York Times, or refreshing your Twitter feed.

                                        Incorporating JavaScript improves the user experience of the web page by converting it from a static page into an interactive one. To recap, JavaScript adds behavior to web pages..</p>


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
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl m-20 font-bold'>Know Our Website History</h1>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium text-center">
                    Read the HTML History <span><button class="btn btn-xs" for="my-modal-5">Show</button>
                    </span>
                </div>

                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg">Why will you use Meta tag?!</h3>
                        <p class="py-4">Meta data is a basically used header tag between and using work page description, author of the document, keywords, and viewport settings. tag important its don't show website its work all documents showing system her compare keywords read search engines.</p>
                        <div class="modal-action">
                            <label for="my-modal-5" class="btn">Yay!</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;
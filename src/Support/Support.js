import React from 'react';
import './Support.css';
const Support = () => {
    return (
        <div >
            <hr />
            <div class="card lg:card-side bg-base-100 shadow-xl ml-10 mr-10">
                <figure><img src="https://www.seqrite.com/skin/frontend/default/seqrite_v1/images/support-img.png" alt="" /></figure>
                <div class="card-body">
                    <h1 className='title-1 mt-10 ml-8'><span className='highlight'>Private support group</span> where we try to answer within <span className='highlight'>24 hours</span> of our students :</h1>
                    <p className='normal-text mt-10 ml-10'>
                        For this course we have created a private Facebook group where course instructor <span>MD BADSHA</span> and 4-5 other web developers will directly answer your various questions. We promise to answer your questions within 24 hours maximum. But in most cases you will get the answer in less time than that. Besides, there will be a live session on the discussed module every week where you can directly ask questions and get answers. Even after that, if the problem is not solved or if you need to know any kind of information, you can call or email us on the number given below.
                    </p>
                    <div className='ml-10 icon'>
                        <a href="tel:+8801735776381"><i className="call fa-solid fa-phone mt-5 ml-10"></i></a>
                        <a href="https://www.facebook.com/webbSchool"><i className="facebook fa-brands fa-facebook mt-5 ml-10"></i></a>
                        <a href="Email:mission2023@gmail.com"> <i className="email fa-solid fa-envelope mt-5 ml-10"></i></a>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Support;
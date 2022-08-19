import React from "react";
import support from '../Assets/SUPPORT.svg';
const Support = () => {
  return (
    <div className="py-12 border-t border-b border-neutral">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://www.seqrite.com/skin/frontend/default/seqrite_v1/images/support-img.png" />
        <div>
          <h1 className="text-warning text-3xl font-bold mt-10 ml-8">
            <span className="text-3xl text-info">Private support group</span>{" "}
            where we try to answer within{" "}
            <span className="text-3xl text-info">24 hours</span> of our students
          </h1>
          <p className="normal-text mt-10 ml-10">
            For this course we have created a private Facebook group where
            course instructor <span>MD BADSHA</span> and 4-5 other web
            developers will directly answer your various questions. We promise
            to answer your questions within 24 hours maximum. But in most cases
            you will get the answer in less time than that. Besides, there will
            be a live session on the discussed module every week where you can
            directly ask questions and get answers. Even after that, if the
            problem is not solved or if you need to know any kind of
            information, you can call or email us on the number given below.
          </p>
          <div className="ml-10 icon">
            <a href="tel:+8801735776381">
              <i className="call fa-solid fa-phone mt-5 ml-10"></i>
            </a>
            <a href="https://www.facebook.com/webbSchool">
              <i className="facebook fa-brands fa-facebook mt-5 ml-10"></i>
            </a>
            <a href="Email:mission2023@gmail.com">
              {" "}
              <i className="email fa-solid fa-envelope mt-5 ml-10"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

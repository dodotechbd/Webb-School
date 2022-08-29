import React from "react";
import support from "../Assets/Support Session (1).png";
const Support = () => {
  return (
    <div className="py-5 px-5 border-t border-b border-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* image import */}
        <img src={support} className="lg:w-6/12" />
        <div>
          <h1 className="text-warning text-3xl font-bold mt-10">
            <span className="text-3xl text-info">Private support group</span>{" "}
            where we try to answer within{" "}
            <span className="text-3xl text-info">24 hours</span> of our students
          </h1>
          <p className="text-lg mt-10">
            For this course we have created a private Facebook group where
            course instructor <span className="text-info font-bold">MD BADSHA</span> and 4-5 other web
            developers will directly answer your various questions. We promise
            to answer your questions within 24 hours maximum. But in most cases
            you will get the answer in less time than that. Besides, there will
            be a live session on the discussed module every week where you can
            directly ask questions and get answers. Even after that, if the
            problem is not solved or if you need to know any kind of
            information, you can call or email us on the number given below.
          </p>
          <div className="mt-10 text-center">
            <a className="mr-5" href="tel:+8801735776381">
              <i className="fa-solid fa-phone text-4xl text-green-600"></i>
            </a>
            <a className="mr-5" href="https://www.facebook.com/webbSchool">
              <i className="fa-brands fa-facebook text-4xl text-blue-500"></i>
            </a>
            <a className="mr-5" href="Email:mission2023@gmail.com">
              {" "}
              <i className="fa-solid fa-envelope text-4xl text-orange-500"></i>
            </a>
            <a className="mr-5" href="https://www.linkedin.com/in/md-badsha-6a8668241/">
              <i class="fa-brands fa-linkedin text-4xl text-blue-500"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

import React from "react";
import logo from "../../Assets/wslogo.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-base-200">
      <footer class="footer p-10 bg-base-200 text-base-content">
        <div className="md:w-60">
          <img
            className="mx-auto lg:mx-0"
            width="180"
            viewBox="0 0 24 24"
            src={logo}
            alt=""
          />
          <p className="font-bold text-xl text-center">
            Create your free account and start learning
          </p>
          <a href="">
            <button class="btn text-white btn-sm lg:mx-0 mx-24 md:mx-16">
              Join Now
            </button>
          </a>
        </div>
        <div className="grid grid-cols-2 lg:gap-24 md:gap-12 gap-24 lg:mx-0">
          <div>
            <p class="text-xl font-bold text-black mb-2">Services</p>
            <a class="link link-hover block">Book Store</a>
            <a class="link link-hover block">Courses</a>
            <a class="link link-hover block">Admission Help</a>
            <a class="link link-hover block">Job Preparation</a>
          </div>
          <div>
            <p class="text-xl font-bold text-black mb-2">Company</p>
            <a class="link link-hover block">About us</a>
            <a class="link link-hover block">Blogs</a>
            <a class="link link-hover block">Career</a>
            <a class="link link-hover block">Privacy policy</a>
          </div>
        </div>
        <div className="">
          <span class="text-xl font-bold text-black">Keep up with us at</span>
          <p class="text-md">
            <span className="font-bold">Contact:</span> 00000 (8AM - 11PM)
          </p>
          <p class="text-md">
            <span className="font-bold">SMS:</span> WSHelp to 00000 (24X7)
          </p>
          <p class="text-md">
            <span className="font-bold">Email:</span> support@webbschool.com
          </p>
          <div class="hidden lg:inline md:inline">
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://web.facebook.com/rashelmahomudf/"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.instagram.com/rashel_mahomud/"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.linkedin.com/in/rashelmahomud/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center my-2 lg:hidden md:hidden">
        <div class="grid grid-flow-col gap-4 mx-auto">
          <a
            target="_blank"
            className="text-2xl"
            href="https://web.facebook.com/rashelmahomudf/"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.instagram.com/rashel_mahomud/"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.linkedin.com/in/rashelmahomud/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </footer>
      <footer class="footer footer-center p-4 text-white bg-black text-center">
        <div>
          <p>2022 - {year} Copyright © Webb School.<br />All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

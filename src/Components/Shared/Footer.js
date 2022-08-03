import React from "react";
import logo from "../../Assets/wslogo.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-base-300 border-t border-neutral">
      <footer className="footer p-10 text-base-content">
        <div className="md:w-60">
        <div className="flex items-center">
              <img className="w-12" src={logo} alt="" />
              <div className="ml-1 text-lg font-header font-bold">
                <p>Webb</p>
                <p className="-mt-2">School</p>
              </div>
          </div>
          <p className="font-bold text-xl">
            Create your free account and start learning
          </p>
          <Link to={'signup'}>
            <button className="btn btn-primary font-thin text-white btn-sm">
              Join Now
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:gap-24 md:gap-12 gap-24 lg:mx-0">
          <div>
            <p className="text-xl font-bold  mb-2">Services</p>
            <a className="link link-hover block">Book Store</a>
            <a className="link link-hover block">Courses</a>
            <a className="link link-hover block">Admission Help</a>
            <a className="link link-hover block">Job Preparation</a>
          </div>
          <div>
            <p className="text-xl font-bold  mb-2">Company</p>
            <a className="link link-hover block">About us</a>
            <a className="link link-hover block">Blogs</a>
            <a className="link link-hover block">Privacy policy</a>
            <Link  to={'developer'}>Developer</Link>
          </div>
        </div>
        <div className="">
          <span className="text-xl font-bold ">Keep up with us at</span>
          <p className="text-md">
            <span className="font-bold">Contact:</span> 00000 (8AM - 11PM)
          </p>
          <p className="text-md">
            <span className="font-bold">SMS:</span> WSHelp to 00000 (24X7)
          </p>
          <p className="text-md">
            <span className="font-bold">Email:</span> support@webbschool.com
          </p>
        </div>
      </footer>
      <footer className="footer footer-center my-2 lg:hidden md:hidden">
        <div className="grid grid-flow-col gap-4 mx-auto">
          <a
            target="_blank"
            className="text-2xl"
            href="https://web.facebook.com/rashelmahomudf/"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.instagram.com/rashel_mahomud/"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.linkedin.com/in/rashelmahomud/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 border-t border-neutral flex justify-between">
        <div>
          <p>2022 - {year} Copyright © Webb School. All rights reserved</p>
        </div>
        <div className="hidden lg:inline md:inline">
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://web.facebook.com/rashelmahomudf/"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.instagram.com/rashel_mahomud/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.linkedin.com/in/rashelmahomud/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
      </footer>
    </div>
  );
};

export default Footer;

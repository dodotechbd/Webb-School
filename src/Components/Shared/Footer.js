import React from "react";
import logo from '../../Assets/wslogo.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className="mx-auto lg:mx-0" width="180" viewBox="0 0 24 24" src={logo} alt="" />
                    <p className="font-bold text-xl text-center">
                        Create your free account and start learning
                    </p>
                    <a href=""><button class="btn  text-white btn-sm lg:mx-0 mx-auto">Join Now</button></a>
                    
                </div>
                <div className="grid grid-cols-2 gap-32 mx-auto lg:mx-0">
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
                    <div class="grid grid-flow-col gap-4">


                        <a target="_blank" className="text-2xl" href="https://web.facebook.com/rashelmahomudf/"><i class="fa-brands fa-facebook"></i></a>
                        <a target="_blank" className="text-2xl" href="https://www.instagram.com/rashel_mahomud/"><i class="fa-brands fa-instagram"></i></a>
                        <a target="_blank" className="text-2xl" href="https://www.linkedin.com/in/rashelmahomud/"><i class="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" className="text-2xl" href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"><i class="fa-brands fa-youtube"></i></a>

                    </div>
                </div>
            </footer>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>2022 - {year} Copyright © Webb School. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
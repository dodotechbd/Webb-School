import React from 'react';
import logo from '../../Assets/image/logo.png'

const Footer = () => {
    return (
        <div>

            <footer class="footer p-10 bg-slate-50 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Book</a>
                    <a class="link link-hover">Course </a>
                    <a class="link link-hover">Help</a>
                    <a class="link link-hover">Our Course</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a href='#'>Rashel</a>

                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer class="footer px-10 py-4 border-t bg-base-300 text-base-content border-base-300">
                <div class="items-center grid-flow-col">
                    <img className='w-16' src={logo} alt='logo' />

                    <p>WEBB SCHOOL. <br /> Providing Educations Purposes since 2022</p>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4">

                        <a href='https://www.linkedin.com/in/rashelmahomud/'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/rashelmahomud'><i class="fa-brands fa-github"></i></a>
                        <a href='https://web.facebook.com/rashelmahomud.raj'><i className="fa-brands fa-facebook"></i></a>


                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../../Assets/image/blur img2.jpg'
import auth from '../../firebase.init';
import './Profile.css';
const Profile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='mb-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(" + "https://i.ibb.co/tKjB1hK/blurrrry.webp" + ")", }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-left text-5xl font-bold">Hello, {user?.displayName}</h1>
                        <p className="mt-2 font-serif text-lg">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <a href="#!" class="btn btn-info text">Edit profile</a>
                    </div>
                </div>
            </div>
            <div className='flex grid lg:grid-cols-2 sm:grid-cols-1 '>
                <div class="hero max-h-screen bg-base-500 mt-[-170px]">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div>
                                <div className='items-center form-control'>
                                    <div>
                                        <a href="#">
                                            <img src={user?.photoURL} className=" rounded-full m-4" />
                                        </a>
                                    </div>
                                    <div class="stats form-control">

                                        <div class="stat place-items-center">
                                            <div class="stat-value">1</div>
                                            <div class="stat-desc">Course</div>
                                        </div>

                                        <div class="stat place-items-center">

                                            <div class="stat-value text-secondary">20</div>
                                            <div class="stat-desc text-secondary">Video</div>
                                        </div>

                                        <div class="stat place-items-center">
                                            <div class="stat-value">50</div>
                                            <div class="stat-desc">Quiz</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='grid gap-1 m-4'>
                                    <button className="btn btn-info btn-xs mb-4">Message</button>
                                    <button class="btn btn-info btn-xs">Connect</button>
                                </div>
                            </div>
                            <div className="card-body">

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-4xl font-bold font-serif">{user?.displayName}</span>
                                    </label>
                                    <label class="label">
                                        <p className='font-serif'>MERN Stack Developer || Full Stack Developer</p>
                                    </label>
                                    <label class="label">
                                        <span class="label-text font-serif ">Contact Me : {user?.email}</span>
                                    </label>
                                    <label>
                                        <span class="label-text font-serif ">Location : BANGLADESH</span>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <a href="#" className='font-bold '>Show more</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* new form */}
                <div className='lg-block'>
                    <div class="hero max-h-screen bg-base-600 lg:mt-[-170px]">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className='flex grid gap-x-7 grid-cols-2 '>
                                    <div>
                                        <h2 className='text-xl p-5 m-3 text-bold'>My Account</h2>
                                    </div>
                                    <div className='text-end m-5'>
                                        <button class="btn btn-primary btn-sm mt-2 ">Settings</button>
                                    </div>
                                </div>
                                <h1 className='text-xl font-semibold m-5 mt-[-15px]'>User Information</h1>
                                <div class="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text ">Username</span>
                                        </label>
                                        <input type="text" placeholder="stephen.brown" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email Address</span>
                                        </label>
                                        <input type="email" placeholder="Email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="Stephen" class="input input-bordered w-100" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Brown" class="input input-bordered" />
                                    </div>
                                </div>
                                <h1 className='text-xl font-semibold m-5 mt-[-20px]'>Contact Information</h1>
                                <div class="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="92, Lawrence View Streets" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">City</span>
                                        </label>
                                        <input type="text" placeholder="New York" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Country</span>
                                        </label>
                                        <input type="text" placeholder="Bangladesh" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Institute</span>
                                        </label>
                                        <input type="text" placeholder="College / University" class="input input-bordered" />
                                    </div>
                                </div>
                                <div class="form-control m-5 mt-[-25px]">
                                    <label class="label">
                                        <span class="label-text">About Me</span>
                                    </label>
                                    <textarea class="textarea textarea-primary" placeholder="Tell us about yourself"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;
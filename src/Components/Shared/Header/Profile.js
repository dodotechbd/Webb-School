import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../../../Assets/image/blur img2.jpg'
import auth from '../../../firebase.init';
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
                        <a href="#!" className="btn btn-info">Edit profile</a>
                    </div>
                </div>
            </div>
            <div className='flex grid lg:grid-cols-2 sm:grid-cols-1 '>
                <div className="hero max-h-screen bg-base-500 mt-[-170px]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div>
                                <div className='items-center form-control'>
                                    <div>
                                        <a href="#">
                                            <img src={user?.photoURL} className=" rounded-full m-4" />
                                        </a>
                                    </div>
                                    <div className="stats form-control">

                                        <div className="stat place-items-center">
                                            <div className="stat-value">1</div>
                                            <div className="stat-desc">Course</div>
                                        </div>

                                        <div className="stat place-items-center">

                                            <div className="stat-value text-secondary">20</div>
                                            <div className="stat-desc text-secondary">Video</div>
                                        </div>

                                        <div className="stat place-items-center">
                                            <div className="stat-value">50</div>
                                            <div className="stat-desc">Quiz</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='grid gap-1 m-4'>
                                    <button className="btn btn-info btn-xs mb-4">Message</button>
                                    <button className="btn btn-info btn-xs">Connect</button>
                                </div>
                            </div>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-4xl font-bold font-serif">{user?.displayName}</span>
                                    </label>
                                    <label className="label">
                                        <p className='font-serif'>MERN Stack Developer || Full Stack Developer</p>
                                    </label>
                                    <label className="label">
                                        <span className="label-text font-serif ">Contact Me : {user?.email}</span>
                                    </label>
                                    <label>
                                        <span className="label-text font-serif ">Location : BANGLADESH</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <a href="#" className='font-bold '>Show more</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* new form */}
                <div className='lg-block'>
                    <div className="hero max-h-screen bg-base-600 lg:mt-[-170px]">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className='flex grid gap-x-7 grid-cols-2 '>
                                    <div>
                                        <h2 className='text-xl p-5 m-3 text-bold'>My Account</h2>
                                    </div>
                                    <div className='text-end m-5'>
                                        <button className="btn btn-primary btn-sm mt-2 ">Settings</button>
                                    </div>
                                </div>
                                <h1 className='text-xl font-semibold m-5 mt-[-15px]'>User Information</h1>
                                <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Username</span>
                                        </label>
                                        <input type="text" placeholder="stephen.brown" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email Address</span>
                                        </label>
                                        <input type="email" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="Stephen" className="input input-bordered w-100" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Brown" className="input input-bordered" />
                                    </div>
                                </div>
                                <h1 className='text-xl font-semibold m-5 mt-[-20px]'>Contact Information</h1>
                                <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="92, Lawrence View Streets" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">City</span>
                                        </label>
                                        <input type="text" placeholder="New York" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Country</span>
                                        </label>
                                        <input type="text" placeholder="Bangladesh" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Institute</span>
                                        </label>
                                        <input type="text" placeholder="College / University" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control m-5 mt-[-25px]">
                                    <label className="label">
                                        <span className="label-text">About Me</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" placeholder="Tell us about yourself"></textarea>
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
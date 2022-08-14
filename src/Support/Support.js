import React from 'react';
import './Support.css';
const Support = () => {
    return (
        <div >
            <hr />
            <div className='main'>
                <div className='text-1'>
                    <h1 className='title-1 mt-10 ml-20'>সার্বক্ষণিক সহায়তার জন্য থাকছে
                        <span> প্রাইভেট সাপোর্ট গ্রুপ - </span> </h1>
                    <p className='normal-text mt-10 ml-20'>
                        এই কোর্সের জন্য আমরা একটি প্রাইভেট ফেসবুক গ্রুপ তৈরী করেছি যেখানে কোর্স ইন্সট্রাক্টর <span>মোঃ বাদশাহ </span> সহ আরো 4-5 জন ওয়েব ডেভেলপার সরাসরি আপনাদের বিভিন্ন প্রশ্নের উত্তর দিবেন। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে তার চেয়েও কম সময়ে আপনারা উত্তর পেয়ে যাবেন। এছাড়া প্রতি সপ্তাহে আলোচিত মডিউলের উপর লাইভ সেশন থাকবে যেখানে আপনারা সরাসরি প্রশ্ন করে উত্তর পেতে পারবেন।এরপরেও সমস্যার সমাধান না হলে অথবা যেকোনো ধরনের তথ্য জানার প্রয়োজন হলে নিচে দেওয়া নাম্বারে কল অথবা আমাদেরকে ইমেইল করে দিতে পারেন।
                    </p>
                    <div className='ml-10 icon'>
                        <a href="tel:+8801735776381"><i className="call fa-solid fa-phone mt-5 ml-10"></i></a>
                        <a href="https://www.facebook.com/webbSchool"><i className="facebook fa-brands fa-facebook mt-5 ml-10"></i></a>
                        <a href="Email:mission2023@gmail.com"> <i className="email fa-solid fa-envelope mt-5 ml-10"></i></a>

                    </div>
                </div>

                <div>
                    <img src="https://www.seqrite.com/skin/frontend/default/seqrite_v1/images/support-img.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Support;
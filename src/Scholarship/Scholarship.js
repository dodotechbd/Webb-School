import React, { useEffect, useState } from 'react';
import './Scholarship.css'
import CountUp from 'react-countup';
const Scholarship = () => {

    // React CountUp Add
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 100000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div >
            <hr />
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <div class="card-body">
                    <div>
                        <div className='text'>
                            <h1 className='title-2 mt-10'>কোর্সে ভালো করলে এককালীন <span> <CountUp
                                duration={25} start={0} end={100000} /></span> টাকা শিক্ষাবৃওির সুযোগ !!!
                                <i class="fa-solid fa-sack-dollar dollar"></i>
                                <i class="fa-solid fa-sack-dollar dollar"></i>
                                <i class="fa-solid fa-sack-dollar dollar"></i>
                            </h1>
                            <p className='normal-text mt-5'>
                                যারা কোর্সের বিভিন্ন কুইজ, এসাইনমেন্ট ও পরীক্ষায় ভাল রেসাল্ট করবেন এবং সামগ্রিকভাবে কমপক্ষে <span> <CountUp
                                    duration={25} start={0} end={80} /> % </span> মার্কস পাবেন, তাদের কে নির্বাচিত করে আমরা একটি বিশেষ পরিক্ষার আয়োজন করব। তারপর সেখান থেকে প্রথম <span> <CountUp
                                        duration={15} start={0} end={3} /></span> জনকে ক্রমানুসারে <span><CountUp
                                            duration={25} start={0} end={50000} /></span> টাকা, <span>
                                    <CountUp
                                        duration={25} start={0} end={70000} /></span> টাকা এবং <span> <CountUp
                                            duration={25} start={0} end={100000} /></span> টাকা এককালীন শিক্ষাবৃওি প্রদান করব। জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে
                                সহযোগিতা করবে।
                            </p>
                            <div className='avatar'>
                                <div class="avatar placeholder ml-20">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                        <span class="text-3xl"><img src="https://scontent.fdac97-1.fna.fbcdn.net/v/t39.30808-6/297814765_1774102069609309_2686621292244915609_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFS1xQW6GlzvVF1ZyKRmvKyC0L1UM6NZBULQvVQzo1kFa6Ozf24q212dVLa1i8IL9tPJGH-Qi2Gw66JluxeCpYm&_nc_ohc=0M-cusPAjP4AX9I3LzV&tn=KQhKgisHJnQegJCF&_nc_ht=scontent.fdac97-1.fna&oh=00_AT9liQzyZyBkGGfTVb5QXar-NhctddpIwWTxJjuz55nMcw&oe=62FD3E27" alt='' /></span>
                                    </div>
                                </div>
                                <div class="avatar placeholder ml-20">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                        <img src="https://scontent.fdac97-1.fna.fbcdn.net/v/t39.30808-6/243108317_1249895958858795_7713305381357244743_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGcqlQ5pVl5fFeBuFRnVH840HJzXfzc6pvQcnNd_Nzqm68yvJP60EPO8fBL4asGtn77ltFi3eWF6oFdtAAe_3YU&_nc_ohc=S8LjM9OhCTQAX_IlzQw&_nc_ht=scontent.fdac97-1.fna&oh=00_AT_7cwIS4sAtJE8Jtlarzvp7tsHF9WlUZjIBQCBNzqQpWw&oe=62FDF8A4" alt='' />
                                    </div>
                                </div>
                                <div class="avatar placeholder ml-20">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                        <img src="https://scontent.fdac97-1.fna.fbcdn.net/v/t39.30808-6/211740701_2970174183226716_7543646685170793044_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQkPjlw3OWFIhYRGh_kaOg3ucBwXFnm7Xe5wHBcWebtfX4CtMDAkzkQ_mdUI0VAyuZGeuUWuBOo7QgPvtsGfA0&_nc_ohc=EXo8kO6z80QAX8q7vNc&_nc_ht=scontent.fdac97-1.fna&oh=00_AT9Kjs2VicWZ-dvzxWA93BFAsvGQZeUwB7zXPfEdrpiOgw&oe=62FDDC41" alt='' />
                                    </div>
                                </div>
                            </div>
                            <h1 className='success mt-4'>বিগত বছরের সাফল্যের শীর্ষে।</h1>
                        </div>
                    </div>
                </div>
                <figure> <img className='mr-10' src="https://i.pinimg.com/736x/92/4b/64/924b6464f01acbd41cdb1d1009aa31fa.jpg" alt="" /></figure>
            </div>
        </div >
    );
};

export default Scholarship;
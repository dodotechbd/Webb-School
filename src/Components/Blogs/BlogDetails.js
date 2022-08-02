import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { detailsId } = useParams();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const newBlogs = blogs.filter(blog => blog._id == detailsId)
    console.log(newBlogs);


    return (
        <div className='lg:mx-20 my-20'>

            <h1 className='text-2xl mt-20 font-bold'>{newBlogs[0]?.title}</h1> <br />
            <div className='flex'> 
                <i class="fa-solid fa-user-astronaut mx-2 text-secondary"></i>
                <h1 className='text-sm '>{newBlogs[0]?.name}</h1>
            </div>

            <div className='flex'>
                <i class="fa-solid fa-house-user mx-2 text-primary"></i>
                <h1 className='text-sm'>{newBlogs[0]?.address}</h1>
            </div>

            <div class="">

                <div class="hero-content flex-col lg:flex-row">

                    <img className='w-6/12' src={newBlogs[0]?.img} />
                    <div>
                        <h1 class="text-3xl font-bold">{newBlogs[0]?.title2}</h1>
                        <p class="py-6">{newBlogs[0]?.add}</p>
                        <h1 class="text-3xl font-bold">{newBlogs[0]?.title3}</h1>
                        <p class="py-6">{newBlogs[0]?.add1}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;
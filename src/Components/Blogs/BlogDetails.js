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
            <div>
                <i class="fa-solid fa-user-alien"></i>
                <h1 className='text-sm '>{newBlogs[0]?.name}</h1>
            </div>

            <div>
                <i class="fa-solid fa-house-user"></i>
                <h1 className='text-sm'>{newBlogs[0]?.address}</h1>
            </div>

            <div class="">

                <div class="hero-content flex-col lg:flex-row">

                    <img className='w-6/12' src={newBlogs[0]?.img} />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;
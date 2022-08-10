import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div >
            <div>
                <h1 className='text-4xl text-center my-10'>Our site Blogs</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-10 gap-5 my-10'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;
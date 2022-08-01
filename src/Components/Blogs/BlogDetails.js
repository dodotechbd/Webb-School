import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {detailsId} =useParams();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])

    const newBlogs = blogs.filter(blog => blog._id == detailsId )
    console.log(newBlogs);
    

    return (
        <div>

            <h1>hello {newBlogs[0]?.name}</h1>
            
            
        </div>
    );
};

export default BlogDetails;
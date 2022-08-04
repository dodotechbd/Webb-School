import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id,name, title, description, address, img } = blog;

    const navigate = useNavigate();

    const handelBlogs = (id) => {
        navigate(`/blogdetails/${_id}`)

    }

    return (
        <div>
            <div class="card w-11/12 mx-auto mb-10 lg:w-96 bg-base-100 shadow-xl hover:bg-slate-500 hover:text-white transform transition duration-500 hover:scale-105">
                <figure> <img onClick={() => handelBlogs(_id)} src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{description} </p>
                 
                </div>
            </div>
        </div>
    );
};

export default Blog;
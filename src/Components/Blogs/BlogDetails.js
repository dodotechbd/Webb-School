import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { detailsId } = useParams();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const newBlogs = blogs.filter(blog => blog._id == detailsId)
    console.log(newBlogs);


    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-20 my-2 lg:my-20'>
            <div className='lg:mx-20  col-span-2'>

                <h1 className='text-2xl font-bold m-2'>{newBlogs[0]?.title}</h1> <br />
                <div className='flex'>
                    <i className="fa-solid fa-user-astronaut mx-2 text-secondary"></i>
                    <h1 className='text-sm '>{newBlogs[0]?.name}</h1>
                </div>

                <div className='flex'>
                    <i className="fa-solid fa-house-user mx-2 text-primary"></i>
                    <h1 className='text-sm'>{newBlogs[0]?.address}</h1>
                </div>

                <div className="">

                    <div className=" flex-col lg:flex-row w-11/12 mx-auto">

                        <img className='my-3' src={newBlogs[0]?.img} />
                        <div className='m-2'>
                            <h1 className="text-3xl font-bold">{newBlogs[0]?.title2}</h1>
                            <p className="py-6">{newBlogs[0]?.add}</p>
                            <h1 className="text-2xl font-bold">{newBlogs[0]?.title3}</h1>
                            <p className="py-6">{newBlogs[0]?.add1}</p>
                            <h1 className="text-2xl font-bold">{newBlogs[0]?.title4}</h1>
                            <p className="py-6">{newBlogs[0]?.add2}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="card w-11/12 lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Recent Post</h2>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/18'>Best Way to learn code and empliment this</a></p>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/16'>Best practice for writing code comment</a></p>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/15'>Why JavaScript Is Still So Important for Web Development?</a></p>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/77'>What Is MongoDB and How Does It Work?</a></p>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/9'>why importent learning react ja and Easy?</a></p>
                        <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogdetails/11'>Why Excellent Node.js for BackEnd site.?</a></p>
                        <div className="card w-11/12 lg:w-96 bg-base-100 shadow-xl">
                        </div>

                        <div className="card w-11/12 lg:w-96 bg-base-100 shadow-xl mt-2">
                            <div className="card-body">
                                <h2 className="card-title">Categories</h2>
                                <p><i className="fa-solid fa-circle-arrow-right text-primary"></i> <a href='https://webb-school.vercel.app/blogs'>Tips and Tricks</a></p>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogDetails;
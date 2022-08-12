import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlogs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log("hello", data);
        const url = `http://localhost:5000/blogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (

        <div>

            <div class="card lg:w-3/5 w-80 bg-base-300 shadow-xl lg:m-10 m-5">
                <div class="card-body">
                    <h2 class="card-title text-2xl text-center my-10">Add Your Blogs</h2>
                    <div>

                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                    type="text"
                                    placeholder="blogs title"
                                    class="input input-bordered w-full"
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "blogs Is Required"
                                        }
                                    })} /> <br />

                                <input
                                    placeholder='Img URL'
                                    className='input input-bordered w-full  mt-3'
                                    type="text" {...register("img")}

                                /><br />

                                <textarea

                                    type="TextField"
                                    placeholder="blog Descriptions"
                                    class="input input-bordered w-full mt-3"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "TextField Is Required"
                                        }
                                    })}

                                /> <br />

                                <input type="submit" className='btn w-full mt-3 ' />

                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AddBlogs;
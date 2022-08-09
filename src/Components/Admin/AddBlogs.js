import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlogs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data);
    }

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center my-10'>Add Your Blog</h1>
            </div>
            <div className='text-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="text"
                        placeholder="blogs title"
                        class="input input-bordered w-full max-w-xs"
                        {...register("text", {
                            required: {
                                value: true,
                                message: "blogs Is Required"
                            }
                        })} /> <br />

                    <textarea

                        type="TextField"
                        placeholder="blog Descriptions"
                        class="input input-bordered w-full max-w-xs mt-3"
                        {...register("TextField", {
                            required: {
                                value: true,
                                message: "TextField Is Required"
                            }
                        })}

                    /> <br />

                    <input type="submit" className='btn' />

                </form>
            </div>
        </div>
    );
};

export default AddBlogs;
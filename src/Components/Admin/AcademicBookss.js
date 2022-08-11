import React from 'react';
import { useForm } from 'react-hook-form';

const AcademicBookss = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log("hello", data);
        const url = `http://localhost:5000/AcadamicBook`;
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
        <div className='pb-12'>
            <div>
                <h1 className='text-2xl text-center my-10'>Add Your Books</h1>
            </div>
            <div className='p-2 w-9/12 m-auto bg-base-100 shadow-xl pb-2'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder='Img URL' 
                        className='input  bg-gray-100 w-full max-w-xs m-4'
                        type="text" {...register("img")}

                    />
                    <input
                        type="text"
                        placeholder="Books Name"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name Is Required"
                            }
                        })} />
                    <br></br>
                    <input
                        type="text"
                        placeholder="name of Proprietor"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Proprietor Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-100 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                        

                    {/* <textarea

                      type="TextField"
                      placeholder=" Descriptions"
                      class="input input-bordered w-full max-w-xs mt-3"
                      {...register("description", {
                          required: {
                              value: true,
                              message: "TextField Is Required"
                          }
                      })}

                  />  */}


                    <br></br>
                    <input type="submit" className='btn w-11/12 ml-4 text-white bg-[#0544f2] text-left hover:bg-blue-600' />

                </form>
            </div>

        </div>
    );
};

export default AcademicBookss;
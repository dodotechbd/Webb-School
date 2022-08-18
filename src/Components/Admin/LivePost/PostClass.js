import React from 'react';
import { useForm } from 'react-hook-form';




const PostClass = ({ live }) => {


    const { name, slots } = live;


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch('http://localhost:5000/lives',{
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <div className="card-body">
                <form className='text-left' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Course</span>
                        </label>

                        <select name="name"
                        type="Select"
                        placeholder="Course Name"
                        className="select select-bordered w-full max-w-xs"
                        {...register("name", {
                        })}>
                            {
                                name.map(name => <option value={name}>{name}</option>)
                            }
                        </select>
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Course Name</span>
                        </label>

                        <select name="slots"
                        type="Select"
                        placeholder="Course Name"
                        className="select select-bordered w-full max-w-xs"
                        {...register("slots", {
                        })}>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                type="Date"
                                placeholder="Date"
                                className="input input-bordered w-full max-w-xs"
                                {...register("Date", {
                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input
                                type="Time"
                                placeholder="Time"
                                className="input input-bordered w-full max-w-xs"
                                {...register("time", {
                                })}
                            />
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Link</span>
                        </label>
                        <input
                            type="Link"
                            placeholder="Link"
                            className="input input-bordered w-full max-w-xs"
                            {...register("Link", {
                            })}
                        /> 
                    </div>
                    <br />

                    <input className='btn w-full max-w-xs text-white bg-[#001858] text-left hover:bg-blue-700' type="submit" value="Live Class" />
                </form>
            </div>
        </div>

    );
};

export default PostClass;


import React from 'react';
import useLives from '../../../Hooks/UseLIve';
import { useForm } from 'react-hook-form';


const Live = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        
      }
    const [Lives] = useLives([]);
    
 


    return (
        <div>
            <div className="hero bg-base-100">
                <div className="">
                    <div className="text-center my-10">
                        <h1 className="text-3xl font-bold">Post Live Class {Lives.length}  <i className="fa-solid fa-video text-error"></i></h1>
                    </div>
                    <div className="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
                        <div className="card-body">
                            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
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

                                <input className='btn w-full max-w-xs text-white bg-[#001858] text-left' type="submit" value="Live Class" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;
import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SingUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  
  let singInError
  
    if( loading || gLoading){
      return <Loading></Loading>
    }
  
    if(error || gError){
      singInError =<p>{error?.message || gError?.message}</p>
    }
  
    if (user || gUser) {
      console.log(gUser)
    }
  
    const onSubmit = data => {
      console.log(data)
      createUserWithEmailAndPassword(data.email,data.password)
    }
    return (
        <div className='flex h-screen justify-center items-center bg-[#E5E5E5]'>
    <div className="card w-96 bg-base-100 shadow-xl  bg-[#D9D4E7]">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sing Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is require"
                            },
                           
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                        

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is require"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                    </label>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is require"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}

                    </label>
                </div>
                 
             {singInError}
                <input className='btn w-full max-w-xs text-white' type="submit" value="SingUp" />
            </form>
            <p className='text- text-black text-bold'>Already have an account? <Link to="/LogIn" className=' text-light text-primary'>Please LogIn</Link></p>
            <div className="divider">OR</div>

            <button  onClick={() => signInWithGoogle()} className="btn btn-outline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">Continue with Google</button>

           
        </div>
    </div>
</div>
    );
};

export default SingUp;
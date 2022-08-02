import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Demo = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
  let singInError
  
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
  
    if( loading || gLoading){
      return <Loading></Loading>
    }
  
    if(error || gError){
      singInError =<p>{error?.message || gError?.message}</p>
    }
  
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  
    const onSubmit = data => {
      console.log(data)
      signInWithEmailAndPassword(data.email,data.password)
    }
    return (
        <div 
    className='   grid grid-cols-1 sm:grid-cols-2 h-screen w-full md:grid-col'>
      <div className='hidden sm:block md:hidden lg:block'>
            <img className='w-full h-full object-cover ' src='https://i.postimg.cc/NGNThmjN/1.png' alt="" />
        </div>
    <div className='flex h-screen justify-center items-center bg-[#E5E5E5]'>
    <div className="card  bg-[#D9D4E7]  flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input className='btn w-full max-w-xs inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type="submit" value="Login" />
            </form>
            <p className='text-  text-bold'>New to Webb School? <Link to="/SignUp" className=' text-light text-primary'>Create New Account</Link></p>
            <div className="divider">OR</div>

            
                <button onClick={() => signInWithGoogle()} class=" bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700  w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200  hover:border-slate-400  hover:shadow transition duration-150 rounded shadow-lg">
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt=""/> <span>Login with Google</span>
            </button>

           
        </div>
    </div>
</div>
</div>
    );
};

export default Demo;
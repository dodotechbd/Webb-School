import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';





const Login = () => {
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
    <div >
            <div class="flex items-center min-h-screen p-4  lg:justify-center">
      <div
        class="flex flex-col overflow-hidden mx-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl"
      >
        <div
          class="hidden p-4 py-6 text-white  bg-gradient-to-r from-[#4828A9] to-[#A25BF7] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <img className=' ' src='https://i.postimg.cc/7LVfyJkP/casual-life-3d-young-people-in-the-worker-jumpsuits-with-gadgets.png' alt="" />
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-3xl font-bold text-primary text-center ">Login</h3>
          <form  onSubmit={handleSubmit(onSubmit)} action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-900">Email</label>
              <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-900">Password</label>
                <a href="#" class="text-sm text-primary hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-900">Remember me</label>
            </div>
            <div>
            {singInError}
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gradient-to-r from-[#4828A9] to-[#A25BF7] rounded-md shadow  hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
              <p className='text-  text-bold'>New to Webb School? <Link to="/SignUp" className=' text-light text-primary'>Create New Account</Link></p>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
              <button onClick={() => signInWithGoogle()} class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-primary rounded-md group hover:bg-gradient-to-r from-[#4828A9] to-[#A25BF7] hover:text-white hover:font-bold focus:outline-none text-black">
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt=""/> <span>Login with Google</span>
            </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
  );
};

export default Login;




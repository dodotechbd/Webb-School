import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading'
import useToken from '../../Hooks/useToken';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  //
  const [token] = useToken(user || gUser);
  //

  let navigate = useNavigate()


  let singInError

  let location = useLocation();


  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }

  if (error || gError || upError) {
    singInError = <p>{error?.message || gError?.message || upError?.message}</p>
  }

  if (token) {
    console.log(gUser)
    return <Navigate to="/" state={{ from: location }} replace  ></Navigate>
  }

  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name });
    console.log('done')
    navigate("/")
  }
  return (
    <div >
      <div className="flex items-center min-h-screen p-4 lg:justify-center">
        <div
          className="flex flex-col overflow-hidden mx-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl"
        >
          <div
            className=" hidden p-4 py-6 text-white bg-gradient-to-r from-[#4828A9] to-[#A25BF7] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >
            <img className='' src='https://i.postimg.cc/MpZtxwyx/casual-life-3d-girl-and-boy-in-the-worker-jumpsuits-looking-at-tablet.pngss' alt="" />
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-3xl font-bold text-primary text-center ">Account Register</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label for="name" className="text-sm font-semibold text-gray-900">Name</label>

                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 transition duration-300 border  text-black border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is require"
                    },

                  })} />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}


                </label>
                <label for="email" className="text-sm font-semibold text-gray-900">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 transition duration-300 border  text-black border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-900">Password</label>

                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 py-2 transition duration-300 border  text-black border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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

              <div>
                {singInError}
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gradient-to-r from-[#4828A9] to-[#A25BF7] rounded-md shadow hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Register
                </button>
                <p className='text-  text-bold'>Already have an account? <Link to="/LogIn" className=' text-light text-primary'>Please Login</Link></p>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">or login with</span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <button onClick={() => signInWithGoogle()} className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-primary rounded-md group hover:bg-gradient-to-r from-[#4828A9] to-[#A25BF7] hover:text-white hover:font-bold focus:outline-none text-black">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
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

export default SignUp;

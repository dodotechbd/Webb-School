import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading'


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

      const navigate = useNavigate()

  
  let singInError
  
    if( loading || gLoading || updating){
      return <Loading></Loading>
    }
  
    if(error || gError || upError){
      singInError =<p>{error?.message || gError?.message || upError?.message}</p>
    }
  
    if (user || gUser ) {
      console.log(gUser)
    }
  
    const onSubmit = async data => {
      console.log(data)
      await createUserWithEmailAndPassword(data.email,data.password)
      await updateProfile({ displayName: data.name });
      console.log('done')
      navigate("/")
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
              <img className='w-full h-full object-cover' src='https://i.postimg.cc/Xqx4Q2kL/drbbb-4x.webp' alt="" />
          </div>
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
             <input className='btn w-full max-w-xs inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type="submit" value="Login" />
            </form>
            <p className='text- text-black text-bold'>Already have an account? <Link to="/LogIn" className=' text-light text-primary'>Please LogIn</Link></p>
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

export default SignUp;
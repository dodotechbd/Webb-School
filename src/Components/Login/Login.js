import React from 'react';
import SingIn from './SingIn';

const Login = () => {
  return (
    <div className='grid sm:grid grid-rows  md:grid-cols-1 lg:grid-cols'>
      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow  bg-base-300  ">
          <SingIn></SingIn>
        </div>
        
        <div class="w-1/2 shadow-2xl">
                <img class="hidden object-cover w-full h-screen md:block" src="https://i.postimg.cc/pTwVThrD/drbbb-4x.webp"/>
            </div>
        
      </div>
    </div>
  );
};

export default Login;
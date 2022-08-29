import React from "react";
import "./PreLoader.css";
import wslogo from '../../../Assets/wslogo.png'

const PreLoader = () => {
  return (
    <div id="main" className="hero min-h-screen">
      <div class="main-loader">
    <div class="loader">
      <div class="logo-loader">
      <div to={"/"} className="flex items-center lg:mx-0 md:mx-0 mx-auto">
            <img className="w-14" src={wslogo} alt="true" />
            <div className="ml-1 text-2xl font-header font-bold">
              <p>Webb</p>
              <p className="-mt-2">School</p>
            </div>
          </div>
        <div class="dots-row">
          <div class="dot border-2 border-warning"></div>
          <div class="dot border-2 border-warning"></div>
          <div class="dot border-2 border-warning"></div>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default PreLoader;

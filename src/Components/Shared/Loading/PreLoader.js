import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div id="main" className="hero min-h-screen">
      <div id="loader-wrapper" className="loader-wrapper">
        <div id="loader" className="loader box-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="text-5xl font-mono text-center mt-72 text-warning">
        Webb <span className="text-info">School</span>
      </div>
    </div>
  );
};

export default PreLoader;

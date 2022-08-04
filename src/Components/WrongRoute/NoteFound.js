import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/404.svg";

const NoteFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="max-w-lg rounded-lg" />
        <div className="text-center lg:text-left">
          <h1 class="lg:text-5xl md:text-5xl text-4xl font-bold">Page Not Found!</h1>
          <p class="text-lg py-6">
          The page you are looking for could not be found! You can go to your required page by clicking on any of the links shown in the menu above or you can go to the home page of the website by clicking on the Webb School logo above.
          </p>
          <Link
            className="btn btn-wide bg-[#407BFF] text-white font-thin"
            to={"/"}
          >
             Go to homepage
          </Link>
        </div>
      </div>
    </div>
    // <div class="hero min-h-screen bg-base-200">
    //   <div class="hero-content text-center">
    //     <div class="max-w-md">
    //       <img className="w-screen" src={img} alt="" />
    //       <Link className="btn btn-wide bg-[#407BFF] text-white font-thin" to={"/"}>
    //         Go to homepage
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NoteFound;

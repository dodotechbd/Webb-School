import React, { useEffect, useState } from "react";
import LiveClassCard from "./LiveClassCard";
import Loader from "../Shared/Loading/Loader";
import "./Live.css";

const LiveClass = () => {
  const [Lives, setLives] = useState([]);

  useEffect(() => {
    fetch("https://rocky-escarpment-87440.herokuapp.com/lives")
      .then((res) => res.json())
      .then((data) => setLives(data.slice(0, 1)));
  }, []);

  return (
    <div>
      <div className="hidden lg:flex fixed flex-col top-[20%] left-1 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-info rounded">
            <a
              className="flex justify-between items-center w-full text-white font-bold"
              href="/"
            >
              LIVE CLASS<i className="fa-solid fa-video"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex h-screen justify-center items-center ">
        <div className=" cardGlass card  w-96  ">
          <div className="card  w-96 shadow-xl ">
            {Lives.map((live) => (
              <LiveClassCard live={live}></LiveClassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;

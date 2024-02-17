import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div>
      <div className=" flex justify-between items-center sm:px-32 px-5 py-2">
        <p className="  text-center text-[#5FC0DA] text-2xl">
          𝕏<span className=" text-sm">Eche</span>
        </p>
        <div className=" text-[#5FC0DA]">
          <Brightness4Icon />
        </div>
      </div>

      <section className="flex flex-col items-center justify-center ">
        <div className=" text-center">
          <h1 className=" font-bold sm:text-5xl text-3xl py-[35px] text-[#5FC0DA]">
            Welcome to the programming <br /> quiz :)
          </h1>
          <p className=" font-extralight text-2xl text-white">
            Think you know it all ?? Test your knoweledge with our quiz app
            which <br />
            consist of top trending programming languages.. <br />
            Java, Python, C#, Js, php
          </p>

          <h3 className=" sm:text-4xl text-2xl pt-16 font-bold text-[#5FC0DA]">
            Choose from a category below
          </h3>
        </div>
        <div className=" flex sm:flex-row flex-col  justify-center items-center gap-10 py-20 ">
          <button className=" sm:w-[200px] sm:h-[200px] w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center sm:rounded-tl-[20%] sm:rounded-tr-[20%] rounded-lg shadow-md shadow-black bg-blue-600 text-7xl text-blue-300">
            <Link to="/javahome">Java</Link>
          </button>
          <button className=" sm:w-[200px] sm:h-[200px] w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center sm:rounded-tl-[20%] sm:rounded-tr-[20%] rounded-lg shadow-md shadow-black bg-blue-400  text-7xl text-blue-800">
            Python
          </button>
          <button className=" sm:w-[200px] sm:h-[200px] w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center sm:rounded-tl-[20%] sm:rounded-tr-[20%] rounded-lg shadow-md shadow-black bg-purple-600  text-7xl">
            C#
          </button>
          <button className=" sm:w-[200px] sm:h-[200px] w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center sm:rounded-tl-[20%] sm:rounded-tr-[20%] rounded-lg shadow-md shadow-black bg-yellow-500  text-7xl text-white">
            JS
          </button>
          <button className=" sm:w-[200px] sm:h-[200px] w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center sm:rounded-tl-[20%] sm:rounded-tr-[20%] rounded-lg shadow-md shadow-black bg-blue-900  text-7xl">
            PHP
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;

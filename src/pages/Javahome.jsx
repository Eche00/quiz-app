import { ArrowBack, ArrowDownward } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Java() {
  return (
    <div>
      <p className=" text-4xl text-[#5FC0DA] sm:px-10 sm:py-5 px-5">
        <Link to="/">
          <ArrowBack />
        </Link>
      </p>
      <div className=" text-center">
        <h1 className=" font-bold sm:text-5xl text-3xl py-[35px] text-[#5FC0DA]">
          JAVA
        </h1>
        <p className=" font-extralight text-2xl text-white">
          Java is hbjfkefe <br />
          <span className=" font-bold">Let's Go !!</span>
        </p>

        <h3 className=" sm:text-4xl text-2xl pt-16 font-bold text-[#5FC0DA]">
          Choose from levels below <ArrowDownward />
        </h3>
        <div className=" flex flex-col  justify-center items-center gap-10 py-20 ">
          <Link to="/javaeasy">
            <button className="  w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center  rounded-lg shadow-md shadow-gray-400 bg-[#5FC0DA] sm:text-7xl text-4xl text-black">
              Easy
            </button>
          </Link>
          <button className=" w-[80px] h-[70px] sm:w-fit sm:px-10   px-32 py-5 flex items-center justify-center  rounded-lg shadow-md shadow-gray-400 bg-[#5FC0DA] sm:text-7xl text-4xl text-black">
            Intermediate
          </button>
          <button className="  w-[80px] h-[70px]   px-32 py-5 flex items-center justify-center  rounded-lg shadow-md shadow-gray-400 bg-[#5FC0DA] sm:text-7xl text-4xl text-black">
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Java;

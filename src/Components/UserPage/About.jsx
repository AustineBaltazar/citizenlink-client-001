import React from "react";
import Empower from "./Empower";
import { Link, Outlet } from "react-router-dom";
import Thumb3 from "/img/facebook-thumb.png";
import facebook from "/img/facebook.png";

export default function About() {
  return (
    <div>
      <Empower />
      <div className="flex mt-5 mb-16 ">
        <div className="w-full md:w-3/4 xl:w-1/2 mx-auto mt-6">
          <div className=" flex px text-sl justify-center  ">
            <nav className="bg-[#6D2932] w-fit text-white px-4 py-2 rounded-2xl ">
              <Link
                className="  hover:text-cyan-500 transition-colors duration-300"
                to="abouttown"
              >
                Binmaley Town
              </Link>
            </nav>
            <nav className="bg-[#6D2932] w-fit text-white px-2 ml-4 py-2 rounded-2xl">
              <Link
                className=" ml-3 mr-3 hover:text-cyan-500 transition-colors duration-300"
                to="aboutsystem"
              >
                The System
              </Link>
            </nav>
          </div>
          <div className="mt-4 flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

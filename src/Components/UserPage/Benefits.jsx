import React from "react";
import Empower from "./Empower";
import Thumb3 from "/img/bin.jpg";
import facebook from "/img/facebook.png";
import { Link, Outlet } from "react-router-dom";

export default function Benefits() {
  return (
    <div className="px-4 sm:px-8 md:px-16">
      <Empower />

      <div className="flex flex-col md:flex-row mt-5 mb-16">
        <div className="md:w-2/3 md:mr-8">
          <div className="border-b-2 flex px text-lg">
            <nav className=" w-fit text-white ">
              <Link
                className="mr-1 bg-[#6D2932] px-4 py-1 hover:text-cyan-500 transition-colors duration-300"
                to="benefit1"
              >
                Benefits of Senior Citizens
              </Link>
              <Link
                className="mr-4 bg-[#6D2932] px-4 py-1 hover:text-cyan-500 transition-colors duration-300"
                to="benefit2"
              >
                Benefits of 4ps
              </Link>
            </nav>
          </div>
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white p-4 m-2">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex items-center">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.facebook.com/MunicipalityofBinmaley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Thumb3} alt="Video 2" className="w-full h-auto mb-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

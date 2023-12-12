import React from "react";
import Empower from "./Empower";
import list from "/img/list.png";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";
import { Link, Outlet } from "react-router-dom";
import Thumb1 from "/img/thumbnails.png";

export default function Registration() {
  return (
    <div>
      <Empower />
      <div className="flex mt-7">
        <div className="w-[65%] ml-16 mr-16">
          <div className="border-b-2 flex px text-sm">
            <nav className="bg-red-800 w-fit text-white px-2 py-2 ">
              <Link
                className=" mr-4 hover:text-cyan-500 transition-colors duration-300"
                to="Register1"
              >
                Application form 1
              </Link>
            </nav>
            <nav className="bg-red-800 w-fit text-white px-2 ml-4 py-2">
              <Link
                className=" mr-4 hover:text-cyan-500 transition-colors duration-300"
                to="Register2"
              >
                Application form 2
              </Link>
            </nav>
          </div>
          <div className="mt-4">
            <Outlet />
          </div>
        </div>

        <div className="w-[35%] mr-32 mb-32">
          <div className="bg-white 2 ">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Thumb3}
                alt="Video 2"
                className="w-full h-auto mb-16 mt-4"
              />
            </a>
          </div>
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex">
            <img src={list} alt="Logo" className="w-6 mr-2" />
            <h2>LIST OF NEWS</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fix h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fixed h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fixed h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

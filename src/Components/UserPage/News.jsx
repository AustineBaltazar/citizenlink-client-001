import React from "react";
import Empower from "./Empower";
import list from "/img/list.png";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";
import Thumb1 from "/img/thumbnails.png";

export default function News() {
  return (
    <div>
      <Empower />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5 mx-8">
        <div>
          <div className="border-b-2">
            <h1 className="bg-[#6D2932] w-fit px-4 rounded-sm text-white">
              TOP NEWS
            </h1>
          </div>
          <ul className="mt-4">
            <li className="mb-2">
              <a
                href="http://president.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300 "
              >
                August 30, 2017 DSWD Social Pension Program for indigent Senior
                Citizen 2017
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.ovp.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                August 30, 2017 Newly form commission for elders in the
                Philippines
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.senate.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                September 20, 2017 Gov’t asks for small sacrifice from senior
                citizen
              </a>
            </li>
            <li>
              <a
                href="http://www.congress.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                August 30, 2017 DSWD Social Pension Program for indigent Senior
                Citizen 2017
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-1 ">
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex">
            <img src={list} alt="Logo" className="w-6 mr-2" />
            <h2>LIST OF NEWS</h2>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center mb-4">
              <a
                href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Thumb1} alt="Video 1" className="w-fixed h-18" />
              </a>
              <div className="ml-2">
                <p>August 12, 2023</p>
                <p className="text-sm">
                  DSWD Social Pension Program for Indigent Senior Citizen 2017
                </p>
              </div>
            </div>
            {/* Additional news items */}
          </div>
        </div>
        <div className="sm:col-span-1 md:col-span-1">
          <div className="bg-white mr-8">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Thumb3} alt="Video 2" className="w-full h-auto my-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

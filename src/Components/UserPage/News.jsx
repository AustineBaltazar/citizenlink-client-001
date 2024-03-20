import React from "react";
import Empower from "./Empower";
import list from "/img/list.png";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/bin.jpg";
import Thumb1 from "/img/thumbnails.png";

export default function News() {
  return (
    <div>
      <Empower />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1.5 gap-64 mt-5 mx-10">
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
                  August 30, 2017 DSWD Social Pension Program for indigent
                  Senior Citizen 2017
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
                  August 30, 2017 DSWD Social Pension Program for indigent
                  Senior Citizen 2017
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <div className="bg-white mr-8">
              <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
                <img src={facebook} alt="Logo" className="w-8 mr-2" />
                <h2>FOLLOW US ON FACEBOOK</h2>
              </div>
              <a
                href="https://www.facebook.com/MunicipalityofBinmaley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Thumb3}
                  alt="Video 2"
                  className="w-full h-auto my-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

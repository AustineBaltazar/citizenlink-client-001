import React from "react";
import Empower from "./Empower";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";

export default function Download() {
  return (
    <div>
      <Empower />
      <div className="flex mt-8">
        <div className="w-[70%]">
          <div className="border-b-2 ml-32 mr-32">
            <h1 className="bg-[#6D2932] w-fit px-4 text-white rounded-sm">
              Downloads
            </h1>
          </div>
          <div className="border-b-2 ml-32 mr-32 flex justify-between">
            <h1 className=" w-fit px-4  rounded-sm"> </h1>
          </div>
          <div className="border-b-2 ml-32 mr-32 flex justify-between">
            <h1 className=" w-fit px-4  rounded-sm">4P's Registration Form</h1>
            <button className=" w-fit px-4  rounded-sm hover:text-red-500 text-blue-400">
              Download
            </button>
          </div>
          <div className="border-b-2 ml-32 mr-32 flex justify-between mb-32">
            <h1 className=" w-fit px-4  rounded-sm">
              Senior Registration Form
            </h1>
            <button className=" w-fit px-4  rounded-sm hover:text-red-500 text-blue-400">
              Download
            </button>
          </div>
        </div>
        <div className="w-[30%] mr-32">
          <div className="bg-white 2 mr-8">
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
        </div>
      </div>
    </div>
  );
}

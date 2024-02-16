import React from "react";
import lock from "/img/padlock.png";
import user from "/img/user.png";
import barangay from "/img/barangay-logo.png";
import custom from "/img/custom-image.png";

export default function Login() {
  return (
    <div className="flex items-center flex-col  h-screen bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="">
          <img src={barangay} alt="Logo" className="w-62 h-64 " />
          <h1 className="text-5xl font-bold ">CitizenLink Portal</h1>
        </div>
      </div>
      <div className=" p-8 flex items-center justify-center border-solid bg-white mt-8 rounded-md shadow-xl ">
        <form>
          <div className="mb-4 flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img src={user} alt="User Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="user-id" className="block font-medium mr-28">
                User ID number
              </label>
            </div>
            <input
              type="text"
              id="user-id"
              className="border p-2 w-64 rounded-xl "
              placeholder="0000-00-00000"
            />
          </div>
          <div className="mb-4 flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img src={lock} alt="Lock Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="password" className="block font-medium mr-40">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="****************"
              className="border rounded-xl p-2 w-64"
            />
            <div className="mt-4 flex justify-center">
              <button className="bg-[#6D2932] text-white font-bold py-2 px-12 rounded-md">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

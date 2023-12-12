import React from "react";
import lock from "/img/padlock.png";
import user from "/img/user.png";
import barangay from "/img/barangay-logo.png";
import custom from "/img/custom-image.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Left Side (Logo, Heading, and Image) */}
      <div className="w-1/2 p-8 flex flex-col items-center">
        <div className="pl-10">
          <img src={barangay} alt="Logo" className="w-96 h-64" />
          <h1 className="text-5xl font-bold pb-8">CitizenLink Portal</h1>
        </div>
        <img src={custom} alt="Custom Image" className="w-124 h-64" />
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <form>
          <div className="mb-4">
            <div className="flex items-center">
              <img src={user} alt="User Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="user-id" className="block font-medium">
                User ID number
              </label>
            </div>
            <input
              type="text"
              id="user-id"
              className="border p-2 w-128 rounded-xl"
              placeholder="0000-00-00000"
            />
          </div>
          <div className="mb-16">
            <div className="flex items-center">
              <img src={lock} alt="Lock Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="****************"
              className="border rounded-xl p-2 w-128"
            />
            <div className="mt-4">
              <button className="bg-red-800 text-white font-bold py-2 px-12 rounded-md">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

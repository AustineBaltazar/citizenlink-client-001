import React from "react";

export default function NavUser() {
  return (
    <header className="bg-white text-black py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center flex-col ml-24">
          <div className="text-3xl font-bold text-cyan-500 ">
            <span>CitizenLink</span>
          </div>
          <div className=" text-black font-bold text-xl ml-24">Binmaley</div>
        </div>
        <div className="flex items-center mr-24">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-full p-2 border border-gray-400 "
          />
          <button className="bg-red-800 text-whie px-4 p-2 border border-gray-400 rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

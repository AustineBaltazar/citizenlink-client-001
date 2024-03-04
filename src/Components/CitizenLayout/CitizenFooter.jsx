import React from "react";
import { Link } from "react-router-dom";

export default function CitizenFooter() {
  return (
    <footer className="bg-zinc-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-2">
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
          <span className="text-white font-bold">|</span>
          <Link to="/about" className="text-white hover:text-blue-500">
            About
          </Link>
          <span className="text-white font-bold">|</span>
          <Link to="news" className="text-white hover:text-blue-500">
            News
          </Link>
          <span className="text-white">|</span>
          <Link to="benefits" className="text-white hover:text-blue-500">
            Benefits
          </Link>
          <span className="text-white">|</span>
          <Link to="download" className="text-white hover:text-blue-500">
            Downloads
          </Link>
          <span className="text-white">|</span>
        </div>
        <div className="text-white text-xs">
          Copyright © CitizenLink Binmaley 2023
        </div>
      </div>
    </footer>
  );
}

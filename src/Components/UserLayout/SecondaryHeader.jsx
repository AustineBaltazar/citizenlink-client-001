import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SecondaryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header className="bg-red-800 text-white py-4">
      <div className="container mx-auto text-sm">
        <div className="flex space-x-6 ml-28">
          <Link
            to="/"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Home
          </Link>
          <Link
            to="/about/abouttown"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            About
          </Link>
          <Link
            to="/news"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            News
          </Link>
          <Link
            to="benefits/benefit1"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Benefits
          </Link>
          <Link
            to="/download"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Download
          </Link>
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-cyan-500 transition-colors duration-300"
            >
              Apply
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md">
                <Link
                  to="registration/Register1"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown}
                >
                  Senior Citizen
                </Link>
                <Link
                  to="/registersenior"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown}
                >
                  4Ps
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/card"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Card Registration
          </Link>
        </div>
      </div>
    </header>
  );
}

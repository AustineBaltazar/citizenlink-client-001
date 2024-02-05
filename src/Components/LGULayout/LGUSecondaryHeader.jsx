import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SecondaryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const hideDropdown2 = () => {
    setShowDropdown2(false);
  };

  return (
    <header className="bg-red-800 text-white py-4">
      <div className="container mx-auto text-sm">
        <div className="flex space-x-6 ml-28">
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
                  to="/LGU/Register1"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown}
                >
                  Senior Citizen
                </Link>
                <Link
                  to="/LGU/registersenior"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown}
                >
                  4Ps
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={toggleDropdown2}
              className="text-white hover:text-cyan-500 transition-colors duration-300"
            >
              Applicants
            </button>
            {showDropdown2 && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md">
                <Link
                  to="/LGU/applicants
"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown2}
                >
                  Senior Citizen
                </Link>
                <Link
                  to="/LGU/applicants4ps2"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={hideDropdown2}
                >
                  4Ps
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

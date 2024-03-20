import React, { useState } from "react";
import { Link } from "react-router-dom";
import barangay from "/img/barangay-logo.png";

function SideBarRegional() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <aside className="bg-[#6D2932] text-white w-full md:w-[15%]">
      <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">
        <div className="mb-4 text-center">
          <img
            src={barangay}
            alt="Logo"
            className="w-24 h-24 md:w-auto md:h-36 rounded-full mx-auto"
          />
          <p className="text-lg md:text-2xl font-semibold">
            Regional Admin Panel
          </p>
        </div>

        {/* Links */}
        <ul className="mt-8 text-xl md:text-xl">
          <li className="mb-2">
            <Link to="/Regional/dashboard">DashBoard</Link>
          </li>
          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex justify-between w-full text-left"
            >
              Barangay{" "}
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 w-full bg-[#6D2932] mt-2 py-1 rounded-lg shadow-lg">
                <li>
                  <Link
                    to="/Regional/Barangay1/FourPsApplicant1"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    San Isidro Norte
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Regional/Barangay2/FourPsApplicant2"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Baybay Lopez
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2 mt-2">
            <Link to="/Regional/add/muni">Add Staff</Link>
          </li>
          <li className="mb-2">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBarRegional;

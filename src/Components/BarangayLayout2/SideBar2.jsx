import React from "react";
import { Link } from "react-router-dom";
import barangay from "/img/barangay-logo.png";

function Sidebar2() {
  return (
    <aside className="bg-indigo-500 text-white w-full md:w-[15%]">
      <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">
        <div className="mb-4 text-center">
          <img
            src={barangay}
            alt="Logo"
            className="w-24 h-24 md:w-auto md:h-36 rounded-full mx-auto"
          />
          <p className="text-lg md:text-2xl font-semibold">
            CitizenLink Baybay Lopez
          </p>
        </div>

        <ul className="mt-8 text-lg md:text-xl">
          <li className="mb-2">
            <Link to="/Barangay2/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay2/senior">Senior Form</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay2/4ps">4Ps Form</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay2/applicants/Barangay2Senior">Applicants</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay2/onlineNav/online4ps">Online Applicants</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar2;

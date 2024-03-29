import React from "react";
import { Link } from "react-router-dom";
import barangay from "/img/barangay-logo.png";

function Sidebar() {
  return (
    <aside className="bg-[#0569B4] text-white w-full md:w-[15%]">
      <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">
        <div className="mb-4 text-center">
          <img
            src={barangay}
            alt="Logo"
            className="w-24 h-24 md:w-auto md:h-36 rounded-full mx-auto"
          />
          <p className="text-lg md:text-2xl font-semibold">
            CitizenLink San Isidro Norte
          </p>
        </div>

        <ul className="mt-8 text-lg md:text-xl">
          <li className="mb-2">
            <Link to="/Barangay/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay/senior">Senior Form</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay/4ps">4Ps Form</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay/applicants/Barangay1Senior">Applicants</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay/onlineNav/online4ps">Online Applicants</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import barangay from "/img/barangay-logo.png";

export default function LguSideBar() {
  return (
    <aside className="bg-[#2D7144] text-white w-full md:w-[15%]">
      <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">
        <div className="mb-4 text-center">
          <img
            src={barangay}
            alt="Logo"
            className="w-24 h-24 md:w-auto md:h-36 rounded-full mx-auto"
          />
          <p className="text-lg md:text-2xl font-semibold">
            Municipal Admin Panel
          </p>
        </div>

        <ul className="mt-8 text-xl md:text-xl">
          <li className="mb-2">
            <Link to="/Lgu/Dashboard">DashBoard</Link>
          </li>
          <li className="mb-2">
            <Link to="/Lgu/Barangay1/FourPsApplicant1">San Isidro Norte</Link>
          </li>
          <li className="mb-2">
            <Link to="/Lgu/Barangay2/FourPsApplicant2">Baybay Lopez</Link>
          </li>
          <li className="mb-2">
            <Link to="/Lgu/add">Add Staff</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

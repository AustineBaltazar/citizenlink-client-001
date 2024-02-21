import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LguBarangay2() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold flex justify-center my-4">
        San Isidro Sur Applicants
      </h1>
      <div className="text-xl flex justify-center mb-4">
        <ul className="flex">
          <li className="mr-4">
            <Link
              to="/Lgu/Barangay2/FourPsApplicant2"
              className="inline-block bg-[#E8D8C4] hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              4ps Form
            </Link>
          </li>
          <li>
            <Link
              to="/Lgu/Barangay2/SeniorApplicant2"
              className="inline-block bg-[#E8D8C4] hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Senior Form
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Barangay2() {
  return (
    <div className="container bg-gray-100 h-full pt-8">
      <div className="text-sl flex px-4 justify-between ">
        <h1 className="text-2xl font-bold flex justify-center ">
          San Isidro Sur Applicants
        </h1>

        <ul className="flex">
          <li>
            <Link
              to="/Regional/Barangay2/FourPsApplicant2"
              className="inline-block bg-[#6D2932] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l "
            >
              4ps Form
            </Link>
          </li>
          <li>
            <Link
              to="/Regional/Barangay2/SeniorApplicant2"
              className="inline-block bg-[#6D2932] hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-r border-r border-white border-l border-t"
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

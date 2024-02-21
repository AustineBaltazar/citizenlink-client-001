import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BarangayTable() {
  return (
    <div className="container bg-gray-100 h-full pt-8">
      <div className="text-sl flex px-4 justify-between ">
        <h1 className="text-2xl font-bold flex justify-center ">
          San Isidro Norte Applicants
        </h1>
        <ul className="flex">
          <li>
            <Link
              to="/Barangay/applicants/Barangay1Senior"
              className="inline-block bg-[#0569B4] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l  "
            >
              Senior Form
            </Link>
          </li>
          <li>
            <Link
              to="/Barangay/applicants/Barangay14ps"
              className="inline-block bg-[#0569B4] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-r"
            >
              4ps Form
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

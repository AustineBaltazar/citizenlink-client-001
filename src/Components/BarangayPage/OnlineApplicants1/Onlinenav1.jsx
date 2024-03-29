import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BarangayTable() {
  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-blue-500  border-black text-white opacity-80";
      case "on review":
        return "bg-yellow-500  border-black text-white opacity-80";
      case "incomplete":
        return "bg-red-500 border-black text-white opacity-80";
      case "not eligible":
        return "bg-gray-500  border-black text-white opacity-80";
      case "eligible":
        return "bg-orange-500  border-black text-white opacity-80";
      case "rejected":
        return "bg-red-950  border-black text-white opacity-80";
      case "approved":
        return "bg-green-700  border-black text-white opacity-80";
      case "updated":
        return "bg-green-500 border-black text-white opacity-80";
      default:
        return "bg-white  border-black";
    }
  };
  return (
    <div className="container bg-gray-100 h-full pt-8">
      <div className="text-sl flex px-4 justify-between ">
        <h1 className="text-2xl font-bold ml-4">
          San Isidro Norte Online Applicants
        </h1>
        <ul className="flex">
          <li>
            <Link
              to="/Barangay/onlineNav/onlinesenior"
              className="inline-block bg-[#0569B4] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l  "
            >
              Senior Form
            </Link>
          </li>
          <li>
            <Link
              to="/Barangay/onlineNav/online4ps"
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

import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Barangay1() {
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
      <h1 className="text-2xl font-bold ml-4">San Isidro Norte</h1>
      <div className="text-sl flex px-4 justify-between ">
        <div className="flex justify-center mt-4 ">
          <div className="flex items-center">
            <span className="font-semibold">Application Status:</span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("pending")}`}
            ></div>
            <span>Pending</span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("on review")}`}
            ></div>
            <span>On Review</span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("incomplete")}`}
            ></div>
            <span>Incomplete</span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("not eligible")}`}
            ></div>
            <span>Not Eligible</span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("eligible")}`}
            ></div>
            <span>Eligible</span>
          </div>

          <div className="flex items-center">
            <div
              className={`w-4 h-4 ml-1 ${getStatusColorClass("updated")}`}
            ></div>
            <span>Updated</span>
          </div>
        </div>
        <ul className="flex">
          <li>
            <Link
              to="/Lgu/Barangay1/FourPsApplicant1"
              className="inline-block bg-[#2D7144] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l  "
            >
              4ps Form
            </Link>
          </li>
          <li>
            <Link
              to="/Lgu/Barangay1/SeniorApplicant1"
              className="inline-block bg-[#2D7144] hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-r"
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

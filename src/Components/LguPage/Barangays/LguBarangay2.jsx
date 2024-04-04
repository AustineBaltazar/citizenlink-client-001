import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LguBarangay2() {
  const [activeForm, setActiveForm] = useState("senior");

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  const getStatusColorClass2 = (formType) => {
    return activeForm === formType ? "bg-red-500" : "bg-[#2D7144] mt-0.5";
  };

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
      <h1 className="text-2xl font-bold ml-4">BayBay Lopez Applicants</h1>
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
              to="/Lgu/Barangay2/FourPsApplicant2"
              className={`inline-block ${getStatusColorClass2(
                "senior"
              )} hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l`}
              onClick={() => handleFormChange("senior")}
            >
              4ps Records
            </Link>
          </li>
          <li>
            <Link
              to="/Lgu/Barangay2/SeniorApplicant2"
              className={`inline-block ${getStatusColorClass2(
                "4ps"
              )} hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-r`}
              onClick={() => handleFormChange("4ps")}
            >
              Senior Records
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

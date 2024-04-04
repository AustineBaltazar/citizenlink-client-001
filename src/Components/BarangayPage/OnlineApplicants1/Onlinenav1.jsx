import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BarangayTable() {
  const [activeForm, setActiveForm] = useState("senior");

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  const getStatusColorClass = (formType) => {
    return activeForm === formType ? "bg-red-500" : "bg-[#0569B4] mt-0.5";
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
              className={`inline-block ${getStatusColorClass(
                "senior"
              )} hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-l`}
              onClick={() => handleFormChange("senior")}
            >
              Senior Form
            </Link>
          </li>
          <li>
            <Link
              to="/Barangay/onlineNav/online4ps"
              className={`inline-block ${getStatusColorClass(
                "4ps"
              )} hover:bg-gray-400 text-white font-bold py-2 px-2 border-r border-white border-l border-t rounded-r`}
              onClick={() => handleFormChange("4ps")}
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

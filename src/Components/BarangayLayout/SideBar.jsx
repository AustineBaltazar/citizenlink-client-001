import React from "react";
import { Link } from "react-router-dom";
import barangay from "/img/barangay-logo.png";

function Sidebar() {
  return (
    <aside className="bg-[#E8D8C4] text-[#561C24] w-[15%]">
      <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">
        {/* Logo and text */}
        <div className="mb-4 text-center">
          <img src={barangay} alt="Logo" className="w-64 h-32 mx-auto" />
          <p className="text-xl  font-semibold">CitizenLink ??? Barangay</p>
        </div>

        {/* Links */}
        <ul className="mt-8 text-xl">
          <li className="mb-2">
            <Link to="/Barangay">Senior Form</Link>
          </li>
          <li className="mb-2">
            <Link to="/Barangay/4ps">4Ps Form</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

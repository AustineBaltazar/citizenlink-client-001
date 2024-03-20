import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Corrected import statement

export default function SecondaryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    decodeToken(); // Decode the token when component mounts
  }, []);

  const decodeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role); // Extract and store the user role from the decoded token
    }
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header className="bg-[#6D2932] text-white py-7">
      <div className="container mx-auto text-sm">
        <div className="flex justify-between items-center sm:ml-28">
          <div className="space-x-6">
            <Link
              to="/"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              Home
            </Link>
            <Link
              to="/about/abouttown"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              About
            </Link>
            <Link
              to="/news"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              News
            </Link>
            <Link
              to="benefits/benefit1"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              Benefits
            </Link>
            <Link
              to="/download"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              Download
            </Link>
          </div>
          <div>
            {userRole === "regional" && (
              <Link
                to="/regional/dashboard"
                className="text-white hover:text-cyan-500 transition-colors duration-300"
                onClick={hideDropdown}
              >
                Return
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

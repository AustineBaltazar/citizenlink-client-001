import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function SecondaryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    decodeToken();
  }, []);

  const decodeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role);
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
            <Link
              to="/applynow"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              Apply Now
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-cyan-500 transition-colors duration-300"
              onClick={hideDropdown}
            >
              Sign in
            </Link>
          </div>
          <div className="mr-32">
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

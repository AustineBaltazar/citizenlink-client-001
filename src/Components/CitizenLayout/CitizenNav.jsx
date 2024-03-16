import React from "react";
import Logo from "/img/barangay-logo.png";

export default function CitizenNav() {
  return (
    <header className="bg-white text-black py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Barangay Logo" className="h-16 md:h-24 ml-4" />
          <div className="text-2xl md:text-4xl font-bold text-[#6D2932] ml-2">
            CitizenLink Binmaley
          </div>
        </div>
      </div>
    </header>
  );
}

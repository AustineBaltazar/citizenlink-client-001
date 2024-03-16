import React from "react";
import Logo from "/img/barangay-logo.png";

export default function NavUser() {
  return (
    <header className="bg-white text-black py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" items-center flex ">
          <img src={Logo} alt="" className="object-fill h-24 ml-10 " />
          <div className="text-4xl font-bold  text-[#6D2932]">
            <span>CitizenLink Binmaley</span>
          </div>
        </div>
      </div>
    </header>
  );
}

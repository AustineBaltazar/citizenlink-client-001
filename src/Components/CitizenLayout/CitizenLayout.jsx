import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "./CitizenNav";
import SecondaryHeader from "./CitizenSecondNav";
import Footer from "./CitizenFooter";

const CitizenLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <NavUser />
      <SecondaryHeader />
      <div className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CitizenLayout;

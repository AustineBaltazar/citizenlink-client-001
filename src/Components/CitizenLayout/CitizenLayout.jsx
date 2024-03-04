import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "./CitizenNav";
import SecondaryHeader from "./CitizenSecondNav";
import Footer from "./CitizenFooter";

const CitizenLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavUser />
      <SecondaryHeader />
      <div className="container flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CitizenLayout;

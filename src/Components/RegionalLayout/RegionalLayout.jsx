import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "./RegionalUser";
import SecondaryHeader from "./RegionalSecondaryHeader";
import Footer from "./RegionalFooter";

const RegionalUser = () => {
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

export default RegionalUser;

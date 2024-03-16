import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "./NavUser";
import SecondaryHeader from "./SecondaryHeader";
import Footer from "./NavFooter";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavUser />
      <SecondaryHeader />
      <div className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;

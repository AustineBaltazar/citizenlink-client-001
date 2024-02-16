import React from "react";
import Header from "./HeaderRegional";
import SideBar from "./SideBarRegional";
import { Outlet } from "react-router-dom";

export default function BarangayLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

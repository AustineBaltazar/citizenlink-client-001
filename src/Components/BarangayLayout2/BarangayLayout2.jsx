import React from "react";
import Header from "./Header2";
import SideBar from "./SideBar2";
import { Outlet } from "react-router-dom";

export default function BarangayLayout2() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        <SideBar />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex-grow overflow-y-auto">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Header from "./LguHeader";
import SideBar from "./LguSideBar";
import { Outlet } from "react-router-dom";

export default function LguLayout() {
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

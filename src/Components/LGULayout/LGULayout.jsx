import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "./LGUUser";
import SecondaryHeader from "./LGUSecondaryHeader";
import Footer from "./LGUFooter";

const LGULayout = () => {
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

export default LGULayout;

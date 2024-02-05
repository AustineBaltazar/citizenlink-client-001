import React from "react";
import { Link } from "react-router-dom";

export default function RegionalFooter() {
  return (
    <footer className="bg-zinc-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-white text-xs">
          Copyright © CitizenLink Binmaley 2023
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image1 from "/img/image-long-1.png";

export default function Empower() {
  return (
    <div className="w-screen">
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
        `}
      </style>
      <div>
        <img src={Image1} alt="Image 1" className="w-full" />
      </div>
    </div>
  );
}

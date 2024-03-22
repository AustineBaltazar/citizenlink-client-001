import React from "react";
import Image1 from "/img/empower2.png";

export default function Empower() {
  return (
    <div className="w-full">
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
          @media (min-width: 768px) {
            html, body {
              overflow-x: auto;
            }
          }
        `}
      </style>
      <div>
        <img src={Image1} alt="Image 1" className="w-full" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt"; // Import useJwt hook

export default function CitizenSecondNav() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Use useJwt hook to access decoded JWT token
  const { decodedToken } = useJwt(token);

  // Log the decoded token payload
  console.log(decodedToken);

  // Check if decodedToken exists before accessing its properties
  const welcomeMessage = decodedToken
    ? `Welcome: ${decodedToken.name}`
    : "Welcome";

  const handleLogOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <header className="bg-[#6D2932] text-white py-7">
      <div className="container mx-auto text-sm flex justify-between px-16">
        <h1>{welcomeMessage}</h1>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </header>
  );
}

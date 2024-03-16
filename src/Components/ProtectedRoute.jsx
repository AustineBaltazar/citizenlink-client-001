import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ role, ...rest }) => {
  const token = localStorage.getItem("token");
  let decodedToken = null;

  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
  }
  if (!decodedToken || decodedToken.role !== role) {
    return <Navigate to="/noAccess" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

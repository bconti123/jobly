import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRouter = ({ currentUser }) => {
  console.log("Protected Route - currentUser", currentUser);
  if (!currentUser) {
    console.log("Redirecting to /");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRouter;

import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRouter = ({ currentUser }) => {
  console.debug("Protected Route - currentUser", currentUser);
  if (!currentUser) {
    console.debug("Redirecting to /");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRouter;

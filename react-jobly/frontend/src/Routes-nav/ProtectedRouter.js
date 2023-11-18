import { useNavigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRouter = ({ currentUser }) => {
  const navigate = useNavigate();
  console.debug("Protected Route - currentUser", currentUser);
  if (!currentUser) {
    console.debug("Redirecting to /");
    navigate("/");
  }

  return <Outlet />;
};

export default ProtectedRouter;

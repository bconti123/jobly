import React, { useContext } from "react";
import UserContext from "./UserContext";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  setCurrentUser(false);
};

export default Logout;

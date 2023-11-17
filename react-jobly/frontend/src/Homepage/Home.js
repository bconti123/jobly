import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
import UserContext from "../Users/UserContext";

const HomePage = () => {
  // const { state } = useLocation();
  const { currentUser } = useContext(UserContext);

  // const username = state?.username || '';
  // const greeting = `Hello world! ${username}`;

  return <h1 className="text-3xl font-bold underline">Hello</h1>;
};

export default HomePage;

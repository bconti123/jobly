import React, { useContext } from "react";
import UserContext from "../Users/UserContext";

const HomePage = () => {
  const { username } = useContext(UserContext);

  if (!username) {
    return <h1 className="text-3xl font-bold underline">Please Login</h1>;
  }

  return <h1 className="text-3xl font-bold underline">Hello {username}</h1>;
};

export default HomePage;

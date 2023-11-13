import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const username = location.state?.username || '';
  return (
    <h1 className="text-3xl font-bold underline">Hello world! {username}</h1>
  );
};

export default Home;

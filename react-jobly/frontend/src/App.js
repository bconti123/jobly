import React from "react";
import "./App.css";
import NavBar from "./Routes-nav/NavBar";
import RoutesB from "./Routes-nav/RoutesB";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesB />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import NavBar from "./Routes/NavBar";
import RoutesB from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesB />
      </BrowserRouter>
    </div>
  );
}

export default App;

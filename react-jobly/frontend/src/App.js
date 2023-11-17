import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Routes-nav/NavBar";
import RoutesB from "./Routes-nav/RoutesB";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import UserContext from "./Users/UserContext";
import JoblyApi from "./api";

const App = () => {
  // Use useState to manage token and CurrentUser state
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (token) {
      JoblyApi.token = token;
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
    }
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            token,
            setToken,
            username,
            setUsername,
          }}
        >
          <NavBar />
          <RoutesB />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

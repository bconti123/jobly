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
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     if (token) {
  //       try {
  //         // Decode token to get the username
  //         const { username } = jwtDecode(token);
  //         // Fetch the user data using the username
  //         const response = await JoblyApi.getUser(username, token);
  //         setUser(response.user);
  //         // Set the currentUser state with the fetched user data
  //         setCurrentUser(true);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };
  //   // Call the fetchCurrentUser function when the token state changes
  //   fetchCurrentUser();
  // }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, token, setToken }}
        >
          <NavBar />
          <RoutesB />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

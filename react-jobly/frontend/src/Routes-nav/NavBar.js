import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/NavBar.css";
import UserContext from "../Users/UserContext";

const NavBar = () => {
  const { currentUser, setCurrentUser, setToken, setUsername, username } =
    useContext(UserContext);

  const jsx = currentUser ? (
    <div className="navbar-links">
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <Link
        to="/"
        onClick={() => {
          setCurrentUser(false);
          setToken(null);
          setUsername(null);
          localStorage.removeItem("token");
        }}
      >
        (Welcome {username}) - Logout
      </Link>
    </div>
  ) : (
    <div className="navbar-links">
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );

  return (
    <div>
      <nav id="navbar">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {jsx}
      </nav>
    </div>
  );
};

export default NavBar;

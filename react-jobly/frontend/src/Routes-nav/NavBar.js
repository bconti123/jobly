import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/NavBar.css";
import UserContext from "../Users/UserContext";

const NavBar = () => {
  const { currentUser, setCurrentUser, setToken } = useContext(UserContext);

  const jsx = currentUser ? (
    <>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <Link
        to="/"
        onClick={() => {
          setCurrentUser(false);
          setToken(null);
        }}
      >
        Logout
      </Link>
    </>
  ) : (
    <>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
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

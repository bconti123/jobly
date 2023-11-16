import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";
import UserContext from "../Users/UserContext";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const jsx = currentUser ? (
    <>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/logout">Log Out</NavLink>
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

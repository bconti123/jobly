import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './css/NavBar.css'

const NavBar = () => {
  const [IsLogged, SetLogged] = useState(false);
  const jsx = IsLogged ? (
    <>
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink exact to="/jobs">
        Jobs
      </NavLink>
      <NavLink exact to="/profile">
        Profile
      </NavLink>
      <NavLink exact to="/logout">
        Log Out
      </NavLink>
    </>
  ) : (
    <>
      <NavLink exact to="/signup">
        Sign Up
      </NavLink>
      <NavLink exact to="/login">
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <nav>
        
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {jsx}
      </nav>
    </div>
  );
};

export default NavBar;

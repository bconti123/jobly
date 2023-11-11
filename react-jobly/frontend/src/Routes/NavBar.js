import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './css/NavBar.css'

const NavBar = () => {
  const [IsLogged, SetLogged] = useState(false);
  const jsx = IsLogged ? (
    <>
      <NavLink to="/companies">
        Companies
      </NavLink>
      <NavLink to="/jobs">
        Jobs
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
      <NavLink to="/logout">
        Log Out
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to="/signup">
        Sign Up
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <nav>
        
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {jsx}
      </nav>
    </div>
  );
};

export default NavBar;

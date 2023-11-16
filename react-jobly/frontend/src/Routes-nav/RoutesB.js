import React from "react";
import { Route, Routes } from "react-router-dom";
// Import pages for routing.
import HomePage from "../Homepage/Home";

// Users pages for routing.
import SignUp from "../Users/Signup";
import Login from "../Users/Login";
import Logout from "../Users/Logout";
import Profile from "../Users/Profile";

// Companies/Jobs pages for routing.
import CompanyList from "../Companies/CompanyList";
import CompanyDetail from "../Companies/CompanyDetail";
import Jobs from "../Jobs/Jobs";

const RoutesB = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="*" element={<h1>404! ERROR</h1>} />
    </Routes>
  );
};

export default RoutesB;

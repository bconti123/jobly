import React from "react";
import { Route, Routes } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import SignUp from "../Users/Signup";
import Login from "../Users/Login";
import Profile from "../Users/Profile";
import Home from "../Home";
import CompanyDetail from "../Companies/CompanyDetail";
import CompanyList from "../Companies/CompanyList";

const RoutesB = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* If user is logged */}
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/profile" element={<Profile />} />
      {/* else */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* 404 Page */}
      <Route path="*" element={<h1>404! ERROR</h1>} />
    </Routes>
  );
};

export default RoutesB;

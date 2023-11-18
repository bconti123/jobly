import React from "react";
import { Route, Routes } from "react-router-dom";
// Import pages for routing.
import HomePage from "../Homepage/Home";

// Users pages for routing.
import SignUp from "../Users/Signup";
import Login from "../Users/Login";
import Profile from "../Users/Profile";

// Companies/Jobs pages for routing.
import CompanyList from "../Companies/CompanyList";
import CompanyDetail from "../Companies/CompanyDetail";
import Jobs from "../Jobs/Jobs";
import ProtectedRouter from "./ProtectedRouter";
import UserContext from "../Users/UserContext";

const RoutesB = () => {
  const { loading } = React.useContext(UserContext);

  if (loading) {
    // You can render a loading state or redirect to a loading page
    return <p>Loading...</p>;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<ProtectedRouter />}>
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<h1>404! ERROR</h1>} />
    </Routes>
  );
};

export default RoutesB;

import React, { useState } from "react";
import JoblyApi from "../api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = await JoblyApi.login(username, password);
      console.log(token);
      const decoded = jwtDecode(token);
      navigate("/", { username: decoded.username });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

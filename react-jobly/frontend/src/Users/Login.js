import React, { useContext } from "react";
import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";
import UserContext from "../Users/UserContext";
// import useForm from "../Hooks/Form";

import { useState } from "react";

const Login = () => {
  const [forms, setForms] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser, setToken } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForms((prevForms) => ({ ...prevForms, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await JoblyApi.login(forms.username, forms.password);
      setToken(response);
      setCurrentUser(true);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {Object.keys(forms).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type={key === "password" ? "password" : "text"}
            name={key}
            value={forms[key]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;

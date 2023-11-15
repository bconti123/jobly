import React from "react";
import JoblyApi from "../api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/Form";

const Login = () => {
  const { forms, loading, handleInputChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const response = await JoblyApi.login(forms.username, forms.password);
      console.log("Login successful!", response);
      const decoded = jwtDecode(response);
      localStorage.setItem("token", response);
      localStorage.setItem("username", decoded.username);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  //   if (localStorage.getItem("token")) {
  //     navigate("/home");
  //   }

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {Object.keys(forms).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type="text"
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

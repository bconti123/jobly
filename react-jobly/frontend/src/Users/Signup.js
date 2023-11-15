import React from "react";
import useForm from "../Hooks/Form";
import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { forms, loading, handleInputChange, handleSubmit } = useForm({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const response = await JoblyApi.register(
        forms.username,
        forms.password,
        forms.firstName,
        forms.lastName,
        forms.email
      );
      console.log("Registration successful!", response);
      localStorage.setItem("token", response);
      localStorage.setItem("username", forms.username);
      navigate("/home");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {Object.keys(forms).map((key) => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type={key === "password" ? "password" : "text"}
              value={forms[key] || ""}
              onChange={(e) => handleInputChange(key, e.target.value)}
              autoComplete={key === "password" ? "current-password" : ""}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default SignUp;

import React from "react";
import useForm from "../Hooks/Form";

const SignUpForm = () => {
  const { forms, handleInputChange, handleSubmit } = useForm({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(forms).map((key) => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type={key === "password" ? "password" : "text"}
              value={forms[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              autoComplete={key === "password" ? "current-password" : ""}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
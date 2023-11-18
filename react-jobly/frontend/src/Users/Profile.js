import React, { useEffect, useContext, useState } from "react";
import JoblyApi from "../api";
import UserContext from "../Users/UserContext";
import useForm from "../Hooks/Form";

const Profile = () => {
  const { username } = useContext(UserContext);
  const [alert, setAlert] = useState(null);

  console.debug("Profile", "username", username);

  const { forms, setForms, loading } = useForm({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (username) {
      const fetchData = async () => {
        try {
          const response = await JoblyApi.getUser(username);
          console.debug("Profile", "response", response);
          const { firstName, lastName, email } = response;
          setForms({
            username,
            firstName,
            lastName,
            email,
          });
        } catch (error) {
          console.error("Error during fetch:", error);
        }
      };
      fetchData();
    }
  }, [username, setForms]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForms((prevForms) => ({ ...prevForms, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { firstName, lastName, email } = forms;
      const response = await JoblyApi.updateUser(username, {
        firstName,
        lastName,
        email,
      });
      console.debug("Profile", "response", response);
      setAlert(<div>Updated</div>);
    } catch (error) {
      console.error("Error during update:", error);
    }
  };
  console.log(alert);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={forms.username}
          autoComplete={"username"}
          disabled
        />
      </label>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={forms.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={forms.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={forms.email}
          onChange={handleInputChange}
          autoComplete="email"
        />
      </label>
      <input type="submit" value="Submit" disabled={loading} />
      {alert}
    </form>
  );
};

export default Profile;

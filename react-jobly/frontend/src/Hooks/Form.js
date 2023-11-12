import { useState } from "react";

const useForm = (initialState) => {
  const [forms, setForms] = useState(initialState);

  const handleInputChange = (fieldName, value) => {
    setForms((prevForms) => ({
      ...prevForms,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", forms);
    // You might want to send the form data to a server or perform other actions here
  };

  return { forms, handleInputChange, handleSubmit };
};

export default useForm;

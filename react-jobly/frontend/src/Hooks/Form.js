import { useState } from "react";

const useForm = (initialState) => {
  const [forms, setForms] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setForms((prevForms) => {
      return {
        ...prevForms,
        [fieldName]: value,
      };
    });
  };

  const handleSubmit = (submitFunction) => async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call the provided submitFunction with the form data
      await submitFunction(forms);
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return { forms, loading, handleInputChange, handleSubmit };
};

export default useForm;


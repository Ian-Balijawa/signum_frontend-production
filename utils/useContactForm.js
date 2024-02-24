import { useState } from "react";

const useContactForm = () => {
  const defaultValues = {
    lastname: "",
    firstname: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const resetInputValues = () => {
    setValues(defaultValues);
  };

  return { values, handleChange, resetInputValues };
};

export default useContactForm;

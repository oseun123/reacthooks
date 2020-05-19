import { useState } from "react";
export const useForm = (callback, initState = {}, validate) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validate(values)).length === 0) {
      callback();
      setValues(initState);
    } else {
      setErrors(validate(values));
    }
  };

  return { handleChange, handleSubmit, errors, values };
};

import React, { useContext, useRef, useEffect } from "react";
import peopleContext from "../context/peopleContext";
import { useForm } from "../hooks";
const Form = () => {
  const firstnameInput = useRef(null);
  const context = useContext(peopleContext);
  const initPerson = { firstname: "", lastname: "" };

  const validatePersonForm = (values) => {
    let errors = {};
    if (values.firstname.trim() === "") {
      errors.firstname = "Must not be empty";
    }
    if (values.lastname.trim() === "") {
      errors.lastname = "Must not be empty";
    }
    return errors;
  };
  const addPersonFromForm = () => {
    context.addPerson(values);
    console.log(firstnameInput.current);
    firstnameInput.current.focus();
  };
  const { values, errors, handleChange, handleSubmit } = useForm(
    addPersonFromForm,
    initPerson,
    validatePersonForm
  );
  useEffect(() => {
    console.log(values);
  }, [values]);

  // const printNumberOfPeople = () =>
  //   console.log(`Number of people:${context.people.length}`);
  // useMemo(() => printNumberOfPeople(), [context.people]);
  return (
    <div className="col">
      <h2>Add a person</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            id="firstname"
            className={`form-control ${errors.firstname && "is-invalid"}`}
            placeholder="First Name..."
            value={values.firstname}
            onChange={handleChange}
            ref={firstnameInput}
          />
          {errors.firstname && (
            <div className="invalid-feedback">{errors.firstname}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            id="lastname"
            className={`form-control ${errors.lastname && "is-invalid"}`}
            placeholder="Last Name..."
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <div className="invalid-feedback">{errors.lastname}</div>
          )}
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};
export default Form;

import React, { useReducer } from "react";
import Form from "./components/Form";
import People from "./components/People";
import NewestPerson from "./components/NewestPerson";
import peopleContext from "./context/peopleContext";
import peopleReducer from "./context/peopleReducer";
import { ADD_PERSON } from "./context/types";

const App = () => {
  const initialState = {
    people: [
      {
        firstname: "John",
        lastname: "Doe",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
      },
    ],
  };
  const [state, dispatch] = useReducer(peopleReducer, initialState);

  const addPerson = (person) => {
    // setPeople([...people, person]);
    dispatch({
      type: ADD_PERSON,
      payload: person,
    });
  };

  return (
    <peopleContext.Provider
      value={{
        people: state.people,
        addPerson: addPerson,
      }}
    >
      <div className="container mt-4">
        <div className="row">
          <Form />
          <People />
          <NewestPerson />
        </div>
      </div>
    </peopleContext.Provider>
  );
};

export default App;

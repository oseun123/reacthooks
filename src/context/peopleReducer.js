import { ADD_PERSON } from "./types";
const addPerson = (person, state) => {
  const newPeople = [...state.people, person];
  return {
    ...state,
    people: newPeople,
  };
};

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_PERSON:
      return addPerson(payload, state);
    default:
      return state;
  }
};

import React, { useContext } from "react";
import peopleContext from "../context/peopleContext";
const PeopleCount = () => {
  const { people } = useContext(peopleContext);
  return <h2 className="text-center mt-4">{people.length}</h2>;
};
export default PeopleCount;

import React, { useContext } from "react";
import peopleContext from "../context/peopleContext";
const People = () => {
  const { people } = useContext(peopleContext);
  return (
    <div className="col">
      <h2>People :</h2>
      <hr />
      {people.map((p, i) => {
        return (
          <div key={i}>
            <p>
              {p.firstname} {p.lastname}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default People;

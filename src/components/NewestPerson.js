import React, { useEffect, useContext } from "react";
import PeopleCount from "./PeopleCount";
import peopleContext from "../context/peopleContext";

const NewestPerson = () => {
  const { people } = useContext(peopleContext);
  const newestPerson = people[people.length - 1];
  useEffect(() => {
    const newestPersonName = `${newestPerson.firstname} ${newestPerson.lastname}`;
    document.title = newestPersonName;
    console.log("use Effect");
    return () => {
      console.log("use Effect unmount");
    };
  }, [newestPerson]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${newestPerson.firstname} ${newestPerson.lastname}`}
      </h2>
      <PeopleCount />
    </div>
  );
};
export default NewestPerson;

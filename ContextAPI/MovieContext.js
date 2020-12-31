import React, { useState, createContext } from "react";

// CREATE CONTEXT
const MovieContext = createContext();

const MovieProvider = (props) => {
  // STATES TO SHARE
  const [movies, setMovies] = useState([
    {
      name: "Inception",
      price: "250Rs",
    },
    {
      name: "Harry Potter",
      price: "150Rs",
    },
  ]);

  const [age, setAge] = useState(20);
  const addOneToAge = () => setAge(age + 1);
  const addFiveToAge = () => setAge(age + 5);

  return (
    <MovieContext.Provider
      value={([movies, setMovies], age, addOneToAge, addFiveToAge)}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };

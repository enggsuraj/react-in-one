import React, { useState, createContext } from "react";

const MovieContext = createContext();

const MovieProvider = (props) => {
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

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };

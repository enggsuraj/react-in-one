import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);

  return (
    <div>
      {movies.map((m) => (
        <>
          <h1>{m.name}</h1>
          <p>{m.price}</p>
        </>
      ))}
    </div>
  );
}

export { MovieList };
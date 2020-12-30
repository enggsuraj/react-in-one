import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const [movies, setMovies] = useContext(MovieContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, { name: name, price: price }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Movie name"
        onChange={handleName}
      />
      <br /> <br />
      <input
        type="text"
        name="price"
        placeholder="price"
        onChange={handlePrice}
      />
      <br /> <br />
      <button>Submit</button>
    </form>
  );
}

export default AddMovie;

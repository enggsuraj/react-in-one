import React, { useState, createContext } from "react";

// CREATE CONTEXT
const MovieContext = createContext();

const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_FIVE":
      return state + 5;
    default:
      return state;
  }
};

dispatch({ type: "ADD_ONE" });

const MovieProvider = (props) => {
  //   const [age, setAge] = useState(20);
  //   const addOneToAge = () => setAge(age + 1);
  //   const addFiveToAge = () => setAge(age + 5);

  // ALTERNATIVE TO ABOVE IF THERE ARE MANY FN
  // useReducer
  const [age, dispatch] = useReducer(ageReducer, 20);

  return (
    <MovieContext.Provider
      // value={(age, addOneToAge, addFiveToAge)}
      value={(age, dispatch)}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };

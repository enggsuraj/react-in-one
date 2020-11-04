import React from "react";

const profile = (props) => {
  return (
    <>
      <h1>Blogtheorem is {props.word}</h1>;
      <button onClick={props.handleClick}>Click Here!!</button>
    </>
  );
};

export default profile;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setState(result))
      .catch((error) => console.log("error", error));
  });

  const getData = () => {
    console.log(JSON.parse(state));
  };

  return (
    <div className="main">
      <div className="container">
        <img src={logo} alt="React Logo" />
        <h4>Bear Bull Stock Market</h4>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Search"
        />

        <button onClick={getData}>Submit</button>
        <div className="box">
          <div className="high">High: 406.8954 $</div>
          <div className="low">Low: 379.1100 $</div>
          <div className="price">Open: 406.8954 $</div>
          <div className="change">%Change: -5.5473</div>
        </div>
      </div>
    </div>
  );
}

export default App;

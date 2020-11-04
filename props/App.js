import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button Clicked");
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let word = "";
    if (this.state.isLoggedIn) {
      word = "Logged In";
    } else {
      word = "Logged Out";
    }
    return (
      <>
        <Profile
          isLoggedIn={this.state.isLoggedIn}
          word={word}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default App;

import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button Clicked");
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let word = "";
    if (this.state.isLoggedIn) {
      word = "Logged In";
    } else {
      word = "Logged Out";
    }
    return (
      <>
        <Profile
          isLoggedIn={this.state.isLoggedIn}
          word={word}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default App;

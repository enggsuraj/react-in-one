import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.email);
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.data;
    return (
      <>
        <p>{text}</p>
      </>
    );
  }
}

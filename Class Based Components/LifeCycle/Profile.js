import React, { Component } from "react";
import "../App.css";
import logo from "./bell.svg";

class Profile extends Component {
  constructor(props) {
    console.log("constructor 📟");

    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = () =>
      this.setState({
        counter: this.state.counter + 1,
      });

    this.decrement = () =>
      this.setState({
        counter: this.state.counter - 1,
      });
  }

  componentDidMount() {
    console.log("Component Did Mount 😀");
  }

  render() {
    console.log("rendering");
    return (
      <>
        <div className="notification">
          <div className="counter">{this.state.counter}</div>
          <img src={logo} alt="React Logo" />
        </div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update 👍");
  }

  componentWillUnmount() {
    console.log("Component Will Un Mount ✌");
  }
}

export default Profile;

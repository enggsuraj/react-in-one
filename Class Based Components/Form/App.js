import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("Hello");
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <h5>REACT FORM</h5>

        <input
          onChange={this.handleClick}
          type="text"
          value={this.state.firstname}
          name="firstname"
          placeholder="First Name"
        />
        <br></br>

        <input
          onChange={this.handleClick}
          type="text"
          value={this.state.lastname}
          name="lastname"
          placeholder="Last Name"
        />

        <textarea placeholder="Any Message"></textarea>
        <br></br>

        <label>
          <input className="c" type="checkbox" />
          &nbsp; Include Free PDF
        </label>

        <br></br>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            ocChange={this.handleClick}
          />{" "}
          Male
        </label>

        <br></br>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            ocChange={this.handleClick}
          />{" "}
          Female
        </label>

        <br></br>
        <button>Submit</button>

        <p>
          {this.state.firstname} {this.state.lastname}
        </p>
      </div>
    );
  }
}

export default App;

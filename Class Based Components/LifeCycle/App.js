import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };

    this.mountCounter = () =>
      this.setState({
        mount: true,
      });

    this.unmountCounter = () =>
      this.setState({
        mount: false,
      });
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Un-Mount
        </button>

        {this.state.mount ? <Profile /> : null}
      </div>
    );
  }
}

export default App;

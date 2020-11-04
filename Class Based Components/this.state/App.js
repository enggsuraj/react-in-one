import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      happy: 0,
      love: 0,
      sad: 0,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleHappy = this.handleHappy.bind(this);
    this.handleLove = this.handleLove.bind(this);
    this.handleSad = this.handleSad.bind(this);
  }

  handleLike() {
    this.setState((prevState) => {
      return {
        like: prevState.like + 1,
      };
    });
  }

  handleHappy() {
    this.setState((prevState) => {
      return {
        happy: prevState.happy + 1,
      };
    });
  }

  handleLove() {
    this.setState((prevState) => {
      return {
        love: prevState.love + 1,
      };
    });
  }

  handleSad() {
    this.setState((prevState) => {
      return {
        sad: prevState.sad + 1,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Emoji Counter</h2>
        <div className="container__emoji">
          <div onClick={this.handleLike}>
            👍
            <span className="like">{this.state.like}</span>
          </div>
          <div onClick={this.handleHappy}>
            😀<span className="happy">{this.state.happy}</span>
          </div>
          <div onClick={this.handleLove}>
            😍<span className="love">{this.state.love}</span>
          </div>
          <div onClick={this.handleSad}>
            😥<span className="sad">{this.state.sad}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

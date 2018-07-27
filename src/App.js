import React, { Component } from "react";
import math from "mathjs";
import RandomButton from "./RandomButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      value: "",
      newName: "hello"
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();


    this.setState({
      names: [...this.state.names, this.state.newName]
    });
  };

  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>
        <h3>
          {this.state.names.map((name, i) => {
            return this.state.luckyWinnerIndex === i ? (
              <li id="winner" key={i}>{name}</li>) : 
              (
              <li id="" key={i}>{name}</li>);
          })}
        </h3>

        <RandomButton handleClick={() => this.handleClick()} />
          <br /> 
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.newName}
              onChange={(event) => this.setState({newName: event.target.value})}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleClick() {
    const numberOfNames = this.state.names.length;
    const randomInteger = math.randomInt(numberOfNames);
    this.setState({
      luckyWinnerIndex: randomInteger
    });
  }
}

export default App;

import React, { Component } from 'react';
import math from "mathjs" 
import RandomButton from './RandomButton'

class App extends Component {
  constructor(){
    super();
    this.state = {  
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }
  render() {
    return (
      <div>
        <h1 id ="app-title">hello random name picker</h1>
        <h3>
          {this.state.names.map((name,i) => {
            return (this.state.luckyWinnerIndex === i) ? 
              <li id ="winner">{name}</li> :
              <li id ="">{name}</li>
          })}
        </h3>
        <RandomButton handleClick = {()=>this.handleClick()}/> 
      </div>
    );
  }

  handleClick() {
    const numberOfNames = this.state.names.length
    const randomInteger = math.randomInt(numberOfNames)
    this.setState({
      luckyWinnerIndex: randomInteger})
  }

} 

export default App;

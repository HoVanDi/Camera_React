import React, { Component } from 'react'


export default class Change extends Component {
  constructor(props){
    super(props);
    this.state ={
      brand: "food",
      Model: "Mustang",
      color: "red",
      year : 2002
    };
  }

  ChangeColor = () =>{
    this.setState({color: "yellow"});
  }
  render() {
    const backgroundColor = this.state.color === "red" ? "white" : "lightblue";
    return (
      <div style={{ backgroundColor}}>
      <h1>{this.state.brand}</h1>
      <p>it is a {this.state.color} <br></br>
      {this.state.Model}
      from{this.state.year}
      </p>
      button 
      <button type='button' onClick={this.ChangeColor}>Change Color</button>

      </div>
    )
  }
}

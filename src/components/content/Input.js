import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state ={
        name: 'your name'
    }
  }
  onchange(e){
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <input type ='text' onChange ={this.onchange.bind(this)} />
        <p> Hello {this.state.name}</p>
      </div>
    )
  }
}

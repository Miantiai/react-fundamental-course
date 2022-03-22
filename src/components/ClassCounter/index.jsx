import React, { Component } from 'react'

export default class ClassFlugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.setState({value: this.state.value})}>+</button>  
      </div>
    )
  }
}

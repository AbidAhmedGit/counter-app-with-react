import React, { Component } from 'react'

export default class CounterThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.initialCount
        }

        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement(inc=1){
        this.setState((prevState => {
            return (
                {count: prevState.count + inc}
            )
        }))
    }

    handleDecrement(dec=1){
        this.setState((prevState) => {
            return (
                {count: prevState.count -dec}
            )
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement()}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleIncrement()}>+</button>

      </div>
    )
  }
}

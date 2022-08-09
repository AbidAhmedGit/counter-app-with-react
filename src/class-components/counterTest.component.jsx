import React, { Component } from 'react'

export default class CounterTest extends Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount}
    }

    handleDec(dec=1) {
        this.setState((prevState) => {
            return (
                {count: prevState.count -dec}
            )
        })
    }

    handleInc(inc=1) {
        this.setState((prevState)=>{
            return (
                {count: prevState.count +inc}
            )
        })
    }

    handleReset(){
        this.setState(prevState =>{
            return (
                {count: 0}
            )
        })
    }

  render() {
    return (
      <div>
        <>
            <div>Counter Application</div>
            <br />
            <br />
            <div>
                <button onClick={()=>{this.handleDec()}}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>{this.handleInc()}}>+</button>
            </div>
            <br />
            <div>
                <button type="submit" onClick={()=>{this.handleReset()}}>Reset</button>
            </div>
        </>
      </div>
    )
  }
}

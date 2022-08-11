import React, { Component } from 'react'
import { ThemeContext, MsgContext } from '../App';

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
    // console.log('counter-class')
    return (
            <>
            <ThemeContext.Consumer>
                {(value) => {
                    return(
                        <div>
                            <h1>Counter Application - class</h1>
                            <MsgContext.Consumer>
                                {(value) => {
                                    return <h2>{value}</h2>
                                }}
                            </MsgContext.Consumer>
                            <div>
                                <button style={value} onClick={()=>{this.handleDec()}}>-</button>
                                <span>{this.state.count}</span>
                                <button style={value} onClick={()=>{this.handleInc()}}>+</button>
                            </div>
                            <div>
                                <button type="submit" onClick={()=>{this.handleReset()}}>Reset</button>
                            </div>
                            <br />
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
            </>
    )
  }
}

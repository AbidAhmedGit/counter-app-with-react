import React, { Component } from 'react'

export default class CounterTwo extends Component {

    constructor(props) {
        super(props);
        this.state ={
            count: props.initialCount
        }

    }

    handleDecrement(dec=1){
        this.setState(prevState => {
            return {count: (prevState.count -dec)}
        })
    }

    handleIncrement= (inc=1) => {
        this.setState(prevState => {
            return {count: (prevState.count +inc)}
        })
    }

    render() {
        return (
            <>
            <button onClick={()=>this.handleDecrement()}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleIncrement()}>+</button>
            </>
        )
    }


}

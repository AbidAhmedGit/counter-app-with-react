import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleDecrement()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.handleIncrement()}>+</button>
            </div>
        )
    }

    handleDecrement(dec=1) {
        this.setState(prevState => {
            return{count: prevState.count -dec}
        })
    }

    handleIncrement(inc=1) {
        this.setState(prevState => {
            return {count: prevState.count +inc}
        })
    }
}

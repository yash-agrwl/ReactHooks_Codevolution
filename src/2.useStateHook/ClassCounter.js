/* Three steps necessary to implement this Counter:
1. Create a component and we have used a class component.
2. Create a state variable initialized to zero.
3. Create a method that is capable of setting this state value. */

import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
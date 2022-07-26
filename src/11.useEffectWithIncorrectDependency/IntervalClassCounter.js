import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        console.log('tick method, count value:' + this.state.count)
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
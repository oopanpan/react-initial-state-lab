import React, { Component } from 'react'

export class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    boom = () =>{
        if (this.state.secondsLeft === 0){
            return 'Boom!'
        }
        else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        return (
            <div>
                <p>{this.boom()}</p>
            </div>
        )
    }
}

export default Bomb

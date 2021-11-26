import React, { Component } from 'react'
class state extends Component {
    constructor(){
        super();
        this.state={
            message: "Welcome to react!!!" 
        }
    }
    stateChanger(){
        if(this.state.message==="Welcome to react!!!")
        {
            this.setState({
                message: "State Changed!!!"
            })
        }
        else
        {
            this.setState({
                message: "Welcome to react!!!"
            })
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message} : This is a state property</h1>
                <button onClick={()=> this.stateChanger()}>Click me to change the state!!!</button>
            </div>
        )
    }
}

export default state;

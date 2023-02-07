
import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log("COMPONENT LIFE CYCLE 1) I was CONSTRUCTED")
        super();
        this.state = {
            name: 'Todd',
            age: 40
        }
    }

    componentDidMount () {
        console.log("3) I MOUNTED")
    }
    // if this method was not written as arrow function, would need to bind the method to the object in the constructor like this:
    // this.incrementAge = this.incrementAge.bind(this)
    incrementAge = () => {
        this.setState({age: this.state.age + 1})
    }

  render() {
    console.log("2) I was RENDERED")
    return (
      <div>
        <h1>This is the home page of {this.state.name}!!!!</h1>
        <h2>He is {this.state.age} years old and feels {this.state.age * 2}</h2>
        <button onClick={this.incrementAge}>Add to Age</button>
      </div>
    )
  }
}
// STEP 4) IF state changes, re-render

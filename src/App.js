import React, { Component } from 'react'
import Home from './Home';
import Nav from './Nav';
import Pokemon from './Pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Todo from './Todo'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      age: 40
    }
  }

  incrementAge = () => {
    this.setState({age: this.state.age + 1})
  }

  resetAge = () => {
    this.setState({age: 40})
  }

  render() {
    return (
      <BrowserRouter>

        <div>
          <Nav />
          <Routes>

            <Route path='/' element={<Home age={this.state.age} incrementAge = {this.incrementAge} resetAge = {this.resetAge}/>}/>
            <Route path='/pokemon' element={<Pokemon />}/>
            <Route path='/todo' element={<Todo />}/>
            
          </Routes>

        </div>

      </BrowserRouter>
    )
  }
}

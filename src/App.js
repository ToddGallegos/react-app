import React, { Component } from 'react'
import Home from './Home';
import Nav from './Nav';
import Pokemon from './Pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <Nav />
          <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/pokemon' element={<Pokemon />}/>
            
          </Routes>

        </div>

      </BrowserRouter>
    )
  }
}

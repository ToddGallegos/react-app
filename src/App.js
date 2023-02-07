import React, { Component } from 'react'
import Home from './Home';
import Nav from './Nav';
import Pokemon from './Pokemon';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Pokemon />
      </div>
    )
  }
}

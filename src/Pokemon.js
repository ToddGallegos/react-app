import React, { Component } from 'react'

export default class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            pokename: "",
            pokepic: ""
        }
    }

    getPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const data = await response.json();
        const pokename = data.name
        const pokepic = data.sprites.front_default
        this.setState({pokename: pokename, pokepic: pokepic})
    }

    // componentDidMount very helpful for async actions
    componentDidMount(){
        this.getPokemon()
    }

    showPokemon = () => {
        return <div><h1>{this.state.pokename}</h1>
            <img src={this.state.pokepic} alt="pokemon"></img>
        </div>
    }

  render() {
    return (
      <div>
        <h1>A Pokemon from pokeapi.co:</h1>
        {this.showPokemon()}
      </div>
    )
  }
}

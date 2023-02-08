import React, { Component } from 'react';

export default class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            pokename: "",
            pokepic: "",
            pokemons: []
        }
    }

    getPokemon = async () => {
        const response = await fetch("http://localhost:5000/pokemonapi");
        const data = await response.json();
        const pokename = data.name
        const pokepic = data.front_shiny_sprite
        this.setState({pokename: pokename, pokepic: pokepic})
        this.setState({pokemons: data})
    }

    // componentDidMount very helpful for async actions
    componentDidMount(){
        this.getPokemon()
    }

    showPokemon = () => {
        const style1 = {
          'width': '18rem',
          'margin': '1rem'
        }
        const style2 = {
          'width': '75%',
          'margin': '0 auto'
        }

        return this.state.pokemons.map(p => 
          <div className="card" style={style1} key={p.id}>
            <img style={style2} src={ p.front_shiny_sprite } className="card-img-top" alt={ p.pokemon_name }/>
            <div className="card-body">
                <h5 className="card-title">{ p.pokemon_name }</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HP: { p.base_hp }</li>
              <li className="list-group-item">Attack: { p.base_attack }</li>
              <li className="list-group-item">Defense: { p.base_defense }</li>
            </ul>
          </div>)
        }

  render() {
    return (
      <div>
        <h1>All Pokemon from Flask App Database via API:</h1>
        <div className="d-inline-flex flex-wrap">
          {this.state.pokemons.length === 0? <p>loading...</p> : this.showPokemon()}
        </div>
      </div>
    )
  }
}

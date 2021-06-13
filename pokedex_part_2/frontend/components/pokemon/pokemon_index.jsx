import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon();
  }
  
  render(){
    return (
    <section className="pokedex">
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      <ul>
      {this.props.pokemon.map((poke, idx) => (
        <PokemonIndexItem 
          key={idx} 
          name={poke.name} 
          imageUrl={poke.imageUrl} 
          id={poke.id}
        />
      ))}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;
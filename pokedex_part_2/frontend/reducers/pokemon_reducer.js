import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return action.pokemon;
  case RECEIVE_SINGLE_POKEMON:
    newState[action.singlePokemonData.pokemon.id] = action.singlePokemonData.pokemon;
    return newState;
  default:
    return state;
  }
}
  
export default pokemonReducer;

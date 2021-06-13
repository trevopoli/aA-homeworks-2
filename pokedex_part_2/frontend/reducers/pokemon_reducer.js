import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_SINGLE_POKEMON:
    newState[action.singlePokemonData.pokemon.id] = action.singlePokemonData.pokemon;
    return newState;
  default:
    return state;
  }
}
  
export default pokemonReducer;

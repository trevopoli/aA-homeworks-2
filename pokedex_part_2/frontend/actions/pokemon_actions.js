import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveSinglePokemon = (singlePokemonData) => ({
  type: RECEIVE_SINGLE_POKEMON,
  singlePokemonData
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchSinglePokemon(pokemonId)
    .then(singlePokemonData => dispatch(receiveSinglePokemon(singlePokemonData)))
)
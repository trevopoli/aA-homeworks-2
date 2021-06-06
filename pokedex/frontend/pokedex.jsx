import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions'

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>React DOM</h1>, root);

    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
});
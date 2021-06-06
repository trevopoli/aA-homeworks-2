import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
import * as APIUtil from './util/api_util';
import { requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>React DOM</h1>, root);

    const store = createStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
});
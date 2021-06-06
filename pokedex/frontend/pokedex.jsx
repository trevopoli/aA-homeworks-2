import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/api_util';
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    const store = createStore();

    ReactDOM.render(<Root store={store} />, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
});
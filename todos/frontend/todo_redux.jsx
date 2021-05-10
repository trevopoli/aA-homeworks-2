import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';

const Test = () => <h1>Todos App</h1>;

const store = configureStore;
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(<Test />, content);
});
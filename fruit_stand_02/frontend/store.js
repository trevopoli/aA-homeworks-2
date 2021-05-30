import reducer from './reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const Store = createStore(reducer);

const store = (preloadedState = {}) => (
    createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
);

export default store;

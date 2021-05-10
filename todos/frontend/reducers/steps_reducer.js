import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach( step => {
                nextState[step.id] = step;
            });
            return nextState;
        case RECEIVE_STEP:
            let step = {[action.step.id]: action.step};
            return Object.assign({}, state, step);
        case REMOVE_STEP:
            nextState = Object.assign({}, state);
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
};

export default stepsReducer;
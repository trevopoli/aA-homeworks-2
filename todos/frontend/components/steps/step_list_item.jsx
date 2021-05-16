import React from 'react';

const StepListItem = ({step, receiveStep, removeStep}) => (
    <li>
        <p className="step-title">{step.title}</p>
        <p className="step-body">{step.body}</p>
        <button onClick={()=>receiveStep(toggleStepDone(step))}>{ step.done ? "undo" : "done"}</button>
        <button onClick={()=>removeStep(step)}>delete</button>
    </li>
)

const toggleStepDone = (step) => {
    let newStep = Object.assign({},step);

    newStep.done = !newStep.done;

    return newStep;
}

export default StepListItem;
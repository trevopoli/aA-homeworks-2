import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = ({ receiveStep, steps, todo_id}) => (
    <div className="step-list">
        <ul className="step-list">
            {steps.map( (step, idx) => <StepListItemContainer step={step} key={idx} />)}
        </ul>
        <StepForm todo_id={todo_id} receiveStep={receiveStep}/>
    </div>
);

export default StepList;
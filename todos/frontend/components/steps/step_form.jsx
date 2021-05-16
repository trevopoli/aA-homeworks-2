import React from 'react';
import { uniqueId } from '../../util';

class StepForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
            todo_id: props.todo_id
        };

        this.receiveStep = props.receiveStep;
        this.todo_id = props.todo_id;

        this.titleChange = this.titleChange.bind(this);
        this.bodyChange = this.bodyChange.bind(this);
        this.submitStep = this.submitStep.bind(this);
    }

    titleChange (event) {
        this.setState({ title: event.target.value });
    }

    bodyChange (event) {
        this.setState({ body: event.target.value });
    }

    submitStep (event) {
        event.preventDefault();
        let step = this.state;
        this.receiveStep(step);
        this.resetForm();
    }

    resetForm () {
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
            todo_id: this.todo_id
        });
    }

    render () {
        let step = this.state;

        return (
            <form>
                <h3>New Step</h3>
                <label htmlFor="step-title-input">Title: </label>
                <input onChange={this.titleChange} name="step-title-input" value={step.title}></input>
                <label htmlFor="step-body-input">Body: </label>
                <textarea onChange={this.bodyChange} name="step-body-input" value={step.body} />
                <button onClick={this.submitStep}>Add Step</button>
            </form>
        );
    };
}

export default StepForm;
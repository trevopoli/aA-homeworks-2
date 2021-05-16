import React from 'react';
import { uniqueId } from '../../util';

class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        };

        this.titleChange = this.titleChange.bind(this);
        this.bodyChange = this.bodyChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    };

    titleChange = function (event) {
        this.setState({title: event.target.value });
    }

    bodyChange = function (event) {
        this.setState({body: event.target.value });
    }

    submitTodo = function (event) {
        event.preventDefault();
        this.props.receiveTodo(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            id: uniqueId(),
            title: "",
            body: ""
        });
    }

    render () {
        let todo = this.state;

        return (
            <form>
                <h3>New Todo</h3>
                <label htmlFor="todo-title-input">Title: </label>
                <input onChange={this.titleChange} name="todo-title-input" value={todo.title}></input>
                <label htmlFor="todo-body-input">Body: </label>
                <textarea onChange={this.bodyChange} name="todo-body-input" value={todo.body}/>
                <button onClick={this.submitTodo}>Add Todo</button>
            </form>
        );
    };

};

export default TodoForm;
import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            detail: false
        };

        this.toggleTodoDetail = this.toggleTodoDetail.bind(this);
    }

    toggleTodoDone = (todo) => {
        if (todo.done) {
            todo.done = false;
        } else {
            todo.done = true;
        }
        return todo;
    }

    toggleTodoDetail = () => {
        this.state.detail ? this.setState({ detail: false }) : this.setState({ detail: true });
    }
    
    render () {
        let todo = this.props.todo;
        let receiveTodo = this.props.receiveTodo;

        return (
            <li>
                <h4 onClick={this.toggleTodoDetail}>{todo.title}</h4>
                <button onClick={()=>receiveTodo(this.toggleTodoDone(todo))}>{todo.done ? "undo" : "done"}</button>
                {this.state.detail ? <TodoDetailViewContainer todo={todo} /> : null}
            </li>
        );
    };
};


export default TodoListItem;
import React from 'react';
import StepListContainer from '../steps/step_list_container';

const TodoDetailView = ({ todo, removeTodo }) => (
    <div className="todo-detail">
        <p className="todo-body">{todo.body}</p>
        <button onClick={() => removeTodo(todo)}>delete</button>
        <StepListContainer todo_id={todo.id}/>
    </div>
);

export default TodoDetailView;
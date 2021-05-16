import React from 'react';

const TodoDetailView = ({ todo, removeTodo }) => (
    <div className="todo-detail">
        <p className="todo-body">{todo.body}</p>
        <button onClick={() => removeTodo(todo)}>delete</button>    
    </div>
);

export default TodoDetailView;
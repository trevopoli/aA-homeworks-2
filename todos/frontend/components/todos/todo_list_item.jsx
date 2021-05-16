import React from 'react';

const TodoListItem = ({ todo, removeTodo, receiveTodo }) => (
    <li>
        <p>{todo.title}</p>
        <button onClick={()=>receiveTodo(toggleTodoDone(todo))}>{todo.done ? "undo" : "done"}</button>
        <button onClick={()=>removeTodo(todo)}>delete</button>
    </li>
);

const toggleTodoDone = (todo) => {
    if (todo.done) {
        todo.done = false;
    } else {
        todo.done = true;
    }
    return todo;
}

export default TodoListItem;
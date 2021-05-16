import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
    <div>
        <TodoForm receiveTodo={receiveTodo} />
        <ul>
            {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} />)}
        </ul>
    </div>
    
);

export default TodoList;
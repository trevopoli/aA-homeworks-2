import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => (
    <div>
        <TodoForm receiveTodo={receiveTodo} />
        <ul>
            {todos.map((todo, idx) => (
                <TodoListItem 
                    key={idx} 
                    todo={todo} 
                    receiveTodo={receiveTodo} 
                    removeTodo={removeTodo}/>))
            }
        </ul>
    </div>
    
);

export default TodoList;
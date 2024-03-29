import React from 'react';
import { allTodos } from '../../reducers/selectors';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
    todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
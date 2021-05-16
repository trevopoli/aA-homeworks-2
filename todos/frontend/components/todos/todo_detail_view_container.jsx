import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';
import { receiveSteps } from '../../actions/step_actions';


const mapDispatchToProps = (dispatch) => ({
    removeTodo: todo => dispatch(removeTodo(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps))
});

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView);
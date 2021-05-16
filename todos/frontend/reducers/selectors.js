export const allTodos = (state) => {
    return Object.values(state.todos);
};

export const stepsByTodoId = (state, todoId) => {
    let steps = Object.values(state.steps);

    return steps.filter( step => step.todo_id == todoId);
};
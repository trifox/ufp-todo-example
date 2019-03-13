const deleteTodo = ({id}) => {
    return {
        type: 'DELETE_TODO',
        payload: {id}
    }
}

const markTodo = ({id}) => {
    return {
        type: 'MARK_TODO',
        payload: {id}
    }
}

const addTodo = ({todo}) => {
    return {
        type: 'ADD_TODO',
        payload: {todo}
    }
}
export default {
    addTodo,
    markTodo,
    deleteTodo
}

const deleteTodo = ({todo}) => {
    return {
        type: 'DELETE_TODO',
        payload: {todo}
    }
}

const markTodo = ({todo}) => {
    return {
        type: 'MARK_TODO',
        payload: {todo}
    }
}

const addTodo = ({todo}) => {
    console.log('adding todo', todo)
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

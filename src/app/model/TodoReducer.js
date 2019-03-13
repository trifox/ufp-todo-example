import TodoConstants from './TodoConstants'

const TodoReducer = (state = {todos: []}, action) => {

    switch (action.type) {

        case TodoConstants.ADD_TODO:
            return state
        case TodoConstants.MARK_TODO:
            return state
        case TodoConstants.DELETE_TODO:
            return state
        default:
            return state
    }

}

export default TodoReducer

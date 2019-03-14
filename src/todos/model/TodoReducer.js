import update from 'react-addons-update'
import TodoConstants from './TodoConstants'

const TodoReducer = (state = {todos: []}, action) => {
    console.log('Todo Reducer', state, action)
    let todoIndexFunc = () => {
        let index = -1
        state.todos.forEach((todo, indexCurrent) => {
            if (todo.id === action.payload.todo.id) {
                index = indexCurrent
            }
        })
        return index
    }
    switch (action.type) {

        case TodoConstants.ADD_TODO:
            return update(state, {
                todos: {
                    $push: [{
                        mark: false,
                        id: `${Date.now()}`,
                        ...action.payload.todo
                    }]
                }
            })
        case TodoConstants.MARK_TODO:

            return update(state, {todos: {[todoIndexFunc()]: {mark: {$set: !state.todos[todoIndexFunc()].mark}}}})
        case TodoConstants.DELETE_TODO:
            return update(state, {todos: {$splice: [[todoIndexFunc(), 1]]}})
        default:
            return state
    }

}

export default TodoReducer
